import type { Chapter } from '../types';

export const ch05OpeningStrategy: Chapter = {
  id: 'ch05-opening-strategy',
  partNumber: 5,
  title: 'General Strategy of the Opening',
  summary:
    'Three principles that survive every opening fashion: develop quickly, fight for the centre, get the king to safety. Plus what *not* to do, and a survey of the open and closed games.',
  lessons: [
    {
      id: 'l-ch05-l1',
      title: 'Three opening principles',
      intro:
        'Forget the names of openings. Internalise these three ideas and the names will take care of themselves.',
      sections: [
        {
          kind: 'prose',
          markdown:
            '## 1. Develop your minor pieces\n\nKnights and bishops belong on active squares before move ten. Move each minor piece **once** in the opening; do not chase the opponent\'s pieces with the same piece twice.\n\n## 2. Fight for the centre\n\nThe four central squares (e4, d4, e5, d5) are the busiest crossroads on the board. Pieces that influence the centre influence the whole game.\n\n## 3. Castle early\n\nThe king is the slowest piece. Get him out of the centre before the position opens. As a rule of thumb: **castle by move 10**.',
        },
        {
          kind: 'walkthrough',
          fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
          orientation: 'white',
          caption: 'A model opening: the Italian Game. Notice how every white move develops a piece, fights for the centre, or prepares the king\'s safety.',
          moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Bc5', 'O-O', 'Nf6', 'd3', 'd6'],
          commentary: [
            'A central pawn move that opens lines for the bishop and queen.',
            '',
            'Develop a knight, attack a central pawn.',
            '',
            'The bishop eyes the weakest square in Black\'s camp, f7.',
            '',
            'King safety achieved on move 4. Compare your own openings to this rhythm.',
            '', '', '',
          ],
        },
      ],
    },
    {
      id: 'l-ch05-l2',
      title: 'What not to do',
      intro:
        'Most opening disasters come from breaking the principles, not from being out-prepared.',
      sections: [
        {
          kind: 'prose',
          markdown:
            'Common opening mistakes:\n\n- **Bringing the queen out too early.** She becomes a target and loses time being chased.\n- **Moving the same piece twice** without a clear gain.\n- **Pushing flank pawns** before completing development.\n- **Grabbing pawns** while the king is still in the centre.\n\nIf you avoid these four habits, you will out-perform half your opponents before the middle-game even begins.',
        },
        {
          kind: 'prose',
          markdown:
            '## A practical checklist\n\nBefore making any move in the opening, ask yourself:\n\n1. Does this move develop a piece, occupy or fight for the centre, or improve king safety?\n2. If not, does it *prevent* the opponent from doing one of those?\n3. If neither — it is probably the wrong move.\n\nThis filter alone will keep you on the right side of most opening positions.',
        },
      ],
    },
    {
      id: 'l-ch05-l3',
      title: 'Open games and closed games',
      intro:
        'There are two great families of opening, and they call for different temperaments.',
      sections: [
        {
          kind: 'prose',
          markdown:
            '## Open games (1.e4 e5)\n\nBoth sides immediately stake claims in the centre, and the position usually opens. Tactics flow naturally; the player who develops faster and notices threats first comes out best. The open games are the right starting point for a beginner — every general principle is on display.\n\n## Closed games (1.d4 d5, 1.c4)\n\nThe centre stays locked or semi-locked for many moves. Strategy dominates: pawn structure, manoeuvring, the search for outposts. Tactics are still there but they appear later, after a long preparation.\n\n## Which to play?\n\nLearn open games first. Once those positions are second nature, branch out into closed openings as your taste develops. A useful rule: against a stronger opponent, prefer open games (your opponent\'s extra knowledge counts for less when both sides must calculate); against a weaker one, closed games (your superior planning will tell over many moves).',
        },
      ],
    },
    {
      id: 'l-ch05-l4',
      title: 'Pawn tension and when to release it',
      intro:
        'A central pawn that *could* capture but doesn\'t is one of the most powerful pieces on the board.',
      sections: [
        {
          kind: 'prose',
          markdown:
            'Whenever pawns face off across the centre — say a white pawn on e4 against a black pawn on d5, with capture possible either way — there is **tension**. The position is fluid; both sides have options.\n\nThe rule of thumb: **the side who releases the tension first usually does worse**. Releasing means either capturing or pushing past, fixing the structure. Once the structure is fixed, your opponent knows what to plan against; while the tension is alive, every move he makes might be the wrong one.\n\n## When you should release tension\n\n- When you can recapture with an active piece (e.g. capturing with a knight that goes to a fine outpost).\n- When releasing creates an immediate threat (a passed pawn, a check, a fork).\n- When holding the tension lets your opponent improve.\n\nThe instinct to capture immediately is the costliest habit a beginner has. Learn to wait.',
        },
      ],
    },
    {
      id: 'l-ch05-l5',
      title: 'Three openings to know by sight',
      intro:
        'You do not need to memorise theory. You should know what the first few moves of these three openings look like.',
      sections: [
        {
          kind: 'walkthrough',
          fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
          orientation: 'white',
          caption: 'The Ruy Lopez — perhaps the most studied opening in chess. The early Bb5 puts immediate pressure on c6.',
          moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5'],
          commentary: [
            '', '', '', '',
            'The Spanish Bishop. White pins the knight (relative pin) and prepares castling.',
          ],
        },
        {
          kind: 'walkthrough',
          fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
          orientation: 'white',
          caption: 'The Queen\'s Gambit — the workhorse of 1.d4. White offers a c-pawn for central control.',
          moves: ['d4', 'd5', 'c4'],
          commentary: [
            'Claiming the centre with the queen\'s pawn.',
            '',
            'The gambit. If Black takes, White will recover the pawn while controlling the centre.',
          ],
        },
        {
          kind: 'walkthrough',
          fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
          orientation: 'white',
          caption: 'The Sicilian Defence — Black\'s sharpest answer to 1.e4.',
          moves: ['e4', 'c5'],
          commentary: [
            '',
            'Asymmetric structure: Black contests the d4 square with a flank pawn. The resulting positions are unbalanced and rich in chances for both sides.',
          ],
        },
        {
          kind: 'prose',
          markdown:
            'Recognising the *shape* of these openings tells you the kind of position you are heading into. That recognition is more valuable than memorising twenty moves of theory.',
        },
      ],
    },
  ],
};
