import { describe, it, expect, beforeEach } from 'vitest';
import { useProgress, chapterCompletion, lessonCompletion } from './progress';
import { course } from '../content';

describe('progress store', () => {
  beforeEach(() => {
    useProgress.getState().reset();
  });

  it('starts empty', () => {
    expect(Object.keys(useProgress.getState().completedExercises)).toHaveLength(0);
  });

  it('marks exercises solved exactly once', () => {
    useProgress.getState().markExerciseSolved('ex-1');
    const first = useProgress.getState().completedExercises['ex-1'].firstSolvedAt;
    useProgress.getState().markExerciseSolved('ex-1'); // idempotent
    expect(useProgress.getState().completedExercises['ex-1'].firstSolvedAt).toBe(first);
  });

  it('records attempts', () => {
    useProgress.getState().recordAttempt('ex-1');
    useProgress.getState().recordAttempt('ex-1');
    expect(useProgress.getState().attempts['ex-1']).toBe(2);
  });

  it('computes chapter completion', () => {
    const chapter = course.parts[0].chapters[0];
    const exercises = chapter.lessons
      .flatMap((l) => l.sections)
      .filter((s) => s.kind === 'exercise');
    expect(chapterCompletion(chapter.id, {}).total).toBe(exercises.length);
    if (exercises.length > 0) {
      const first = exercises[0] as Extract<typeof exercises[0], { kind: 'exercise' }>;
      useProgress.getState().markExerciseSolved(first.id);
      const completed = useProgress.getState().completedExercises;
      expect(chapterCompletion(chapter.id, completed).solved).toBe(1);
    }
  });

  it('computes lesson completion', () => {
    const lesson = course.parts[0].chapters[0].lessons[0];
    expect(lessonCompletion(lesson.id, {}).solved).toBe(0);
  });
});
