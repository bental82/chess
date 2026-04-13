import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { course } from '../content';
import LessonRenderer from '../components/LessonRenderer';
import { lessonCompletion, useProgress } from '../store/progress';

export default function LessonPage() {
  const { lessonId } = useParams();
  const visit = useProgress((s) => s.visitLesson);
  const completed = useProgress((s) => s.completedExercises);

  const flatLessons = course.parts
    .flatMap((p) => p.chapters)
    .flatMap((c) => c.lessons.map((l) => ({ ...l, _chapterId: c.id, _chapterTitle: c.title })));
  const idx = flatLessons.findIndex((l) => l.id === lessonId);
  const lesson = idx >= 0 ? flatLessons[idx] : undefined;
  const prev = idx > 0 ? flatLessons[idx - 1] : undefined;
  const next = idx >= 0 && idx < flatLessons.length - 1 ? flatLessons[idx + 1] : undefined;

  useEffect(() => {
    if (lesson) visit(lesson.id);
    window.scrollTo({ top: 0 });
  }, [lesson, visit]);

  if (!lesson) return <p>Lesson not found.</p>;

  const { solved, total } = lessonCompletion(lesson.id, completed);
  const done = total > 0 && solved === total;

  const NavRow = (
    <div className="flex justify-between gap-3 text-sm">
      {prev ? (
        <Link to={`/lesson/${prev.id}`} className="text-stone-600 hover:underline">
          ← {prev.title}
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link to={`/lesson/${next.id}`} className="text-stone-600 hover:underline text-right">
          {next.title} →
        </Link>
      ) : (
        <Link to="/" className="text-stone-600 hover:underline">
          Back to course →
        </Link>
      )}
    </div>
  );

  return (
    <article>
      <nav className="text-sm text-stone-600 mb-3">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        {' › '}
        <Link to={`/chapter/${lesson._chapterId}`} className="hover:underline">
          {lesson._chapterTitle}
        </Link>
        {' › '}
        <span className="text-stone-500">{lesson.title}</span>
      </nav>

      <header className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-1">{lesson.title}</h1>
          <p className="text-stone-700 italic">{lesson.intro}</p>
        </div>
        {total > 0 && (
          <div className="shrink-0 text-right">
            <div className="text-xs text-stone-500">Exercises</div>
            <div className={`font-semibold ${done ? 'text-emerald-700' : 'text-stone-700'}`}>
              {solved} / {total} {done && '✓'}
            </div>
          </div>
        )}
      </header>

      <div className="mb-6 pb-3 border-b border-amber-200/60">{NavRow}</div>

      <LessonRenderer sections={lesson.sections} />

      <div className="mt-10 pt-6 border-t border-amber-200/60">{NavRow}</div>
    </article>
  );
}
