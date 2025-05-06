ddidimport React from 'react';
import './layoutPage.css';

function layoutPage() {
  return (
    <div calssName="page-container">
      { /* Left Column */}
      <div className="left-column">
        { /*Top box split in two*/}
        <div className="top-split-container">
          <div className="split-box-left-split"></div>
          <div className="split-box-right-split"></div>
        </div>

        { /* 6 more equal boxes */}
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
      { /* Right Column */}
      <div className="right-column">
        <div className="right-top-box"></div>
        <div className="right-bottom-box"></div>

      </div>

    </div >
  );
}

export defautl layoutPage