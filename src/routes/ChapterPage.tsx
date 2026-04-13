import { Link, useParams } from 'react-router-dom';
import { course } from '../content';
import { lessonCompletion, useProgress } from '../store/progress';
import ProgressBar from '../components/ProgressBar';

export default function ChapterPage() {
  const { chapterId } = useParams();
  const completed = useProgress((s) => s.completedExercises);
  const chapter = course.parts.flatMap((p) => p.chapters).find((c) => c.id === chapterId);
  if (!chapter) return <p>Chapter not found.</p>;

  return (
    <article>
      <Link to="/" className="text-sm text-stone-600 hover:underline">← All chapters</Link>
      <h1 className="text-3xl font-bold mt-2 mb-2">
        Chapter {chapter.partNumber}. {chapter.title}
      </h1>
      <p className="text-stone-700 mb-6 max-w-3xl">{chapter.summary}</p>

      <ol className="space-y-3">
        {chapter.lessons.map((lesson, i) => {
          const { solved, total } = lessonCompletion(lesson.id, completed);
          const done = total > 0 && solved === total;
          return (
            <li key={lesson.id}>
              <Link
                to={`/lesson/${lesson.id}`}
                className="block p-4 rounded border border-amber-300/70 bg-white/60 hover:bg-amber-50 transition"
              >
                <div className="flex justify-between items-baseline gap-3">
                  <div className="font-semibold">
                    {i + 1}. {lesson.title}{' '}
                    {done && <span className="text-emerald-700 text-sm">✓</span>}
                  </div>
                  <div className="text-xs text-stone-500 whitespace-nowrap">
                    {total > 0 ? `${solved}/${total} exercises` : 'reading'}
                  </div>
                </div>
                <p className="text-sm text-stone-600 mt-1">{lesson.intro}</p>
                {total > 0 && (
                  <div className="mt-2">
                    <ProgressBar solved={solved} total={total} />
                  </div>
                )}
              </Link>
            </li>
          );
        })}
      </ol>
    </article>
  );
}
