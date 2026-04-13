# Chess Fundamentals — Interactive Course

An interactive web course covering the foundations of chess. The structure
follows the six parts of José Raúl Capablanca's 1921 textbook *Chess
Fundamentals*; the lesson prose, exercises and annotations in this course are
original.

## Stack

- Vite + React 18 + TypeScript
- [react-chessboard](https://www.npmjs.com/package/react-chessboard) (board UI)
- [chess.js](https://www.npmjs.com/package/chess.js) (legality, FEN/PGN)
- react-router-dom (chapter / lesson routing)
- Tailwind CSS
- Zustand (progress, persisted to `localStorage`)
- Vitest (content + lib + store tests)

## Develop

```bash
npm install
npm run dev          # http://localhost:5173
npm test             # run the test suite
npm run build        # type-check + production build
```

## Layout

- `src/content/` — the course itself, one file per chapter, organised under six parts.
- `src/components/` — `Board`, `ExerciseBoard`, `MoveStepper`, `LessonRenderer`, `Markdown`, `ProgressBar`, `Nav`.
- `src/routes/` — `Home`, `ChapterPage`, `LessonPage`.
- `src/store/progress.ts` — Zustand store for completed exercises (persisted).
- `src/lib/chess.ts` — chess.js helpers used by the exercise board.

## Content

The course is laid out in six parts:

1. First Principles — simple mates, pawn promotion, pawn endings, winning middle-game patterns, opening strategy
2. Further Endgame Principles — rook endings (Lucena, Philidor), minor-piece endings
3. Planning a Win in the Middle-Game — positional play, the initiative
4. Endgame Strategy — the active king, outside passed pawn, do-not-hurry
5. Illustrative Games — annotated walkthrough of the Opera Game (Morphy 1858)
6. Examples — test positions

To add a new lesson, add a `Lesson` to the appropriate chapter file under
`src/content/partN-*/`. Each lesson is a sequence of `Section`s of kind
`prose`, `diagram`, `walkthrough`, or `exercise` (see `src/content/types.ts`).

The `content.test.ts` suite verifies every FEN, every walkthrough and every
exercise solution is legal under chess.js, so authoring mistakes are caught
at test time.
