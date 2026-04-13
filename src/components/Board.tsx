import { Chessboard } from 'react-chessboard';
import { useBoardSize } from '../lib/useBoardSize';

interface BoardProps {
  fen: string;
  orientation?: 'white' | 'black';
  size?: number;
  caption?: string;
}

export default function Board({ fen, orientation = 'white', size, caption }: BoardProps) {
  const responsive = useBoardSize();
  const px = size ?? responsive;
  return (
    <figure className="my-4 inline-block">
      <div style={{ width: px }}>
        <Chessboard
          position={fen}
          boardOrientation={orientation}
          arePiecesDraggable={false}
          customBoardStyle={{ borderRadius: 6, boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
          customLightSquareStyle={{ backgroundColor: '#f0d9b5' }}
          customDarkSquareStyle={{ backgroundColor: '#b58863' }}
        />
      </div>
      {caption && <figcaption className="text-sm text-stone-600 mt-1 italic">{caption}</figcaption>}
    </figure>
  );
}
