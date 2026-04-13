import type { Chapter } from '../types';

export const ch01SimpleMates: Chapter = {
  id: 'ch01-simple-mates',
  partNumber: 1,
  title: 'Some Simple Mates',
  summary:
    'The basic checkmating procedures every player must own outright: King + Queen, King + Rook, two Rooks, and two Bishops against a lone King.',
  lessons: [
    {
      id: 'l-ch01-l1',
      title: 'Mate with King and Queen',
      intro:
        'The first mate to master. The Queen drives the king toward the edge while our own king walks up to deliver the killing blow.',
      sections: [
        {
          kind: 'quote',
          text: 'In order to improve your game, you must study the endgame before everything else.',
          attribution: 'José Raúl Capablanca',
          source: 'Chess Fundamentals (1921)',
        },
        {
          kind: 'prose',
          markdown:
            'The procedure is simple but worth memorising as a set of habits, not as a sequence of moves.\n\n## The plan\n\n- Use the **Queen** as a fence, keeping the lone king inside ever-shrinking rectangles.\n- Bring the **King** up to support, since the Queen alone never gives mate — she always needs the King close by to cover escape squares.\n- The mating square is on the edge of the board, ideally a **corner** or near it.\n\n## A useful trick: the knight\'s-move\n\nIf you place the Queen a knight\'s-move away from the lone king, you box him into a small area without ever giving stalemate. Walk your King in, stay close to the Queen, and the mate appears almost by itself.',
        },
        {
          kind: 'walkthrough',
          fen: '7k/8/5K2/8/8/8/3Q4/8 w - - 0 1',
          orientation: 'white',
          caption: 'The final blow. The white King is already in support — the Queen only has to find the right square.',
          moves: ['Qh6+', 'Kg8', 'Qg7#'],
          commentary: [
            'Driving the king to the corner with check, supported by the King.',
            'Forced — only escape.',
            'Mate. The Queen attacks g8 and is herself defended by the King on f6.',
          ],
        },
        {
          kind: 'diagram',
          fen: '6k1/6Q1/5K2/8/8/8/8/8 b - - 0 1',
          orientation: 'white',
          caption: 'The textbook mating picture: King and Queen working together. Memorise this image.',
        },
        {
          kind: 'exercise',
          id: 'ex-ch01-l1-1',
          title: 'Find the mate in 1',
          fen: '4k3/7Q/4K3/8/8/8/8/8 w - - 0 1',
          sideToMove: 'w',
          solution: ['Qe7#'],
          hint: 'Bring the Queen next to your own King so she is protected and covers every escape square.',
          explanation:
            'Qe7# — the Queen, supported by her King on e6, attacks e8 and covers d7, d8, f7 and f8 simultaneously.',
        },
      ],
    },

    {
      id: 'l-ch01-l2',
      title: 'Mate with King and Rook',
      intro:
        'A little harder than the Queen, because the Rook controls only ranks and files. The two kings must oppose each other for mate.',
      sections: [
        {
          kind: 'prose',
          markdown:
            'The Rook cannot attack diagonally, so the lone king has more squares of escape. The technique uses a recurring pattern called **opposition**.\n\n## The plan\n\n1. Use the **Rook** to cut off a rank or file, confining the enemy king to half the board.\n2. Walk your **King** up until the two kings face each other one square apart on the same file (or rank).\n3. With your king *opposite*, the Rook now drives the lone king back one rank and the cycle repeats.\n4. Eventually the enemy king reaches the edge — **opposition + check on the edge = mate**.',
        },
        {
          kind: 'walkthrough',
          fen: '4k3/8/4K3/8/8/8/8/R7 w - - 0 1',
          orientation: 'white',
          caption: 'The kings already stand in opposition. Watch the Rook deliver the final blow.',
          moves: ['Ra8#'],
          commentary: [
            'Mate. The Rook checks along the 8th rank, the King covers d7, e7 and f7. The opposition is what makes the mate possible.',
          ],
        },
        {
          kind: 'exercise',
          id: 'ex-ch01-l2-1',
          title: 'King + Rook: mate in 1',
          fen: '6k1/8/6K1/8/8/8/8/R7 w - - 0 1',
          sideToMove: 'w',
          solution: ['Ra8#'],
          hint: 'The kings are already in opposition. The Rook only has to land on the back rank.',
          explanation:
            'Ra8# — the Rook reaches the back rank with check, and the King on g6 covers f7, g7 and h7. There is no escape.',
        },
      ],
    },

    {
      id: 'l-ch01-l3',
      title: 'Mate with Two Rooks (the ladder)',
      intro:
        'The two-rook mate is the easiest of all and does not even require the help of your own king.',
      sections: [
        {
          kind: 'prose',
          markdown:
            'The two rooks form a *ladder*: each rook controls a rank, and they alternate giving check, walking the enemy king step by step toward the edge of the board.\n\n## The plan\n\n1. Place one rook on the rank in front of the king to confine him.\n2. Bring the other rook to the rank behind the king and check.\n3. The king must retreat one rank — directly into the first rook\'s control.\n4. Lift the back rook one rank up; check again. Repeat until the king is on the edge.\n\nBe careful only of one thing: never let the lone king attack your rook unsupported. If he can step toward it, swing the rook to the far side of the board first.',
        },
        {
          kind: 'exercise',
          id: 'ex-ch01-l3-1',
          title: 'Ladder mate in 1',
          fen: '4k3/R7/7R/8/8/8/8/7K w - - 0 1',
          sideToMove: 'w',
          solution: ['Rh8#'],
          hint: 'One rook already cuts off the 7th rank. Use the other to deliver check on the 8th.',
          explanation:
            'Rh8# — the Rook checks along the 8th rank, and the other Rook on a7 cuts off every escape square on the 7th. Mate without help from the white King.',
        },
      ],
    },

    {
      id: 'l-ch01-l4',
      title: 'Back-rank mates',
      intro:
        'The most common practical mate of all: a king sits behind a wall of his own pawns and a single piece slips into the back rank.',
      sections: [
        {
          kind: 'prose',
          markdown:
            'Once you know this pattern, you will spot it again and again. It also explains why creating a *luft* (an escape square for the king) is one of the very first defensive habits to acquire.',
        },
        {
          kind: 'exercise',
          id: 'ex-ch01-l4-1',
          title: 'Classic back-rank mate',
          fen: '6k1/5ppp/8/8/8/8/8/R6K w - - 0 1',
          sideToMove: 'w',
          solution: ['Ra8#'],
          hint: 'The black king is locked in by his own pawns. Find the back-rank check.',
          explanation:
            'Ra8# — the Rook delivers check on the 8th rank. The king cannot run to f7, g7 or h7 because of his own pawns, and f8 and h8 are covered by the Rook.',
        },
        {
          kind: 'exercise',
          id: 'ex-ch01-l4-2',
          title: 'Back-rank with the Queen',
          fen: '6k1/5ppp/8/8/8/8/8/3Q3K w - - 0 1',
          sideToMove: 'w',
          solution: ['Qd8#'],
          hint: 'A long-range piece on the 8th rank with the king\'s pawns behind him is decisive.',
          explanation:
            'Qd8# — same idea as the Rook mate, but with the Queen. The pawns on f7, g7 and h7 are now the black king\'s prison.',
        },
      ],
    },
  ],
};
