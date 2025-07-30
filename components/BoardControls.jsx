import React from 'react';
import MoveArrows from './MoveArrows';

const BoardControls = ({ controls, onPrevMove, onNextMove, disabled }) => {
  return (
    <div className="board-controls">
      <div className="board-controls-left">{controls}</div>
      <div className="board-controls-right">
        <MoveArrows
          onPrevMove={onPrevMove}
          onNextMove={onNextMove}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default BoardControls;
