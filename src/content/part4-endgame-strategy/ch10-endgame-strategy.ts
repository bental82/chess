import type { Chapter } from '../types';

export const ch10EndgameStrategy: Chapter = {
  id: 'ch10-endgame-strategy',
  partNumber: 10,
  title: 'Endgame Strategy',
  summary:
    'Activating the king, the value of an outside passed pawn, the wisdom of patient play, and the role of zugzwang in finishing positions off.',
  lessons: [
    {
      id: 'l-ch10-l1',
      title: 'The active king',
      intro:
        'Once the queens are off, the king is a fighting piece. A king that hides loses the endgame.',
      sections: [
        {
          kind: 'prose',
          markdown:
            'The endgame king is roughly worth a minor piece in attack and defence. Get him to the centre — or to the wing where the action is — as fast as possible.\n\nA single tempo with the king is often the difference between a win and a draw. Pay attention to king moves the way you pay attention to candidate moves in the middle-game.',
        },
        {
          kind: 'prose',
          markdown:
            '## When to activate\n\nThe moment the last queen comes off (or even when only one side\'s queen is gone, if the position is otherwise quiet), start walking your king forward. The transition from middle-game to endgame is often *defined* by king activation.\n\n## A useful drill\n\nIn any endgame position, mentally place each side\'s king on its best central square and ask: who is better off? That comparison frequently identifies the right plan: the side whose king is more remote should usually trade pieces, and the side whose king is better placed should usually keep them on.',
        },
      ],
    },
    {
      id: 'l-ch10-l2',
      title: 'The outside passed pawn',
      intro:
        'A passed pawn far from the centre is a decoy. While the enemy king runs to stop it, your king feasts on the pawns left behind.',
      sections: [
        {
          kind: 'prose',
          markdown:
            'In a king-and-pawn endgame with pawns on both wings, the side with the **outside passed pawn** usually wins. The mechanism is simple:\n\n1. Push the outside pawn.\n2. The enemy king must come to stop it.\n3. While he is gone, your king sweeps up the pawns on the other wing.\n4. Promote there instead.\n\nLook for outside passed pawns in every endgame. They are the easiest winning resource available.',
        },
        {
          kind: 'prose',
          markdown:
            '## Creating one\n\nA pawn majority on the wing further from the kings is the breeding ground. Even a 2-vs-1 majority on the queenside (with kings in the centre or kingside) usually creates a winning outside passed pawn.\n\n## Defending against one\n\nThe defender has two ideas: (a) stop the outside pawn with the king and hope to then reach the other wing in time, or (b) sacrifice a piece for the outside pawn and hold the rest of the position. Sometimes only one of these works, sometimes neither. The earlier you address the threat, the more options remain.',
        },
      ],
    },
    {
      id: 'l-ch10-l3',
      title: 'Do not hurry',
      intro:
        'A maxim of the great endgame players: in a winning endgame, **never** force matters before you have to.',
      sections: [
        {
          kind: 'prose',
          markdown:
            'The defender often has only one good move; the attacker frequently has several. Repeat the position once or twice before committing to the breakthrough — partly to gain time on the clock, partly to make sure you have seen everything.\n\nThe rule is not laziness; it is precision. A hurried decisive move is the most common reason a winning endgame slips into a draw.',
        },
        {
          kind: 'prose',
          markdown:
            '## How to apply it\n\n- Improve the position of your worst-placed piece before pushing pawns.\n- If you have two good moves, play the one that *also* improves your king position.\n- Repeat once. Then, only then, commit.\n\n## The other side\n\nFor the defender, "do not hurry" sometimes means *make your opponent hurry* — pose a single problem on every move so the attacker cannot just shuffle. Setting little tactical traps in a lost endgame is often the only chance.',
        },
      ],
    },
    {
      id: 'l-ch10-l4',
      title: 'Trading down with an advantage',
      intro:
        'When you are ahead in material or position, simplifications usually favour you. The art is choosing *which* trades.',
      sections: [
        {
          kind: 'prose',
          markdown:
            'A pawn up in a queenless middle-game is often hard to convert. The same pawn up in a pawn endgame is usually decisive. The lesson: **trade pieces, not pawns** when ahead.\n\n## The hierarchy of trades when winning\n\n1. **Queens off.** Removes counter-play and king attacks.\n2. **Trade rooks** if your remaining pieces coordinate well; keep them if your pawns need their support.\n3. **Trade minors** — your extra material is worth more in a pawn ending.\n4. **Avoid trading pawns** — every pawn off the board makes your extra pawn relatively more valuable, but also reduces your winning chances if it leads to drawn rook-pawn endings.\n\n## When losing\n\nReverse the rules. **Trade pawns, not pieces.** Queens stay on for swindling chances. Aim for opposite-coloured bishops or insufficient material.',
        },
      ],
    },
    {
      id: 'l-ch10-l5',
      title: 'Zugzwang',
      intro:
        '"Compulsion to move." A position where the player to move would prefer not to move at all.',
      sections: [
        {
          kind: 'prose',
          markdown:
            'In most positions, having the move is a small advantage — the **zugzwang** is the rare case where having the move is a *disadvantage*. The party in zugzwang must move; every legal move worsens the position.\n\nZugzwang occurs almost exclusively in the endgame, when fewer pieces leave fewer waiting options.\n\n## Recognising it\n\nLook for positions where every legal move:\n\n- Drops a pawn.\n- Surrenders a key square.\n- Allows a decisive incursion.\n\nThe winning side aims to **transfer the move** to the opponent. Triangulation with the king is the classic way to do this.\n\n## A famous quote\n\n"In some positions, the side to move loses." Many of the deepest endgame positions in the literature reduce to this single observation.',
        },
      ],
    },
    {
      id: 'l-ch10-l6',
      title: 'Fortresses',
      intro:
        'A fortress is a position the stronger side cannot break through, no matter how much material he is up.',
      sections: [
        {
          kind: 'prose',
          markdown:
            'Some endgames are simply unwinnable by their nature. The defender erects a wall (a fortress) that the attacker\'s pieces cannot penetrate, and the game is drawn by repetition or 50-move rule.\n\n## Common fortress patterns\n\n- **Bishop and rook-pawn**: the bishop on the wrong colour, defender\'s king in the corner — drawn.\n- **Knight on the rim** blockading two pawns, defender\'s king tying down the major piece.\n- **Bishops of opposite colour** with all pawns on one wing.\n\n## How to think about fortresses\n\nThe defender, when material down, should constantly ask: *can I steer the position toward a fortress?* If yes, that is the saving plan. The attacker should ask: *am I about to allow a fortress?* If yes, prevent it before simplifying further.',
        },
      ],
    },
  ],
};
