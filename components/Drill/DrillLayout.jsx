import { useEffect } from 'react';
import { useChessContext } from '../../contexts/ChessContext';
import { useDrillContext } from '../../contexts/DrillContext';
import useMainline from '../../hooks/use-mainline';
import FeedbackIcon from '../Common/FeedbackIcon';
import MoveList from '../Common/MoveList';
import DrillBoard from './DrillBoard';

const DrillLayout = ({ pgn, onComplete, showMoves }) => {
  const { moves } = useMainline(pgn);

  const { history, initialFen, initialTurn } = useChessContext();
  const { feedback, lastMove, setSolution } = useDrillContext();
  useEffect(() => setSolution(moves), [moves]);

  return (
    <>
      <div className="relative w-full">
        <DrillBoard fen={initialFen} moves={moves} onComplete={onComplete} />
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

export default DrillLayout;
