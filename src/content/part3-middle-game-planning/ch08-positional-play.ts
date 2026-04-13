import type { Chapter } from '../types';

export const ch08PositionalPlay: Chapter = {
  id: 'ch08-positional-play',
  partNumber: 8,
  title: 'Positional Play and Pawn Structure',
  summary:
    'Pawns are the soul of chess. Their structure dictates which squares are weak, which files are open, and where the pieces belong.',
  lessons: [
    {
      id: 'l-ch08-l1',
      title: 'Weak squares and outposts',
      intro:
        'A square is weak when no pawn can ever defend it. Such squares are the natural homes of enemy pieces.',
      sections: [
        {
          kind: 'prose',
          markdown:
            'Identify weak squares early. Look at your opponent\'s pawn skeleton and ask: which squares in the opponent\'s half can no longer be defended by a pawn?\n\nWhen one of those squares lies on the **fourth, fifth or sixth rank** and is centrally located, it is an **outpost** — a perfect home for a knight, where it cannot be challenged by a pawn and only at great cost by a piece exchange.\n\n## How to create them\n\nA weak square is created when a pawn move *removes* the defender. Every pawn move you make weakens the squares the pawn used to control. Be especially careful with pawn moves around your king (h3, h6, g3, g6 and so on).\n\nConversely, look for opportunities to provoke pawn moves in your opponent\'s position. A timely pawn-tickle (a pawn arriving on the 5th rank) often forces a defensive pawn move that creates a permanent weakness behind it.',
        },
      ],
    },
    {
      id: 'l-ch08-l2',
      title: 'Isolated, doubled and backward pawns',
      intro:
        'Three of the most familiar pawn weaknesses, and how to exploit each.',
      sections: [
        {
          kind: 'prose',
          markdown:
            'An **isolated pawn** has no friendly pawn on the adjacent files. It cannot be defended by a pawn, and the square in front of it is permanently weak. Blockade it with a knight, and trade pieces — the simplified endgame favours the side without the weakness.\n\n**Doubled pawns** are two pawns of the same colour on the same file. They can be a strength (open file for the rook, control of important squares) or a weakness (frozen majority, weak square between them).\n\nA **backward pawn** is one that lags behind its neighbours and cannot be advanced safely. The square directly in front is the target — pile up on it.',
        },
        {
          kind: 'prose',
          markdown:
            '## The isolated queen\'s pawn (IQP)\n\nThe most studied pawn weakness in chess. Whoever has the IQP gets:\n\n- An open e- and c-file for rooks.\n- A strong outpost square on e5 (or e4 from the other side).\n- Active pieces while the position is still complicated.\n\nIn return:\n\n- The pawn cannot be defended by another pawn.\n- The square in front (d5 or d4) is a permanent outpost for the opponent.\n- In a simplified endgame, the IQP is just a weakness.\n\n**The plan with the IQP**: keep pieces on the board, attack the king, win quickly while the activity lasts. **The plan against the IQP**: trade pieces, blockade the pawn, win the endgame.',
        },
      ],
    },
    {
      id: 'l-ch08-l3',
      title: 'Open files and the seventh rank',
      intro:
        'A rook is a long-range piece blocked by pawns. Open files are the highways it travels; the 7th rank is its destination.',
      sections: [
        {
          kind: 'prose',
          markdown:
            'When pawns vanish from a file, the file is **open** (no pawn of either side) or **half-open** (no pawn of one side). Either way, rooks belong there.\n\n## How files become open\n\nUsually through a pawn capture: c-pawn takes a knight on d5, opening the c-file. The side that took with the pawn gets a half-open file; the other side, fully open.\n\n## The plan\n\n1. Place a rook on the open file as soon as practical.\n2. Double rooks on the file when possible.\n3. Use the file to invade — the seventh rank is the prize.\n4. From the seventh, attack pawns or combine with another piece for mate.\n\nA single open file with a doubled battery of rooks is often decisive even in the middle-game. If you can also place your queen on the file, the position is usually winning.',
        },
      ],
    },
    {
      id: 'l-ch08-l4',
      title: 'Pawn chains and the base',
      intro:
        'Locked pawn chains (e.g. d4-e5 vs e6-d5) determine where each side should attack.',
      sections: [
        {
          kind: 'prose',
          markdown:
            'When pawns interlock in a chain — say white pawns on d4 and e5, black pawns on e6 and d5 — the rule is: **attack the base of the chain**.\n\n- White\'s chain points at the kingside; the base is on d4. Black should attack d4 (e.g. with …c5).\n- Black\'s chain points at the queenside; the base is on e6. White should attack e6 (e.g. with f4-f5).\n\nWhy the base? Because the pawn ahead of it is defended by a pawn — which is itself the base. Removing the base undermines the whole chain.\n\n## Closed-game strategy in one rule\n\nFind the chain. Identify your base (defend it) and the enemy\'s base (attack it). All other plans flow from this.',
        },
      ],
    },
    {
      id: 'l-ch08-l5',
      title: 'Space, mobility and the centre',
      intro:
        'A spatial advantage is the freedom to manoeuvre. The side with more space usually has the better game.',
      sections: [
        {
          kind: 'prose',
          markdown:
            'Count the squares on your side of the board controlled by your pawns, and the squares on the opponent\'s side controlled by his. The difference is your **spatial advantage**.\n\n## What space gives you\n\n- Easier piece manoeuvring.\n- The ability to switch wings quickly.\n- The choice of where to break the position.\n\n## What it takes\n\n- Attention to weak squares behind your advanced pawns.\n- Care not to over-extend.\n- A long-term plan — space is rarely converted in two moves.\n\nA classic warning: a space advantage with no plan **fades**. The pieces behind the pawns must do something. If you can\'t see what your pieces will accomplish in the next ten moves, your space is actually a weakness waiting to be exposed.',
        },
      ],
    },
  ],
};
