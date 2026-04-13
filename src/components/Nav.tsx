import { Link, NavLink } from 'react-router-dom';
import { course } from '../content';
import { useProgress } from '../store/progress';

export default function Nav() {
  const totalExercises = course.parts.flatMap((p) => p.chapters).flatMap((c) => c.lessons).flatMap((l) => l.sections).filter((s) => s.kind === 'exercise').length;
  const solved = useProgress((s) => Object.keys(s.completedExercises).length);
  const pct = totalExercises === 0 ? 0 : Math.round((solved / totalExercises) * 100);

  return (
    <header className="border-b border-amber-200/60 bg-parchment/80 backdrop-blur sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        <Link to="/" className="font-bold text-lg tracking-tight">
          <span className="mr-2">♞</span>Chess Fundamentals
        </Link>
        <nav className="flex items-center gap-3 text-sm">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'underline' : 'text-stone-600 hover:text-ink'}>
            Home
          </NavLink>
          <span className="text-stone-400" aria-hidden>·</span>
          <span className="text-stone-600">
            <span className="font-semibold text-ink">{solved}</span> / {totalExercises} exercises ({pct}%)
          </span>
        </nav>
      </div>
    </header>
  );
}
