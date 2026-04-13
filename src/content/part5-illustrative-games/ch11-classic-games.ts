import type { Chapter } from '../types';

export const ch11ClassicGames: Chapter = {
  id: 'ch11-classic-games',
  partNumber: 11,
  title: 'Classic Illustrative Games',
  summary:
    'Annotated walkthroughs of historical games chosen for the clarity of their themes. Move scores are public record; commentary is original.',
  lessons: [
    {
      id: 'l-ch11-l1',
      title: 'Morphy at the Opera (Paris, 1858)',
      intro:
        'Paul Morphy vs the Duke of Brunswick and Count Isouard. A textbook lesson in development, open lines, and king safety — finished in seventeen moves.',
      sections: [
        {
          kind: 'prose',
          markdown:
            'Watch how every white move develops a piece or opens a line. Morphy never moves the same piece twice in the opening, never grabs a pawn for its own sake, and is rewarded with a position where his pieces simply work and his opponent\'s do not.',
        },
        {
          kind: 'walkthrough',
          fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
          orientation: 'white',
          moves: [
            'e4', 'e5',
            'Nf3', 'd6',
            'd4', 'Bg4',
            'dxe5', 'Bxf3',
            'Qxf3', 'dxe5',
            'Bc4', 'Nf6',
            'Qb3', 'Qe7',
            'Nc3', 'c6',
            'Bg5', 'b5',
            'Nxb5', 'cxb5',
            'Bxb5+', 'Nbd7',
            'O-O-O', 'Rd8',
            'Rxd7', 'Rxd7',
            'Rd1', 'Qe6',
            'Bxd7+', 'Nxd7',
            'Qb8+', 'Nxb8',
            'Rd8#',
          ],
          commentary: [
            '', '',
            '', 'Black plays passively in the centre.',
            '', 'A pin on the knight — but Morphy will show that the pin only works if the pinning piece is well placed.',
            '', '',
            'A small concession of structure to clear the centre and rush development.', '',
            '', '',
            'Doubling on the f7 square and adding the queen.', 'Forced — the only defence.',
            'Continuing development.', '',
            'Now both knights are pinned. Morphy is willing to sacrifice the knight for the initiative.', 'Black insists on grabbing material.',
            '', '',
            'The key sacrifice. Two pieces for nothing — but every black piece is paralysed.', 'Forced.',
            'Long castles develops the rook and brings the king to safety in one move.', 'Black tries to relieve the pin.',
            'A second exchange sacrifice. Morphy has now given up two knights and the exchange — and is still winning by force.', '',
            'The final rook joins the attack.', 'Defending the rook.',
            'Eliminating the last defender.', '',
            'A queen sacrifice to clear the back rank.', 'Forced.',
            'Mate. Notice that every active piece in the final position is white, and they have all moved exactly once.',
          ],
          caption: 'The Opera Game. Morphy sacrificed two knights, the exchange and the queen — and finished mating with the only major piece he developed late.',
        },
      ],
    },
    {
      id: 'l-ch11-l2',
      title: 'Tactical themes you saw',
      intro:
        'A short re-cap of the techniques on display.',
      sections: [
        {
          kind: 'prose',
          markdown:
            '- **Development with threats.** Every white piece came out attacking something.\n- **Pin.** Bg5 pinned the f6-knight to the queen.\n- **Sacrifice for the initiative.** Two minor pieces and the exchange were given up to keep black\'s pieces from coordinating.\n- **The open file.** Castling queenside placed the rook on a wide-open d-file — the highway down which the mate eventually came.\n- **Decoy and clearance.** The queen sacrifice on b8 cleared the back rank for the rook.\n\nEvery one of these motifs appears in your own games every week.',
        },
      ],
    },
    {
      id: 'l-ch11-l3',
      title: 'A famous opening miniature',
      intro:
        'A short, sharp game showing how quickly the punishment for breaking opening principles can arrive. The losing side moves the queen too early; the rest is calculation.',
      sections: [
        {
          kind: 'walkthrough',
          fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
          orientation: 'white',
          moves: [
            'e4', 'e5',
            'Nf3', 'Nc6',
            'Bc4', 'Nf6',
            'Ng5', 'd5',
            'exd5', 'Nxd5',
            'Nxf7', 'Kxf7',
            'Qf3+', 'Ke6',
            'Nc3',
          ],
          commentary: [
            '', '',
            '', '',
            'The Italian.', 'Black plays the Two Knights Defence.',
            'A direct attack on f7 — the Fried Liver attack.', 'The principal defence.',
            '', 'Capturing back, but now the knight on d5 is a target.',
            'The famous sacrifice. Black is essentially forced to take, since after any other move Black drops material.', 'The only legal recapture.',
            'Check, attacking d5 and threatening to bring more pieces in.', 'The king must come out into the open.',
            'Bringing the third attacker in. White already has a winning attack — every black piece is undeveloped, the king is on e6, and the rook on d-file (after d2-d3) will pile on. The point is not the precise continuation but the lesson: *exposing the king before development is fatal*.',
          ],
          caption: 'The Fried Liver. The defender survives only with deep theoretical knowledge — and even then, the position is unpleasant.',
        },
        {
          kind: 'prose',
          markdown:
            '## The lesson\n\nThe Fried Liver is centuries old and still arrives in club games every week. The recipe — Bc4, Ng5, then a sacrifice on f7 — works against any defender who has not learned its peculiar refutation.\n\nThe lesson is **not** "play the Fried Liver" or "avoid it". The lesson is that the principles you read in Chapter 5 — develop quickly, fight for the centre, get the king to safety — are not aesthetic preferences. They are matters of life and death across the chessboard.',
        },
      ],
    },
  ],
};
