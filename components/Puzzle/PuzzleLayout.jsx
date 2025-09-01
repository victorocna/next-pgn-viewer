import { useEffect } from 'react';
import { useChessContext } from '../../contexts/ChessContext';
import { usePuzzleContext } from '../../contexts/PuzzleContext';
import useMainline from '../../hooks/use-mainline';
import FeedbackIcon from '../Common/FeedbackIcon';
import MoveList from '../Common/MoveList';
import PuzzleBoard from './PuzzleBoard';

const PuzzleLayout = ({ pgn, onComplete, showMoves }) => {
  const { moves } = useMainline(pgn);

  const { history, initialFen, initialTurn } = useChessContext();
  const { feedback, lastMove, setSolution } = usePuzzleContext();
  useEffect(() => setSolution(moves), [moves]);

  return (
    <>
      <div className="relative w-full">
        <PuzzleBoard fen={initialFen} moves={moves} onComplete={onComplete} />
        <FeedbackIcon
          firstTurn={initialTurn}
          feedback={feedback}
          lastMove={lastMove}
        />
      </div>
      {showMoves && <MoveList history={history} initialFen={initialFen} />}
    </>
  );
};

export default PuzzleLayout;
