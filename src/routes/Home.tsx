import { Link } from 'react-router-dom';
import { course } from '../content';
import { chapterCompletion, mostRecentLessonId, useProgress } from '../store/progress';
import ProgressBar from '../components/ProgressBar';
import ProgressIO from '../components/ProgressIO';

export default function Home() {
  const completed = useProgress((s) => s.completedExercises);
  const visited = useProgress((s) => s.visitedLessons);
  const reset = useProgress((s) => s.reset);

  const allExercises = course.parts
    .flatMap((p) => p.chapters)
    .flatMap((c) => c.lessons)
    .flatMap((l) => l.sections)
    .filter((s) => s.kind === 'exercise');
  const totalSolved = Object.keys(completed).length;

  const recentId = mostRecentLessonId(visited);
  const recent =
    recentId &&
    course.parts
      .flatMap((p) => p.chapters)
      .flatMap((c) => c.lessons.map((l) => ({ ...l, _chapterTitle: c.title })))
      .find((l) => l.id === recentId);

  return (
    <div>
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Chess Fundamentals</h1>
        <p className="text-stone-700 max-w-3xl">
          An interactive course covering the foundations of chess — the simple mates, pawn endings,
          opening principles, middle-game tactics, endgame technique, and a tour of classic
          illustrative games. The structure follows the six parts of Capablanca's 1921 textbook;
          the lesson prose is original to this course.
        </p>
        <div className="mt-6 max-w-md">
          <ProgressBar solved={totalSolved} total={allExercises.length} label="Course progress" />
        </div>
      </header>

      {recent && (
        <Link
          to={`/lesson/${recent.id}`}
          className="block mb-8 p-4 rounded-lg border border-emerald-400/70 bg-emerald-50 hover:bg-emerald-100 transition"
        >
          <div className="text-xs uppercase tracking-wider text-emerald-800 mb-1">
            Resume where you left off
          </div>
          <div className="font-semibold text-lg">{recent.title}</div>
          <div className="text-sm text-stone-600">{recent._chapterTitle} — {recent.intro}</div>
        </Link>
      )}

      <div className="space-y-10">
        {course.parts.map((part) => (
          <section key={part.id}>
            <h2 className="text-2xl font-bold border-b border-amber-300/60 pb-1 mb-4">
              Part {part.number}: {part.title}
            </h2>
            <p className="text-stone-700 mb-4">{part.blurb}</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {part.chapters.map((chapter) => {
                const { solved, total } = chapterCompletion(chapter.id, completed);
                return (
                  <Link
                    key={chapter.id}
                    to={`/chapter/${chapter.id}`}
                    className="block p-4 rounded-lg border border-amber-300/70 bg-white/50 hover:bg-amber-50 transition"
                  >
                    <h3 className="font-semibold text-lg mb-1">
                      Chapter {chapter.partNumber}. {chapter.title}
                    </h3>
                    <p className="text-sm text-stone-600 mb-3">{chapter.summary}</p>
                    <ProgressBar solved={solved} total={total} label="Exercises" />
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-12 pt-6 border-t border-amber-200/60 flex flex-wrap justify-between items-center gap-4 text-sm text-stone-500">
        <span>
          Your progress is stored locally in your browser. Use <em>Export</em> to back it up or move it to another device.
        </span>
        <div className="flex items-center gap-4">
          <ProgressIO />
          <span className="text-stone-300">·</span>
          <button
            type="button"
            onClick={() => {
              if (confirm('Reset all course progress?')) reset();
            }}
            className="text-red-700 hover:underline"
          >
            Reset progress
          </button>
        </div>
      </div>
    </div>
  );
}
