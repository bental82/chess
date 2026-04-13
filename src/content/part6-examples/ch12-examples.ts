import type { Chapter } from '../types';

export const ch12Examples: Chapter = {
  id: 'ch12-examples',
  partNumber: 12,
  title: 'Test Positions',
  summary:
    'Pattern-recognition tests. Each position should yield a forced result if you have absorbed the earlier chapters.',
  lessons: [
    {
      id: 'l-ch12-l1',
      title: 'Mating patterns',
      intro:
        'Find the forced mate. Each position resolves in one move.',
      sections: [
        {
          kind: 'prose',
          markdown:
            'These are practical tactics — they could appear in any of your games. Solve them by recognising the **pattern** rather than calculating from scratch.',
        },
        {
          kind: 'exercise',
          id: 'ex-ch12-l1-1',
          title: 'Battery on the long diagonal',
          fen: '6k1/5p1p/8/8/8/8/1B4Q1/7K w - - 0 1',
          sideToMove: 'w',
          solution: ['Qg7#'],
          hint: 'The bishop on b2 already controls g7. Bring up the queen.',
          explanation:
            'Qg7# — the queen attacks g8 from g7, supported by the bishop on b2. The king cannot capture (defended), cannot block, and has no flight square (f7 and h7 are occupied by his own pawns).',
        },
        {
          kind: 'exercise',
          id: 'ex-ch12-l1-2',
          title: 'Back rank, no luft',
          fen: '6k1/5ppp/8/8/8/8/8/3R3K w - - 0 1',
          sideToMove: 'w',
          solution: ['Rd8#'],
          hint: 'The classical motif: a piece on the back rank, the king sealed in by his own pawns.',
          explanation:
            'Rd8# — the rook delivers check on the 8th rank. The escape squares f7, g7 and h7 are blocked by the black pawns; f8 and h8 are covered by the rook itself.',
        },
        {
          kind: 'exercise',
          id: 'ex-ch12-l1-3',
          title: 'The Arabian mate',
          fen: '7k/R7/5N2/8/8/8/8/6K1 w - - 0 1',
          sideToMove: 'w',
          solution: ['Rh7#'],
          hint: 'The knight on f6 already covers g8 and h7. One rook move finishes.',
          explanation:
            'Rh7# — an ancient mating pattern (hence "Arabian"). The knight on f6 covers g8, and the rook on h7 covers g7 along the 7th rank and checks h8 along the file. The black king cannot take the rook (defended by the knight).',
        },
        {
          kind: 'exercise',
          id: 'ex-ch12-l1-5',
          title: 'Anastasia\'s mate',
          fen: '8/4N1pk/8/8/8/4R3/8/6K1 w - - 0 1',
          sideToMove: 'w',
          solution: ['Rh3#'],
          hint: 'The knight on e7 owns both g-file escape squares. Find the swing.',
          explanation:
            'Rh3# — a classical pattern named after a 19th-century romantic novel by Wilhelm Heinse. The knight covers g6 and g8; the black pawn occupies g7; the rook checks along the h-file. Nothing left for the king.',
        },
        {
          kind: 'exercise',
          id: 'ex-ch12-l1-4',
          title: 'Mate with two Rooks',
          fen: '4k3/R7/7R/8/8/8/8/7K w - - 0 1',
          sideToMove: 'w',
          solution: ['Rh8#'],
          hint: 'One rook controls the 7th rank — the other delivers check on the 8th.',
          explanation:
            'Rh8# — the ladder mate. The rook on a7 cuts off all escape squares on the 7th rank; the rook on h8 delivers check on the 8th. The white king is not even involved.',
        },
      ],
    },
    {
      id: 'l-ch12-l2',
      title: 'Tactical themes',
      intro:
        'Win material with a single move.',
      sections: [
        {
          kind: 'exercise',
          id: 'ex-ch12-l2-1',
          title: 'Knight fork',
          fen: '4k3/8/3q4/8/4N3/8/8/4K3 w - - 0 1',
          sideToMove: 'w',
          solution: ['Nxd6'],
          hint: 'The black king and queen are on squares of the same colour, a knight\'s-move apart.',
          explanation:
            'Nxd6 — the knight captures the queen, which has no defender, and the white knight cannot itself be captured.',
        },
      ],
    },
    {
      id: 'l-ch12-l3',
      title: 'Endgame technique',
      intro:
        'Practical positions that test the endgame patterns from Parts 1, 2 and 4.',
      sections: [
        {
          kind: 'prose',
          markdown:
            'The exercises below are not mates — they ask you to find the technically correct move in a position where understanding matters more than calculation. Try to articulate *why* your move is right before checking the answer.',
        },
        {
          kind: 'exercise',
          id: 'ex-ch12-l3-1',
          title: 'Promote with check',
          fen: '2k5/P7/8/8/8/8/8/2K5 w - - 0 1',
          sideToMove: 'w',
          solution: ['a8=Q+'],
          hint: 'The black king is too far away to interfere.',
          explanation:
            'a8=Q+ — promotion with check. From here, K + Q vs K is a routine win using the techniques of Chapter 1.',
        },
      ],
    },
    {
      id: 'l-ch12-l4',
      title: 'Where to go from here',
      intro:
        'You now own the framework. The work that remains is to make it second-nature.',
      sections: [
        {
          kind: 'prose',
          markdown:
            'A modest study program:\n\n1. **Solve five tactics a day.** Pattern recognition is built one position at a time.\n2. **Play slow games** — at least 15 minutes a side — and review every loss.\n3. **Replay one classic master game** per week. Try to guess the moves.\n4. **Return to the basic mates** every few months. They are the foundation everything else rests on.\n\nThe principles in this course are old and they remain true. Apply them every move and your rating will move with you.',
        },
        {
          kind: 'prose',
          markdown:
            '## A final word on the source\n\nThe six-part structure of this course follows that of Capablanca\'s 1921 textbook *Chess Fundamentals* — a book widely held to be the finest single-volume introduction to the game ever written. The lesson prose, exercises and annotations here are original to this course; for the original master\'s words, no substitute exists for picking up the book itself.',
        },
      ],
    },
  ],
};
