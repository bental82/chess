import type { Part } from '../types';
import { ch10EndgameStrategy } from './ch10-endgame-strategy';

export const part4: Part = {
  id: 'part4',
  number: 4,
  title: 'Endgame Strategy',
  blurb:
    'How to convert advantages once the queens come off: the active king, passed pawns on opposite wings, and the principle of "do not hurry".',
  chapters: [ch10EndgameStrategy],
};
