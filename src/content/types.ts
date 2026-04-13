export type Square =
  | `${'a'|'b'|'c'|'d'|'e'|'f'|'g'|'h'}${1|2|3|4|5|6|7|8}`;

export type Section =
  | { kind: 'prose'; markdown: string }
  | { kind: 'diagram'; fen: string; caption?: string; orientation?: 'white' | 'black' }
  | {
      kind: 'walkthrough';
      fen: string;
      moves: string[]; // SAN
      commentary?: string[];
      orientation?: 'white' | 'black';
      caption?: string;
    }
  | {
      kind: 'exercise';
      id: string;
      fen: string;
      solution: string[]; // SAN, alternating sides starting with sideToMove
      hint?: string;
      sideToMove: 'w' | 'b';
      explanation: string;
      title?: string;
    };

export interface Lesson {
  id: string;
  title: string;
  intro: string;
  sections: Section[];
}

export interface Chapter {
  id: string;
  partNumber: number;
  title: string;
  summary: string;
  lessons: Lesson[];
}

export interface Part {
  id: string;
  number: number;
  title: string;
  blurb: string;
  chapters: Chapter[];
}

export interface Course {
  title: string;
  author: string;
  parts: Part[];
}
