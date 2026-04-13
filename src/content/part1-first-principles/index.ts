import type { Part } from '../types';
import { ch01SimpleMates } from './ch01-simple-mates';
import { ch02PawnPromotion } from './ch02-pawn-promotion';
import { ch03PawnEndings } from './ch03-pawn-endings';
import { ch04WinningMiddlegame } from './ch04-winning-middlegame';
import { ch05OpeningStrategy } from './ch05-opening-strategy';

export const part1: Part = {
  id: 'part1',
  number: 1,
  title: 'First Principles: Endings, Middle-Game and Openings',
  blurb:
    'Before tactics or theory comes technique. We begin with the simplest checkmates, the rules of pawn promotion, the most important pawn endings, the recurring patterns by which one wins material in the middle-game, and the principles that should guide every opening.',
  chapters: [
    ch01SimpleMates,
    ch02PawnPromotion,
    ch03PawnEndings,
    ch04WinningMiddlegame,
    ch05OpeningStrategy,
  ],
};
