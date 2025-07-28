import React from 'react';

const MobileBoardControls = ({
  controls,
  onPrevMove,
  onNextMove,
  disabled,
}) => {
  return (
    <div className="mobile-bottom-nav">
      <div className="mobile-bottom-nav-content">
        <div className="mobile-bottom-nav-controls">{controls}</div>
        <div className="mobile-bottom-nav-arrows">
          <button
            className="mobile-nav-arrow-btn"
            onClick={onPrevMove}
            disabled={disabled}
            title="Previous move"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            className="mobile-nav-arrow-btn"
            onClick={onNextMove}
            disabled={disabled}
            title="Next move"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileBoardControls;
