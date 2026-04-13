import { useEffect, useMemo, useRef, useState } from 'react';
import { Chessboard } from 'react-chessboard';
import { Chess } from 'chess.js';
import { useProgress } from '../store/progress';
import { moveMatches } from '../lib/chess';

interface ExerciseBoardProps {
  id: string;
  fen: string;
  solution: string[];
  hint?: string;
  sideToMove: 'w' | 'b';
  explanation: string;
  title?: string;
}

type Status = 'idle' | 'wrong' | 'partial' | 'solved' | 'revealed';

export default function ExerciseBoard({
  id,
  fen,
  solution,
  hint,
  sideToMove,
  explanation,
  title,
}: ExerciseBoardProps) {
  const gameRef = useRef(new Chess(fen));
  const [position, setPosition] = useState(fen);
  const [ply, setPly] = useState(0);
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState<string | null>(null);
  const wrongCountRef = useRef(0);
  const [showHint, setShowHint] = useState(false);

  const recordAttempt = useProgress((s) => s.recordAttempt);
  const markSolved = useProgress((s) => s.markExerciseSolved);
  const completed = useProgress((s) => s.completedExercises[id]);

  const orientation = sideToMove === 'w' ? 'white' : 'black';

  const reset = () => {
    gameRef.current = new Chess(fen);
    setPosition(fen);
    setPly(0);
    setStatus('idle');
    setMessage(null);
    setShowHint(false);
    wrongCountRef.current = 0;
  };

  // Reset when fen changes (different exercise rendered in same component instance)
  useEffect(() => {
    reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fen]);

  const isUserTurn = useMemo(() => {
    return gameRef.current.turn() === sideToMove && status !== 'solved' && status !== 'revealed';
  }, [position, sideToMove, status]);

  function playOpponentReplyIfAny(currentPly: number) {
    if (currentPly < solution.length && gameRef.current.turn() !== sideToMove) {
      const reply = solution[currentPly];
      try {
        gameRef.current.move(reply);
        setPosition(gameRef.current.fen());
        return currentPly + 1;
      } catch {
        return currentPly;
      }
    }
    return currentPly;
  }

  function handleMove(from: string, to: string, promotion?: string): boolean {
    if (!isUserTurn) return false;
    const beforeFen = gameRef.current.fen();
    let attemptMove;
    try {
      attemptMove = gameRef.current.move({ from, to, promotion: promotion ?? 'q' });
    } catch {
      return false;
    }
    if (!attemptMove) return false;

    const expected = solution[ply];
    if (!moveMatches(beforeFen, attemptMove.san, expected)) {
      // Wrong move — undo and record
      gameRef.current.undo();
      wrongCountRef.current += 1;
      recordAttempt(id);
      setStatus('wrong');
      setMessage('Not the best move. Try again.');
      if (wrongCountRef.current >= 2 && hint) setShowHint(true);
      return false;
    }

    // Correct move
    let nextPly = ply + 1;
    setPosition(gameRef.current.fen());
    nextPly = playOpponentReplyIfAny(nextPly);
    setPly(nextPly);

    if (nextPly >= solution.length) {
      setStatus('solved');
      setMessage(null);
      markSolved(id);
    } else {
      setStatus('partial');
      setMessage('Correct! Find the next move.');
    }
    return true;
  }

  function revealSolution() {
    const game = new Chess(fen);
    for (const san of solution) {
      try {
        game.move(san);
      } catch {
        break;
      }
    }
    gameRef.current = game;
    setPosition(game.fen());
    setPly(solution.length);
    setStatus('revealed');
    setMessage('Solution shown.');
  }

  return (
    <section className="my-6 p-4 rounded-lg border border-amber-300/70 bg-amber-50/50">
      <header className="flex items-baseline justify-between mb-3 gap-2">
        <h3 className="text-lg font-semibold">
          {title ?? 'Exercise'}
          {completed && <span className="ml-2 text-emerald-700 text-sm">✓ solved</span>}
        </h3>
        <span className="text-xs text-stone-500">
          {sideToMove === 'w' ? 'White' : 'Black'} to move
        </span>
      </header>

      <div className="flex flex-col sm:flex-row gap-4">
        <div style={{ width: 360 }}>
          <Chessboard
            position={position}
            boardOrientation={orientation}
            arePiecesDraggable={isUserTurn}
            onPieceDrop={(s, t) => handleMove(s, t)}
            customLightSquareStyle={{ backgroundColor: '#f0d9b5' }}
            customDarkSquareStyle={{ backgroundColor: '#b58863' }}
            customBoardStyle={{ borderRadius: 6, boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
          />
        </div>

        <div className="flex-1 min-w-[220px] text-sm">
          {message && (
            <p
              className={
                status === 'wrong'
                  ? 'text-red-700 mb-2'
                  : status === 'partial'
                    ? 'text-emerald-700 mb-2'
                    : 'text-stone-600 mb-2'
              }
            >
              {message}
            </p>
          )}
          {status === 'solved' && (
            <p className="text-emerald-800 font-semibold mb-2">Solved! 🎉</p>
          )}
          {(status === 'solved' || status === 'revealed') && (
            <p className="mb-3">{explanation}</p>
          )}
          {showHint && hint && status !== 'solved' && status !== 'revealed' && (
            <p className="text-stone-700 italic mb-3">Hint: {hint}</p>
          )}
          <div className="flex gap-2 flex-wrap">
            <button
              type="button"
              onClick={reset}
              className="px-3 py-1 rounded bg-stone-200 hover:bg-stone-300 text-sm"
            >
              Reset
            </button>
            {status !== 'solved' && status !== 'revealed' && (
              <button
                type="button"
                onClick={revealSolution}
                className="px-3 py-1 rounded bg-stone-200 hover:bg-stone-300 text-sm"
              >
                Show solution
              </button>
            )}
            {hint && !showHint && status !== 'solved' && status !== 'revealed' && (
              <button
                type="button"
                onClick={() => setShowHint(true)}
                className="px-3 py-1 rounded bg-stone-200 hover:bg-stone-300 text-sm"
              >
                Show hint
              </button>
            )}
          </div>
          <p className="text-xs text-stone-500 mt-3">
            Progress: {ply} / {solution.length} ply
          </p>
        </div>
      </div>
    </section>
  );
}
