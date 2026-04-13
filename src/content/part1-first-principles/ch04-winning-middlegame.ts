import type { Chapter } from '../types';

export const ch04WinningMiddlegame: Chapter = {
  id: 'ch04-winning-middlegame',
  partNumber: 4,
  title: 'Some Winning Positions in the Middle-Game',
  summary:
    'Recurring tactical motifs that win material in the middle-game: the pin, the fork, the discovered attack, the skewer, the overloaded piece, and back-rank weaknesses.',
  lessons: [
    {
      id: 'l-ch04-l1',
      title: 'The Knight fork',
      intro:
        'A single knight that attacks two enemy pieces at once: the most reliable way to win material below master level.',
      sections: [
        {
          kind: 'prose',
          markdown:
            'The knight is the only piece that can attack a square without being attacked from it. That property gives the knight fork its sting: even an unprotected knight can fork a king and a rook, then escape unscathed.\n\nWhen looking for a fork, scan for pairs of enemy pieces (especially the **king** and any major piece) that share a knight\'s-move geometry — the two squares are always the same colour.\n\n## The royal fork\n\nThe deadliest is the **royal fork**: knight attacking king and queen at once. The king must move; the queen falls.\n\n## How to spot one\n\nLook at the colour of the squares the enemy king occupies and his queen occupies. If both are on the same colour, a knight on the right square gives a royal fork. Scan a few moves ahead for the knight to land there.',
        },
        {
          kind: 'exercise',
          id: 'ex-ch04-l1-1',
          title: 'Win the queen',
          fen: '4k3/8/3q4/8/4N3/8/8/4K3 w - - 0 1',
          sideToMove: 'w',
          solution: ['Nxd6'],
          hint: 'The black king and queen line up in a knight\'s pattern.',
          explanation:
            'Nxd6 — the knight captures the queen, and the queen had no defender. The king on e8 is too far to recapture.',
        },
      ],
    },
    {
      id: 'l-ch04-l2',
      title: 'The Pin',
      intro:
        'A piece is *pinned* when it cannot move because doing so would expose a more valuable piece (or the king) behind it.',
      sections: [
        {
          kind: 'prose',
          markdown:
            'Pins come in two flavours:\n\n- An **absolute pin** is against the king: the pinned piece literally cannot move (it would be illegal).\n- A **relative pin** is against a more valuable piece: the pinned piece *may* move, but only at the cost of losing material behind it.\n\n## Exploiting a pin\n\nA pinned piece is paralysed. Three things make a pin decisive:\n\n1. **Add an attacker** — bring another piece to bear on the pinned piece.\n2. **Add a pawn** — a pawn attack on a pinned piece almost always wins it.\n3. **Pile on** — a pinned knight defended only by the king is dead the moment a pawn arrives.\n\n## Breaking a pin\n\nIf you are pinned, the cures are: (a) trade off the pinning piece, (b) interpose a piece in between, (c) move the rear piece out of the line. Each costs a tempo, which is itself a small price for the relative pin.',
        },
        {
          kind: 'diagram',
          fen: 'r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3',
          orientation: 'white',
          caption: 'The Ruy Lopez after 3.Bb5 — the classical absolute pin. The c6-knight is paralysed against the king on e8.',
        },
      ],
    },
    {
      id: 'l-ch04-l3',
      title: 'The Discovered Attack',
      intro:
        'When one of your pieces moves out of the way and unmasks an attack from another piece behind it, two things happen at once.',
      sections: [
        {
          kind: 'prose',
          markdown:
            'A discovered attack is one of the most powerful tactical devices because it lets a single move generate **two threats**. The piece that moves can capture or threaten on its own; the piece that was hidden delivers a second blow.\n\n## Discovered check\n\nThe most devastating form is **discovered check** — the king *must* respond to the check, leaving the moving piece free to do as it pleases. A bishop discovering a check from a queen behind it can grab a rook on the other side of the board with impunity.\n\n## Double check\n\nThe rarest and most dangerous: when the moving piece *also* delivers check. Now the king cannot capture either checker (he would still be in check from the other), cannot block (no single block covers two attacks), and **must** move. Many double checks are mate.',
        },
      ],
    },
    {
      id: 'l-ch04-l4',
      title: 'The Skewer',
      intro:
        'The reverse of the pin: a more valuable piece in front of a less valuable one. Threaten the front piece and win the one behind.',
      sections: [
        {
          kind: 'prose',
          markdown:
            'Where a pin holds a piece in place by threatening to expose what is behind, a **skewer** forces the front piece to move and exposes what is behind. The line of attack is the same; only the order of the targets is reversed.\n\nThe rook, bishop and queen can all skewer. The most common skewer in practice: a check on the king with another piece visible behind on the same line.\n\n## A useful drill\n\nWhenever an enemy king and queen sit on the same rank, file, or diagonal — even with several squares between — ask: *can I get a long-range piece onto that line, with check?* If yes, you win the queen.',
        },
      ],
    },
    {
      id: 'l-ch04-l5',
      title: 'Overloaded pieces',
      intro:
        'A defender that has two jobs at once usually fails at both.',
      sections: [
        {
          kind: 'prose',
          markdown:
            'When the same piece is the only thing protecting two threats, attack both — the piece can defend only one. This motif appears every game once you start looking for it.\n\n## The thinking pattern\n\n1. Spot any of your opponent\'s pieces with two distinct defensive duties (e.g. the queen defending a back-rank rook *and* covering an outpost).\n2. Make a forcing move against one duty.\n3. The other collapses.\n\n## Removing the defender\n\nA close cousin: capture the defender. A rook on f1 defends a knight on h2 — a sacrifice on f1 removes the defender, and the knight falls next move.',
        },
      ],
    },
    {
      id: 'l-ch04-l6',
      title: 'Back-rank tactics',
      intro:
        'A king sealed behind his own pawns is a permanent target. Almost every middlegame win at the master level has a back-rank theme somewhere.',
      sections: [
        {
          kind: 'prose',
          markdown:
            'The back-rank is the most fertile territory for tactics. Common motifs:\n\n- **Direct mate** — a rook or queen reaches the 8th rank against a king with no luft.\n- **Deflection** — sacrifice a piece to draw away the only defender of the back rank.\n- **Decoy** — force the enemy queen onto the back rank, then attack her from a square that also threatens mate.\n\n## The defender\'s habits\n\nCreate a *luft* (an escape square for the king) at the right moment. Move a wing pawn one square — h3 (or h6) is the classic — early enough to prevent disaster, but not so early that you weaken the king\'s shelter.\n\nAs an attacker, ask every move: *if all my opponent\'s minor pieces vanished, would the back rank fall?* If yes, look for a way to remove or distract them.',
        },
        {
          kind: 'exercise',
          id: 'ex-ch04-l6-1',
          title: 'Back-rank weakness',
          fen: '6k1/5ppp/8/8/8/8/8/3Q3K w - - 0 1',
          sideToMove: 'w',
          solution: ['Qd8#'],
          hint: 'The king has no escape, the pawns hem him in.',
          explanation:
            'Qd8# — the queen reaches the back rank with check; f8, e8 are covered by the queen and f7, g7, h7 by the pawns.',
        },
      ],
    },
    {
      id: 'l-ch04-l7',
      title: 'Combinations: putting motifs together',
      intro:
        'A combination is a forced sequence built from two or more tactical themes. The whole is sharper than any single motif.',
      sections: [
        {
          kind: 'prose',
          markdown:
            'Most decisive middlegame moments combine motifs:\n\n- **Pin → fork**: pin a piece, then fork it with a knight.\n- **Deflection → mate**: sacrifice to remove the defender, then mate the now-undefended king.\n- **Discovered check → win of material**: check with the back piece, capture with the front piece.\n\n## The calculation habit\n\nWhenever you spot a tactical motif, ask: *and then what?* The first motif is rarely enough by itself. Train the habit of looking two motifs deep — the difference between a club player and a strong player is mostly the second move.',
        },
      ],
    },
  ],
};
