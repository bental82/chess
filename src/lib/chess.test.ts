import { describe, it, expect } from 'vitest';
import { Chess } from 'chess.js';
import { sanEquals, moveMatches, tryMove } from './chess';

describe('sanEquals', () => {
  it('treats decoration as equivalent', () => {
    expect(sanEquals('Qg7#', 'Qg7')).toBe(true);
    expect(sanEquals('Nxd6+', 'Nxd6')).toBe(true);
    expect(sanEquals('Nxd6', 'Nd6')).toBe(false); // capture matters
  });
});

describe('moveMatches', () => {
  it('matches identical SAN', () => {
    const fen = '4k3/7Q/4K3/8/8/8/8/8 w - - 0 1';
    expect(moveMatches(fen, 'Qe7#', 'Qe7#')).toBe(true);
  });

  it('returns false for an entirely different move', () => {
    const fen = '4k3/7Q/4K3/8/8/8/8/8 w - - 0 1';
    expect(moveMatches(fen, 'Qa7', 'Qe7#')).toBe(false);
  });
});

describe('tryMove', () => {
  it('returns null for an illegal move and leaves game intact', () => {
    const game = new Chess();
    expect(tryMove(game, 'e5')).toBeNull();
    expect(game.fen()).toBe('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');
  });

  it('plays a legal move', () => {
    const game = new Chess();
    expect(tryMove(game, 'e4')?.san).toBe('e4');
  });
});
