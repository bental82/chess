import { Chess, type Move } from 'chess.js';

/** Try a SAN or {from,to,promotion} move; return the resulting Move object or null. */
export function tryMove(
  game: Chess,
  move: string | { from: string; to: string; promotion?: string },
): Move | null {
  try {
    return game.move(move as never);
  } catch {
    return null;
  }
}

/** Compare two SAN strings ignoring punctuation (+, #, !, ?, x). */
export function sanEquals(a: string, b: string): boolean {
  const norm = (s: string) => s.replace(/[+#!?]/g, '').replace(/=/g, '').toLowerCase();
  return norm(a) === norm(b);
}

/** Returns true if making `attempt` from the FEN yields the same position as `expectedSan`. */
export function moveMatches(fen: string, attemptSan: string, expectedSan: string): boolean {
  if (sanEquals(attemptSan, expectedSan)) return true;
  // Fall back to position comparison
  const a = new Chess(fen);
  const b = new Chess(fen);
  try {
    a.move(attemptSan);
    b.move(expectedSan);
  } catch {
    return false;
  }
  return a.fen() === b.fen();
}
