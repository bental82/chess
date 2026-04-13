import type { Chapter } from '../types';

export const ch06RookEndings: Chapter = {
  id: 'ch06-rook-endings',
  partNumber: 6,
  title: 'Rook Endings',
  summary:
    'The most common endgame in practice. Two positions — the Lucena and the Philidor — are essential knowledge. Beyond them, a handful of recurring themes decide the rest.',
  lessons: [
    {
      id: 'l-ch06-l1',
      title: 'Rook behind the passed pawn',
      intro:
        'Tarrasch\'s rule, four words long, decides hundreds of rook endings: **rooks belong behind passed pawns**.',
      sections: [
        {
          kind: 'prose',
          markdown:
            'A rook behind its own passed pawn gains range as the pawn advances. A rook in front of its pawn is reduced to a doorstop.\n\nThe rule applies to the defender too: place your rook behind the enemy\'s passed pawn and you cramp it forever.\n\n## Why it works\n\nWhen the pawn advances, the squares it leaves behind become available to the rook. A rook on a1 behind a passed a-pawn will reach the eighth rank as the pawn marches. A rook on a8 in front of the same pawn must vacate to allow promotion — and then the pawn loses its escort.\n\n## In practice\n\nWhen you reach a rook endgame with a passed pawn, the very first question is: *where is my rook in relation to that pawn?* If it is in front, look for a tempo to swing it behind, even at the cost of allowing the enemy king closer.',
        },
      ],
    },
    {
      id: 'l-ch06-l2',
      title: 'The Lucena Position',
      intro:
        'The textbook winning method when you are a pawn up with rook on the 7th and king in front of the pawn.',
      sections: [
        {
          kind: 'prose',
          markdown:
            'Named after a 15th-century Spanish manuscript, the Lucena is the cornerstone of practical rook endings. The winning idea is the **bridge**:\n\n1. The white king sits on the promotion square (e.g. c8) sheltering the pawn.\n2. The white rook moves to the 4th rank, e.g. Re4 — apparently passive.\n3. The king walks out: Kd7, then Kd6, dodging the checks.\n4. When the enemy rook checks one last time, the white rook **interposes** on the same rank, blocking the check and shielding the king all at once.\n5. The pawn promotes.\n\nWithout the bridge, the king is checked endlessly. With it, the rook ending wins by force.',
        },
        {
          kind: 'diagram',
          fen: '1K6/P2k4/8/8/8/8/4r3/4R3 w - - 0 1',
          orientation: 'white',
          caption: 'A Lucena-type position. White builds the bridge with Re4, then walks the king out via c7-d6, finally interposing on the 4th rank.',
        },
        {
          kind: 'prose',
          markdown:
            '## Memorising the bridge\n\nThe bridge always has the same shape: rook on the 4th rank (the rank fourth from the promotion square), king on the 6th, pawn on the 7th. When you see those three coordinates lined up, the win is automatic — march the king down the file the pawn is on, allow the checks to come, then block on the 4th when the rook reaches a square in line.',
        },
      ],
    },
    {
      id: 'l-ch06-l3',
      title: 'The Philidor Position',
      intro:
        'The matching defensive technique. With the right method, the side a pawn down draws — even against perfect play.',
      sections: [
        {
          kind: 'prose',
          markdown:
            'François-André Danican Philidor showed in 1777 the saving idea:\n\n1. Place the **defending rook on the third rank** (the rank in front of your own king).\n2. Wait. As soon as the enemy pawn advances to the third rank itself (cutting off your rook from above), drop the rook to the back rank and check from behind.\n3. The enemy king has no shelter from the perpetual checks, and the position is drawn.\n\nThe Philidor is the *first* defensive idea to learn, because it appears even more often than the Lucena.\n\n## Why it draws\n\nThe defending rook on the 3rd rank prevents the attacking king from crossing into the defender\'s territory. Once the pawn must move to the 3rd to dislodge the rook, the rook swings behind the pawn. The enemy king has nowhere to hide from the rook checks — and any attempt to shelter behind his own pawn loses the pawn to the rook, drawing.',
        },
      ],
    },
    {
      id: 'l-ch06-l4',
      title: 'Active rook over passive rook',
      intro:
        'In rook endings, **activity** outweighs nearly every other consideration — even an extra pawn.',
      sections: [
        {
          kind: 'prose',
          markdown:
            'A rook on its 7th (or 2nd) rank is generally worth more than a rook tied to defending pawns. The 7th rank attacks the enemy king\'s pawns and may roam between targets at will.\n\n## Three principles\n\n1. **Cut off the king** with your rook whenever possible. A king cut off by even one file is dramatically less effective.\n2. **Attack from behind** — keep the rook active by checking from the rear, not by interposing in front.\n3. **Sacrifice a pawn for activity** if the alternative is a passive rook. Many rook endings a pawn down are drawn by the active defender.',
        },
      ],
    },
    {
      id: 'l-ch06-l5',
      title: 'Rook + 2 pawns vs Rook',
      intro:
        'Two pawns generally win. But the wrong technique still draws.',
      sections: [
        {
          kind: 'prose',
          markdown:
            'When the two pawns are **connected and passed**, the win is straightforward — push them with king support. When they are **disconnected**, things are trickier; the defender can sometimes blockade one and capture the other.\n\nThe key technique with disconnected pawns is to **push the pawn the enemy king cannot reach** first, drawing the king to that wing, then use your king to escort the second pawn home on the other wing. This is another instance of the *outside passed pawn* idea, and it is decisive whenever the pawns are far apart.\n\n## Drawing chances\n\nThe defender draws when:\n\n- The pawns are *both* rook-pawns.\n- The defending king reaches the corner of either pawn before it can be ejected.\n- The defender can sacrifice his rook for the more advanced pawn and still hold the other with king alone.',
        },
      ],
    },
    {
      id: 'l-ch06-l6',
      title: 'The seventh-rank absolute',
      intro:
        'A rook on the seventh rank is one of the great middle-game-into-endgame trumps. Two rooks on the seventh are usually decisive.',
      sections: [
        {
          kind: 'prose',
          markdown:
            'A **single** rook on the seventh rank attacks the enemy pawns — usually decisive in an ending if the pawns are still on their starting squares.\n\n**Two** rooks on the seventh rank are called the "blind pigs" — they devour everything in sight, frequently force a draw by perpetual check at minimum, and usually win by themselves.\n\n## How to get them there\n\nTrade off pawns and pieces that block the way. An open file is the highway to the seventh rank — the side that controls the only open file in a position is often winning, because eventually a rook reaches the seventh.',
        },
      ],
    },
  ],
};
