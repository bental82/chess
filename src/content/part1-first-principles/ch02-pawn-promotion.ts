import type { Chapter } from '../types';

export const ch02PawnPromotion: Chapter = {
  id: 'ch02-pawn-promotion',
  partNumber: 2,
  title: 'Pawn Promotion',
  summary:
    'How a single pawn becomes a Queen — when it can be done, when it can be stopped, and the choice of which piece to promote to.',
  lessons: [
    {
      id: 'l-ch02-l1',
      title: 'The race to the eighth rank',
      intro:
        'Promotion is the engine of every endgame. If the kings are far apart, the side with the more advanced passed pawn often wins.',
      sections: [
        {
          kind: 'prose',
          markdown:
            'A passed pawn is one with no enemy pawn on its file or on either adjacent file in front of it. Such a pawn is a long-term threat: every move it makes brings the moment of promotion closer.\n\n## The "Square of the Pawn"\n\nThere is a quick way to tell, by eye, whether a king can stop a passing pawn:\n\n- Draw an imaginary square whose side is the distance from the pawn to its promotion square.\n- If the enemy king can step **inside** that square on his move, he catches the pawn.\n- Otherwise, the pawn promotes.\n\nNote one shortcut: a pawn on its starting square may move two squares, so use that *shorter* distance when checking the square if the pawn has not yet moved.',
        },
        {
          kind: 'diagram',
          fen: '8/8/8/4k3/8/8/7P/3K4 w - - 0 1',
          orientation: 'white',
          caption: 'White pawn on h2 (initial square). Black king at e5 is well inside the square — he catches the pawn even if it advances two.',
        },
        {
          kind: 'diagram',
          fen: '8/8/8/8/k6P/8/8/3K4 w - - 0 1',
          orientation: 'white',
          caption: 'A different story. The pawn is on h4, and the black king on a4 is far outside the square h4-h8-d8-d4. The pawn promotes by force.',
        },
        {
          kind: 'exercise',
          id: 'ex-ch02-l1-1',
          title: 'Promote!',
          fen: '2k5/P7/8/8/8/8/8/2K5 w - - 0 1',
          sideToMove: 'w',
          solution: ['a8=Q+'],
          hint: 'Black king is too far away. There is nothing to fear.',
          explanation:
            'a8=Q+ — the pawn promotes and gives check at the same time. From here, with Queen and King against the lone king, the win is straightforward.',
        },
      ],
    },
    {
      id: 'l-ch02-l2',
      title: 'King support: the protected passed pawn',
      intro:
        'A passed pawn is strong; a passed pawn whose own king walks alongside is unstoppable. Capablanca\'s rule: when in doubt, push the pawn the king can support.',
      sections: [
        {
          kind: 'prose',
          markdown:
            'A passed pawn that the enemy king cannot reach is already a winning advantage. The defender must commit a piece — usually the king — to babysit it, and that piece is then absent from the rest of the board.\n\n## How to push it home\n\n1. **Bring the king up first** if the pawn is still on a low rank.\n2. **Use the king as a battering ram** — he occupies the square in front of the pawn and clears the way.\n3. **Push the pawn last**, when the path to promotion is short enough that the enemy king cannot catch up.\n\nIf you push the pawn first while your king is still on the back rank, you often find your pawn lost or your own king cut off.',
        },
        {
          kind: 'diagram',
          fen: '8/8/8/8/8/2K5/2P5/3k4 w - - 0 1',
          orientation: 'white',
          caption: 'King and Pawn: the king must walk in front of the pawn and the side with the move loses tempo. With opposition, white wins.',
        },
      ],
    },
    {
      id: 'l-ch02-l3',
      title: 'Two pawns against one — the breakthrough',
      intro:
        'When you have a pawn majority on one wing, the right pawn moves create a passed pawn even against equal numbers.',
      sections: [
        {
          kind: 'prose',
          markdown:
            'Three pawns abreast against three pawns abreast on the same file looks like a deadlock. It is not. By pushing the **central pawn** of the trio, then sacrificing where necessary, one of the pawns slips through.\n\nThe golden rule of pawn breakthroughs:\n\n- Identify the pawn that has *no enemy pawn directly in front of it* once a few exchanges occur.\n- Push the pawn that opens the file for that candidate.\n- Be willing to sacrifice one or two pawns to make it through — a single passed pawn near promotion is worth far more than two pawns held back.',
        },
        {
          kind: 'diagram',
          fen: '6k1/5ppp/8/5PPP/8/8/8/6K1 w - - 0 1',
          orientation: 'white',
          caption: 'Three vs three on the same files. White breaks through with g6! — if Black takes either way, the f- or h-pawn promotes.',
        },
      ],
    },
    {
      id: 'l-ch02-l4',
      title: 'Choosing the right piece (under-promotion)',
      intro:
        'Almost always you promote to a Queen. Almost — there are rare moments when a Knight or a Rook avoids stalemate or wins by check.',
      sections: [
        {
          kind: 'prose',
          markdown:
            'Two situations give rise to under-promotion in practice:\n\n## Knight promotion\n\nWhen only the knight\'s jump delivers check, fork or wins material. The classic case: a pawn promoting to Queen would be a fine move, but a pawn promoting to Knight delivers a fork on the king and queen, *winning* material instead of merely promoting.\n\n## Rook promotion\n\nWhen promoting to a Queen would give **stalemate**. A new Queen often controls so many squares that the lone enemy king has no legal move. Promoting to a Rook removes the diagonal coverage and leaves the king a square — letting you mate next move.\n\n## Bishop promotion\n\nVanishingly rare. Compose problems aside, you will almost never want it.\n\n**The decision tree:** ask "would Queen win by force?". If yes, promote to Queen. Only if the answer is no — usually because of stalemate or because the new Queen pinned itself — should you consider anything else.',
        },
      ],
    },
    {
      id: 'l-ch02-l5',
      title: 'When promotion is blocked',
      intro:
        'Sometimes the queen cannot be made — but that does not mean the pawn was useless.',
      sections: [
        {
          kind: 'prose',
          markdown:
            'A pawn one step from promotion ties down enemy pieces even if it never queens. As long as it is unstoppable, the defender must keep a piece next to it. That piece is permanently out of play.\n\nIn the middle-game, a far-advanced passed pawn is often *worth* a piece because of this paralysing effect. Trade pieces freely when you have such a pawn — the simplifications usually leave the pawn unattended and queening.',
        },
      ],
    },
  ],
};
