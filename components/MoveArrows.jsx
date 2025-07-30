import React from 'react';
import classNames from '../lib/classnames';
import { useTheme } from '../hooks';

const MoveArrows = ({ onPrevMove, onNextMove, disabled }) => {
  const { theme } = useTheme();

  return (
    <div className="chess-board-controls">
      <button
        type="button"
        className="pgn-viewer-button"
        onClick={onPrevMove}
        disabled={disabled}
      >
        <i
          className={classNames(
            theme === 'dark' ? 'chevron-left-light' : 'chevron-left'
          )}
        />
      </button>
      <button
        type="button"
        className="pgn-viewer-button"
        onClick={onNextMove}
        disabled={disabled}
      >
        <i
          className={classNames(
            theme === 'dark' ? 'chevron-right-light' : 'chevron-right'
          )}
        />
      </button>
    </div>
  );
};

export default MoveArrows;
