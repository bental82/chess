import type { Part } from '../types';
import { ch11ClassicGames } from './ch11-classic-games';

export const part5: Part = {
  id: 'part5',
  number: 5,
  title: 'Illustrative Games',
  blurb:
    'Annotated walkthroughs of historical games, chosen for the clarity of their themes. Move scores are public record; commentary is original.',
  chapters: [ch11ClassicGames],
};
