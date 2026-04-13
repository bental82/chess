import type { Chapter } from '../types';

export const ch07MinorPieceEndings: Chapter = {
  id: 'ch07-minor-piece-endings',
  partNumber: 7,
  title: 'Minor-Piece Endings',
  summary:
    'Bishop vs Knight, opposite-colour bishops, and the small handful of patterns that decide most minor-piece endgames.',
  lessons: [
    {
      id: 'l-ch07-l1',
      title: 'Bishop vs Knight',
      intro:
        'Neither piece is "better" in the abstract. The position decides — but reliable rules of thumb exist.',
      sections: [
        {
          kind: 'prose',
          markdown:
            'When the position is **open** and pawns sit on both wings, the **bishop** is usually superior — long range matters.\n\nWhen the position is **closed** and the play is on a single sector of the board, the **knight** can outshine the bishop, especially if the bishop is hemmed in by its own pawns ("a bad bishop").\n\nThe practical takeaway: when you have the bishop, **open the position**; when you have the knight, **keep the position closed and create outposts**.',
        },
        {
          kind: 'prose',
          markdown:
            '## A more detailed checklist\n\nBefore deciding "I have the better minor piece" in any endgame, ask:\n\n1. Are pawns on both wings? (favours the bishop)\n2. Is the position fluid or locked? (fluid → bishop; locked → knight)\n3. Are there outposts the knight can reach? (tilts toward the knight)\n4. Are my own pawns on the same colour as my bishop? (then the bishop is *bad*)\n\nThe answer is almost never absolute. Count the factors and decide.',
        },
      ],
    },
    {
      id: 'l-ch07-l2',
      title: 'Good bishop vs bad bishop',
      intro:
        'A bishop\'s value depends largely on whether your *own* pawns get in its way.',
      sections: [
        {
          kind: 'prose',
          markdown:
            'A **good bishop** has its pawns on the opposite colour to the bishop\'s squares. The pawns control one colour; the bishop the other. Together they cover the board.\n\nA **bad bishop** has its pawns on the same colour. The pawns block its diagonals and the bishop is reduced to a defensive role behind its own structure.\n\n## Practical play\n\n- When you have a bad bishop, **trade it** if you can. Even for a knight of equal abstract value, the trade improves your position.\n- When the opponent has a bad bishop, **keep it on the board** and force its pawns to stay on the colour that hampers it.\n- A bad bishop can sometimes be "activated" by exchanging the offending pawns. Look for pawn breaks that might free your bishop\'s diagonal.',
        },
      ],
    },
    {
      id: 'l-ch07-l3',
      title: 'Opposite-coloured bishops',
      intro:
        'A peculiar endgame in which an extra pawn — even an extra two pawns — is often not enough to win.',
      sections: [
        {
          kind: 'prose',
          markdown:
            'When each side has only one bishop, and they travel on opposite colours, the defender has a built-in fortress: he simply parks his bishop and king on squares of the colour the attacker cannot reach.\n\nOpposite-coloured bishop endings are notoriously drawish in the endgame — and notoriously dangerous in the **middle-game**, where they can favour an attacker because the defender\'s bishop is helpless against threats on the opposite colour.\n\n## When opposite-coloured bishops still win\n\n- When the stronger side has *two* connected passed pawns far advanced — both bishops cannot blockade them.\n- When there is also a major piece on the board, the attacking side\'s extra material on the bishop\'s colour can overwhelm.\n- When the defender\'s king is cut off from the action.\n\nConversely, if you are losing, **steer toward an opposite-coloured-bishop endgame**. It is the standard technique to save half a point from a difficult middlegame.',
        },
      ],
    },
    {
      id: 'l-ch07-l4',
      title: 'Knight endings',
      intro:
        'The knight is the most awkward piece in the endgame. Knight endings often resemble pawn endings — only slower.',
      sections: [
        {
          kind: 'prose',
          markdown:
            'A useful rule: **knight endings play like pawn endings**. The same opposition, the same key squares, the same triangulation ideas — only the knight gets in the way and changes whose move it is.\n\n## A few distinctive patterns\n\n- A **knight cannot lose a tempo** the way a king can. A knight always travels a colour-changing move. This makes triangulation harder.\n- The knight is poorly placed against an outside passed pawn, since it must hop around to reach it.\n- A knight on the rim is dim — at the edge, it controls only four squares; in the centre, eight.\n\n## Knight vs pawn endings\n\nA single knight cannot stop two connected passed pawns past their starting squares. It can usually stop two **disconnected** passed pawns, however, by jumping between them.',
        },
      ],
    },
    {
      id: 'l-ch07-l5',
      title: 'The bishop pair',
      intro:
        'Two bishops working together cover both colours of squares. This complementary coverage is worth roughly a half-pawn even in the abstract.',
      sections: [
        {
          kind: 'prose',
          markdown:
            'Capablanca and many later masters considered the bishop pair a small but persistent advantage in nearly any open position. The pair becomes more valuable as the position opens and as pieces come off — eventually, in an open endgame, two bishops vs bishop and knight is often a clear advantage.\n\n## When to hold the pair, when to break it\n\n- **Hold** when the position is open, pawns on both wings, and pieces are coming off.\n- **Break** the pair (trade a bishop) when doing so wins material, gives you a strong outpost, or removes a key defender.\n- The decision is often automatic: if the bishop you would trade is the *bad* one, it is usually the right trade.',
        },
      ],
    },
  ],
};
