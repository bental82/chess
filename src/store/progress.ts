import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { course } from '../content';
import type { Lesson } from '../content/types';

interface ExerciseRecord {
  firstSolvedAt: number;
  attempts: number;
}

interface ProgressState {
  completedExercises: Record<string, ExerciseRecord>;
  attempts: Record<string, number>;
  visitedLessons: Record<string, number>;
  markExerciseSolved: (id: string) => void;
  recordAttempt: (id: string) => void;
  visitLesson: (id: string) => void;
  reset: () => void;
  importState: (snapshot: ProgressSnapshot) => void;
}

export interface ProgressSnapshot {
  version: 1;
  exportedAt: number;
  completedExercises: Record<string, ExerciseRecord>;
  attempts: Record<string, number>;
  visitedLessons: Record<string, number>;
}

export function exportSnapshot(state: ProgressState): ProgressSnapshot {
  return {
    version: 1,
    exportedAt: Date.now(),
    completedExercises: state.completedExercises,
    attempts: state.attempts,
    visitedLessons: state.visitedLessons,
  };
}

export function isValidSnapshot(x: unknown): x is ProgressSnapshot {
  if (!x || typeof x !== 'object') return false;
  const o = x as Record<string, unknown>;
  return (
    o.version === 1 &&
    typeof o.completedExercises === 'object' && o.completedExercises !== null &&
    typeof o.attempts === 'object' && o.attempts !== null &&
    typeof o.visitedLessons === 'object' && o.visitedLessons !== null
  );
}

export const useProgress = create<ProgressState>()(
  persist(
    (set) => ({
      completedExercises: {},
      attempts: {},
      visitedLessons: {},
      markExerciseSolved: (id) =>
        set((state) => {
          if (state.completedExercises[id]) return state;
          return {
            completedExercises: {
              ...state.completedExercises,
              [id]: {
                firstSolvedAt: Date.now(),
                attempts: state.attempts[id] ?? 0,
              },
            },
          };
        }),
      recordAttempt: (id) =>
        set((state) => ({
          attempts: { ...state.attempts, [id]: (state.attempts[id] ?? 0) + 1 },
        })),
      visitLesson: (id) =>
        set((state) => ({
          visitedLessons: { ...state.visitedLessons, [id]: Date.now() },
        })),
      reset: () =>
        set({ completedExercises: {}, attempts: {}, visitedLessons: {} }),
      importState: (snapshot) =>
        set({
          completedExercises: snapshot.completedExercises,
          attempts: snapshot.attempts,
          visitedLessons: snapshot.visitedLessons,
        }),
    }),
    { name: 'chess-course-progress' },
  ),
);

function exerciseIdsInLesson(lesson: Lesson): string[] {
  return lesson.sections
    .filter((s) => s.kind === 'exercise')
    .map((s) => (s as Extract<typeof s, { kind: 'exercise' }>).id);
}

export function chapterCompletion(
  chapterId: string,
  completed: Record<string, ExerciseRecord>,
): { solved: number; total: number } {
  const chapter = course.parts
    .flatMap((p) => p.chapters)
    .find((c) => c.id === chapterId);
  if (!chapter) return { solved: 0, total: 0 };
  const ids = chapter.lessons.flatMap(exerciseIdsInLesson);
  const solved = ids.filter((id) => completed[id]).length;
  return { solved, total: ids.length };
}

export function mostRecentLessonId(
  visitedLessons: Record<string, number>,
): string | null {
  let bestId: string | null = null;
  let bestTs = -1;
  for (const [id, ts] of Object.entries(visitedLessons)) {
    if (ts > bestTs) {
      bestTs = ts;
      bestId = id;
    }
  }
  return bestId;
}

export function lessonCompletion(
  lessonId: string,
  completed: Record<string, ExerciseRecord>,
): { solved: number; total: number } {
  const lesson = course.parts
    .flatMap((p) => p.chapters)
    .flatMap((c) => c.lessons)
    .find((l) => l.id === lessonId);
  if (!lesson) return { solved: 0, total: 0 };
  const ids = exerciseIdsInLesson(lesson);
  const solved = ids.filter((id) => completed[id]).length;
  return { solved, total: ids.length };
}
