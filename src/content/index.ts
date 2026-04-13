import type { Course } from './types';
import { part1 } from './part1-first-principles';
import { part2 } from './part2-further-endgame';
import { part3 } from './part3-middle-game-planning';
import { part4 } from './part4-endgame-strategy';
import { part5 } from './part5-illustrative-games';
import { part6 } from './part6-examples';

export const course: Course = {
  title: 'Chess Fundamentals — Interactive Course',
  author: 'Original course inspired by Capablanca (1921)',
  parts: [part1, part2, part3, part4, part5, part6],
};
