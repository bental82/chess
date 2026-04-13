import type { Part } from '../types';
import { ch08PositionalPlay } from './ch08-positional-play';
import { ch09Initiative } from './ch09-initiative';

export const part3: Part = {
  id: 'part3',
  number: 3,
  title: 'Planning a Win in Middle-Game Play',
  blurb:
    'How to choose a plan when no immediate tactic exists: weak squares, pawn structure, the initiative, and the principle of two weaknesses.',
  chapters: [ch08PositionalPlay, ch09Initiative],
};
