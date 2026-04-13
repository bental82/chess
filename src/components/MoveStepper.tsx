import { useMemo, useState } from 'react';
import { Chessboard } from 'react-chessboard';
import { Chess } from 'chess.js';
import { useBoardSize } from '../lib/useBoardSize';

interface MoveStepperProps {
  fen: string;
  moves: string[]; // SAN
  commentary?: string[];
  orientation?: 'white' | 'black';
  caption?: string;
  size?: number;
}

export default function MoveStepper({
  fen,
  moves,
  commentary,
  orientation = 'white',
  caption,
  size,
}: MoveStepperProps) {
  const responsive = useBoardSize();
  const px = size ?? responsive;
  const [ply, setPly] = useState(0); // 0 = starting position, 1 = after first move

  const positions = useMemo(() => {
    const game = new Chess(fen);
    const fens = [game.fen()];
    for (const san of moves) {
      try {
        game.move(san);
        fens.push(game.fen());
      } catch {
        break;
      }
    }
    return fens;
  }, [fen, moves]);

  const currentFen = positions[Math.min(ply, positions.length - 1)];
  const note = ply > 0 ? commentary?.[ply - 1] : undefined;
  const movePlayed = ply > 0 ? moves[ply - 1] : undefined;
  const moveNumber = (i: number) => {
    const startMoveNo = parseInt(fen.split(' ')[5] ?? '1', 10);
    const startSide = fen.split(' ')[1] ?? 'w';
    const halfMoveOffset = startSide === 'w' ? 0 : 1;
    const halfTotal = (startMoveNo - 1) * 2 + halfMoveOffset + i;
    const moveNo = Math.floor(halfTotal / 2) + 1;
    const isWhite = halfTotal % 2 === 0;
    return `${moveNo}${isWhite ? '.' : '...'}`;
  };

  return (
    <figure className="my-4">
      <div className="flex flex-col sm:flex-row gap-4 items-start">
        <div style={{ width: px }}>
          <Chessboard
            position={currentFen}
            boardOrientation={orientation}
            arePiecesDraggable={false}
            customLightSquareStyle={{ backgroundColor: '#f0d9b5' }}
            customDarkSquareStyle={{ backgroundColor: '#b58863' }}
            customBoardStyle={{ borderRadius: 6, boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
          />
        </div>
        <div className="flex-1 min-w-[200px]">
          <div className="flex gap-2 mb-3">
            <button
              type="button"
              onClick={() => setPly(0)}
              className="px-2 py-1 text-sm rounded bg-stone-200 hover:bg-stone-300 disabled:opacity-50"
              disabled={ply === 0}
              aria-label="Reset to start"
            >
              ⏮
            </button>
            <button
              type="button"
              onClick={() => setPly((p) => Math.max(0, p - 1))}
              disabled={ply === 0}
              className="px-3 py-1 text-sm rounded bg-stone-200 hover:bg-stone-300 disabled:opacity-50"
            >
              ← Prev
            </button>
            <button
              type="button"
              onClick={() => setPly((p) => Math.min(moves.length, p + 1))}
              disabled={ply >= moves.length}
              className="px-3 py-1 text-sm rounded bg-amber-200 hover:bg-amber-300 disabled:opacity-50"
            >
              Next →
            </button>
          </div>
          <div className="text-sm text-stone-700">
            {movePlayed ? (
              <p>
                <span className="font-semibold">{moveNumber(ply - 1)} {movePlayed}</span>
                {note && <span className="block mt-1">{note}</span>}
              </p>
            ) : (
              <p className="italic text-stone-500">Starting position. Use Next to step through.</p>
            )}
          </div>
          <div className="mt-3 text-xs text-stone-500">
            Move {ply} of {moves.length}
          </div>
        </div>
      </div>
      {caption && <figcaption className="text-sm text-stone-600 mt-2 italic">{caption}</figcaption>}
    </figure>
  );
}
