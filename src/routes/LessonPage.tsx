import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { course } from '../content';
import LessonRenderer from '../components/LessonRenderer';
import { useProgress } from '../store/progress';

export default function LessonPage() {
  const { lessonId } = useParams();
  const visit = useProgress((s) => s.visitLesson);

  const flatLessons = course.parts
    .flatMap((p) => p.chapters)
    .flatMap((c) => c.lessons.map((l) => ({ ...l, _chapterId: c.id, _chapterTitle: c.title })));
  const idx = flatLessons.findIndex((l) => l.id === lessonId);
  const lesson = idx >= 0 ? flatLessons[idx] : undefined;
  const prev = idx > 0 ? flatLessons[idx - 1] : undefined;
  const next = idx >= 0 && idx < flatLessons.length - 1 ? flatLessons[idx + 1] : undefined;

  useEffect(() => {
    if (lesson) visit(lesson.id);
  }, [lesson, visit]);

  if (!lesson) return <p>Lesson not found.</p>;

  return (
    <article>
      <nav className="text-sm text-stone-600 mb-3">
        <Link to="/" className="hover:underline">Home</Link>
        {' › '}
        <Link to={`/chapter/${lesson._chapterId}`} className="hover:underline">{lesson._chapterTitle}</Link>
      </nav>
      <h1 className="text-3xl font-bold mb-2">{lesson.title}</h1>
      <p className="text-stone-700 italic mb-4">{lesson.intro}</p>

      <LessonRenderer sections={lesson.sections} />

      <div className="mt-10 pt-6 border-t border-amber-200/60 flex justify-between gap-3">
        {prev ? (
          <Link to={`/lesson/${prev.id}`} className="text-sm hover:underline">
            ← {prev.title}
          </Link>
        ) : <span />}
        {next ? (
          <Link to={`/lesson/${next.id}`} className="text-sm hover:underline text-right">
            {next.title} →
          </Link>
        ) : (
          <Link to="/" className="text-sm hover:underline">Back to course →</Link>
        )}
      </div>
    </article>
  );
}
