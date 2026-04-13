import type { Chapter } from '../types';

export const ch09Initiative: Chapter = {
  id: 'ch09-initiative',
  partNumber: 9,
  title: 'The Initiative and the Two Weaknesses',
  summary:
    'How to attack without sacrificing soundness — and why a single weakness in the enemy camp is rarely enough to win.',
  lessons: [
    {
      id: 'l-ch09-l1',
      title: 'Holding the initiative',
      intro:
        'The initiative is the right to move first against a target. Pieces that move first dictate the play.',
      sections: [
        {
          kind: 'prose',
          markdown:
            'You have the initiative when **your moves create threats** while your opponent\'s only deal with them. The initiative is not free — usually it costs a small concession (a pawn, time, or king safety) to obtain. The question is always: is the resulting pressure worth what was paid?\n\nA few practical rules:\n\n- **Develop with threats.** Each piece should not only come out but also create a problem for the opponent.\n- **Open lines** when ahead in development.\n- **Trade down** when your initiative wanes — the residual advantage usually transfers to a better endgame.',
        },
      ],
    },
    {
      id: 'l-ch09-l2',
      title: 'The principle of two weaknesses',
      intro:
        'A single weakness in the enemy camp is rarely enough. To win, find or create a second one.',
      sections: [
        {
          kind: 'prose',
          markdown:
            'A defender can protect one weakness by parking a piece next to it. To break the defence you must **stretch** him: open a second front. As pieces shuttle between the two weaknesses, eventually one becomes indefensible.\n\nIn practice this means:\n\n- After fixing a weakness on one wing, look for play on the other.\n- Trade off the defender\'s most active piece, leaving the rest to overwork.\n- Be patient. The win comes from accumulating small advantages, not from a single brilliancy.',
        },
        {
          kind: 'prose',
          markdown:
            '## How to create a second weakness\n\nThe second weakness rarely arises by itself. You usually have to create it:\n\n- **Pawn break** on the other wing (a4-a5, b4-b5, h4-h5) to open a file or fix a target.\n- **Piece manoeuvre** to a square that threatens a second area.\n- **Trade** of pieces that streamlines the path between the two weaknesses for your remaining pieces.\n\nThe defender, struggling with the first weakness, often cannot afford to also resist the creation of the second. That asymmetry is the engine that drives the win.',
        },
      ],
    },
    {
      id: 'l-ch09-l3',
      title: 'Attacking the king',
      intro:
        'When the enemy king is exposed, every other consideration moves to the back of the queue.',
      sections: [
        {
          kind: 'prose',
          markdown:
            'A successful king attack uses a precise sequence:\n\n1. **Identify the target** — which squares around the king are weak?\n2. **Open lines** — pawn breaks, sacrifices, anything that gives your major pieces a runway.\n3. **Concentrate** — bring more attackers than the defender has defenders. Three attackers vs two defenders is usually enough.\n4. **Strike** — once the imbalance is set, the combination presents itself.\n\n## Common attacking patterns\n\n- **Greek gift**: bishop sacrifice on h7 (or h2) followed by Ng5 (Ng4) and Qh5 (Qh4).\n- **Pawn storm**: g- and h-pawns marching against the castled king to open lines.\n- **Sacrificial breakthrough on f7**: classical theme, especially when the king is uncastled.\n\nOnly attack when the resources are there. A premature attack costs material without compensation; a properly prepared attack is irresistible.',
        },
      ],
    },
    {
      id: 'l-ch09-l4',
      title: 'Defence and counter-attack',
      intro:
        'The art of *not losing*. Defence is harder than attack, and it is what most games at the club level turn on.',
      sections: [
        {
          kind: 'prose',
          markdown:
            'The first habit of good defence: **see the threat**. Before every move, ask what the opponent\'s last move did. Most blunders below master level are missed threats, not deep miscalculations.\n\n## Defensive principles\n\n- **Trade attackers.** Each piece traded weakens the attack.\n- **Give back material** to relieve pressure when needed. A pawn or even an exchange returned to extinguish the initiative is a good investment.\n- **Block, don\'t capture** when the captured piece would expose your king further.\n- **Find the only move.** In tense positions, defence often hangs on a single resource. Look for it.\n\n## Counter-attack\n\nThe sharpest defence is a counter-attack on the other wing or against the opposing king. If both sides are racing toward each other\'s king, calculation decides; the side that calculated more accurately wins.',
        },
      ],
    },
    {
      id: 'l-ch09-l5',
      title: 'Prophylaxis: stopping the opponent\'s plan',
      intro:
        'A move that does *nothing for you* but prevents your opponent\'s best idea is often the best move on the board.',
      sections: [
        {
          kind: 'prose',
          markdown:
            'Aron Nimzowitsch coined the term **prophylaxis** for moves whose value is purely preventative. The discipline:\n\n1. Identify your opponent\'s best plan.\n2. Find the move that disrupts it most cheaply.\n3. Play it — even if it looks passive.\n\n## A simple example\n\nIf your opponent plans …f5 to attack your king, a quiet f4 of your own may render the break harmless. The move accomplishes nothing on its own; it accomplishes everything by what it stops.\n\nThe great positional players (Petrosian above all) built whole careers on prophylaxis. At the club level, even one prophylactic move per game is usually the difference between a win and a draw.',
        },
      ],
    },
  ],
};
