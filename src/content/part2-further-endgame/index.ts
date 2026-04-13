import type { Part } from '../types';
import { ch06RookEndings } from './ch06-rook-endings';
import { ch07MinorPieceEndings } from './ch07-minor-piece-endings';

export const part2: Part = {
  id: 'part2',
  number: 2,
  title: 'Further Principles in End-Game Play',
  blurb:
    'Endings with pieces — rooks, bishops and knights — and the standard winning and drawing positions every player should know on sight.',
  chapters: [ch06RookEndings, ch07MinorPieceEndings],
};
