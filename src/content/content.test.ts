import { describe, it, expect } from 'vitest';
import { Chess } from 'chess.js';
import { course } from './index';

describe('course content', () => {
  const allLessons = course.parts.flatMap((p) => p.chapters).flatMap((c) => c.lessons);
  const allSections = allLessons.flatMap((l) => l.sections);

  it('has six parts', () => {
    expect(course.parts).toHaveLength(6);
  });

  it('has globally unique lesson ids', () => {
    const ids = allLessons.map((l) => l.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('has globally unique exercise ids', () => {
    const ids = allSections
      .filter((s) => s.kind === 'exercise')
      .map((s) => (s as Extract<typeof s, { kind: 'exercise' }>).id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('every diagram and exercise FEN is valid', () => {
    for (const s of allSections) {
      if (s.kind === 'diagram' || s.kind === 'walkthrough' || s.kind === 'exercise') {
        expect(() => new Chess(s.fen), `invalid FEN: ${s.fen}`).not.toThrow();
      }
    }
  });

  it('every walkthrough plays through legally', () => {
    for (const s of allSections) {
      if (s.kind !== 'walkthrough') continue;
      const game = new Chess(s.fen);
      for (const san of s.moves) {
        expect(() => game.move(san), `walkthrough failed at ${san} (${s.fen})`).not.toThrow();
      }
    }
  });

  it('every exercise solution is a legal sequence and the user move matches sideToMove', () => {
    for (const s of allSections) {
      if (s.kind !== 'exercise') continue;
      const game = new Chess(s.fen);
      expect(game.turn(), `wrong sideToMove for exercise ${s.id}`).toBe(s.sideToMove);
      for (const san of s.solution) {
        expect(() => game.move(san), `exercise ${s.id} failed at ${san}`).not.toThrow();
      }
    }
  });

  it('any solution move annotated with # is actually checkmate', () => {
    for (const s of allSections) {
      if (s.kind !== 'exercise') continue;
      const game = new Chess(s.fen);
      for (let i = 0; i < s.solution.length; i++) {
        const san = s.solution[i];
        game.move(san);
        if (san.endsWith('#')) {
          expect(
            game.isCheckmate(),
            `exercise ${s.id} move #${i + 1} "${san}" is annotated as mate but isn\'t`,
          ).toBe(true);
        }
      }
    }
  });
});
