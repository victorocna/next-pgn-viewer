import React from 'react';
import { NextChessground } from 'next-chessground';
import mergeClassNames from 'merge-class-names';
import {
  ThemeProvider,
  useEqualHeight,
  usePgnViewer,
  useShapes,
} from '../hooks';
import PgnTree from './PgnTree';
import BoardControls from './BoardControls';
import MoveModal from './MoveModal';

const PgnViewer = ({ pgn, disabled, header, controls, theme }) => {
  const {
    current, // Current moment in the PGN
    tree, // PGN tree structure
    variations,
    onUserMove,
    goNextMoment,
    goPrevMoment,
    goToMoment,
    onVariationChoice,
    onVariationsCancel,
  } = usePgnViewer(pgn);

  const handleMoveClick = (moment) => {
    if (!disabled) {
      goToMoment(moment);
    }
  };

  const { shapes, refocusModal } = useShapes({ current, variations });
  const { sourceRef, targetRef } = useEqualHeight(current);

  return (
    <ThemeProvider theme={theme}>
      <div
        className={mergeClassNames(
          'pgn-wrapper',
          theme === 'light' && 'pgn-tree-light'
        )}
      >
        <div ref={sourceRef} className="chess-board">
          <NextChessground
            fen={current.fen}
            shapes={shapes}
            onMove={onUserMove}
          />
          <div className="board-controls-desktop">
            <BoardControls
              controls={controls}
              onPrevMove={goPrevMoment}
              onNextMove={goNextMoment}
              disabled={disabled}
            />
          </div>
        </div>
        <div ref={targetRef} className="pgn-tree-section">
          {header && (
            <div className="pgn-tree-header">
              <p className="pgn-tree-header-title">{header}</p>
            </div>
          )}
          <div className="pgn-tree-container">
            <PgnTree
              tree={tree}
              current={current}
              onMoveClick={handleMoveClick}
            />
          </div>
          {variations && (
            <div className="move-modal-container">
              <MoveModal
                variations={variations}
                onChoice={onVariationChoice}
                onCancel={onVariationsCancel}
                onFocusChange={refocusModal}
              />
            </div>
          )}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default PgnViewer;
