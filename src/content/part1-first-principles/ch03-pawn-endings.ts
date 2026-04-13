import type { Chapter } from '../types';

export const ch03PawnEndings: Chapter = {
  id: 'ch03-pawn-endings',
  partNumber: 3,
  title: 'Pawn Endings',
  summary:
    'King and pawn endings are the foundation of all endgame study. Master opposition, the key squares of a passed pawn, and a few standard winning and drawing positions.',
  lessons: [
    {
      id: 'l-ch03-l1',
      title: 'The Opposition',
      intro:
        'When two kings face each other on the same rank, file or diagonal, separated by an odd number of squares, the side **not** to move has the opposition.',
      sections: [
        {
          kind: 'prose',
          markdown:
            'Whoever has the opposition forces the other king to give ground. In king-and-pawn endings this single idea decides hundreds of positions.\n\n## How to use it\n\n- The **stronger side** uses the opposition to push the enemy king back and bring his own king to support the pawn.\n- The **weaker side** uses the opposition to keep the enemy king from advancing.\n\nThere are also *distant opposition* (kings five squares apart) and *diagonal opposition* — both reduce to the direct opposition once the kings approach.',
        },
        {
          kind: 'diagram',
          fen: '4k3/8/4K3/8/8/8/8/8 w - - 0 1',
          orientation: 'white',
          caption: 'Direct opposition: White to move would have to give way (loses the opposition). With Black to move, Black must step aside.',
        },
        {
          kind: 'prose',
          markdown:
            '## Distant opposition\n\nWhen the kings are more than two squares apart on the same line, the side **not** to move still has the opposition — the principle is the same; the squares between simply have to match in colour and number.\n\n- If the squares between the kings number 1, 3 or 5, and it is **not** your move, you have the opposition.\n- The opposition can be transferred from distant to direct as the kings approach.\n\nThis matters when one king has to "out-wait" the other before advancing.',
        },
        {
          kind: 'diagram',
          fen: '4k3/8/8/8/8/8/8/4K3 w - - 0 1',
          orientation: 'white',
          caption: 'Distant opposition. Five empty squares between the kings on the e-file. With Black to move, White holds the opposition.',
        },
      ],
    },
    {
      id: 'l-ch03-l2',
      title: 'King and pawn vs King: the key squares',
      intro:
        'A pawn promotes if its own king can reach one of three "key squares" in front of it. This is the single most important rule of pawn endings.',
      sections: [
        {
          kind: 'prose',
          markdown:
            'For a pawn on the **2nd through 5th rank**, the key squares are the three squares two ranks in front of it.\n\nFor a pawn on the **6th rank**, the key squares are the three squares immediately in front of it (one rank ahead).\n\nIf the stronger king occupies any key square, the pawn queens. If the defender can prevent the king from reaching a key square, it is a draw.\n\n**Rook pawns are an exception.** A pawn on the a- or h-file with the defending king able to reach the corner of promotion is always a draw — there are no key squares the stronger side can use.',
        },
        {
          kind: 'diagram',
          fen: '4k3/8/4K3/4P3/8/8/8/8 b - - 0 1',
          orientation: 'white',
          caption: 'White king on a key square (e6) with the pawn behind. Whoever moves, White wins.',
        },
        {
          kind: 'prose',
          markdown:
            '## How to use the key squares\n\n1. Locate the three key squares for your pawn.\n2. Race your king for any of them — *getting your king to a key square ahead of the pawn* is the goal, not pushing the pawn.\n3. Push the pawn only when the king is already on a key square or can step onto one before the enemy king reaches the file.\n\nThis is the cleanest way to think about k+p vs k. It avoids the endless variations of opposition and replaces them with three target squares.',
        },
      ],
    },
    {
      id: 'l-ch03-l3',
      title: 'King in front of the pawn',
      intro:
        'A king who walks ahead of his pawn — never behind it — converts almost any king-and-pawn ending.',
      sections: [
        {
          kind: 'prose',
          markdown:
            'The pawn cannot move backwards. Its king must therefore arrive *first* and clear the path. A useful image: think of the pawn as a slow walker and the king as the bodyguard who scouts ahead.\n\n## The standard winning method\n\n1. King to the 6th rank, pawn still on the 4th or 5th — this is automatically winning if no enemy pieces interfere.\n2. With the king on the 6th, gain opposition.\n3. Push the pawn to the 6th. The enemy king must yield.\n4. King and pawn march together to promotion.\n\nIf instead the king is *behind* the pawn, the position is often a draw against a defender who knows the technique.',
        },
        {
          kind: 'diagram',
          fen: '4k3/8/3KP3/8/8/8/8/8 b - - 0 1',
          orientation: 'white',
          caption: 'King on the 6th rank, pawn on the 6th, opposition with Black to move. White wins by force.',
        },
      ],
    },
    {
      id: 'l-ch03-l4',
      title: 'The drawn rook-pawn',
      intro:
        'Knowing what *cannot* be won is as valuable as knowing what can.',
      sections: [
        {
          kind: 'prose',
          markdown:
            'If you are defending against a King and a rook-pawn (a- or h-file), and the enemy king is the closest king to the corner of promotion, **head straight for that corner**. Once your king sits in the promotion corner, the stronger king cannot get out of his way without surrendering the pawn or stalemating you.\n\nThis is the defender\'s lifeline in a great many endings.\n\n## Why rook-pawns are special\n\nThe edge of the board removes one half of the king\'s zone of control. The defending king in the corner cannot be driven out laterally — there is no laterally. The stronger king ends up either blocking his own pawn (stalemate) or stepping aside (allowing …Kxh-pawn).',
        },
        {
          kind: 'diagram',
          fen: '7k/8/6KP/8/8/8/8/8 b - - 0 1',
          orientation: 'white',
          caption: 'A famous draw. Black plays …Kg8 and shuffles between g8 and h8; White can never make progress without stalemate.',
        },
      ],
    },
    {
      id: 'l-ch03-l5',
      title: 'Pawn majorities and minority attacks',
      intro:
        'Where the pawns are unequal, planning becomes structural: count majorities, identify candidate passed pawns.',
      sections: [
        {
          kind: 'prose',
          markdown:
            'A **pawn majority** is a group of pawns on one wing that outnumbers the enemy pawns on that wing. The side with the majority can usually create a passed pawn there.\n\n## The three-step plan\n\n1. **Identify** the majority (e.g. three pawns vs two on the queenside).\n2. **Mobilise**: push the candidate — typically the pawn with no enemy pawn directly in front of it.\n3. **Promote**, or use the threat of promotion to force concessions on the other wing.\n\n## Outside vs central majorities\n\nA majority **away from the kings** is more valuable in the endgame because the enemy king must spend several moves to reach it, abandoning the centre. This is the "outside passed pawn" theme that recurs throughout endgame strategy.',
        },
      ],
    },
    {
      id: 'l-ch03-l6',
      title: 'Triangulation — losing a tempo on purpose',
      intro:
        'Sometimes you need it to be the *opponent\'s* move. The king\'s ability to triangulate gives you that gift.',
      sections: [
        {
          kind: 'prose',
          markdown:
            'A king can reach the same square in two moves (e.g. e2-d2-e3) or three moves (e2-d2-e2 or via a triangle). The pawns cannot — pawns only move forward. So if you can reach a critical square in three king-moves where the pawn-only side requires two, you have changed who is to move.\n\nThis manoeuvre is called **triangulation** and it is the sharpest tool in the king-and-pawn endgame toolbox. Look for it whenever you have the better position but seem to be one tempo short.',
        },
      ],
    },
  ],
};
