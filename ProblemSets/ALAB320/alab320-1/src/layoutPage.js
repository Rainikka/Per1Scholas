import React from 'react';
import './layoutPage.css';

function LayoutPage() {
  return (
    <div className="page-container">
      {/* Left Column */}
      <div className="left-column">
        {/* Top box split in two */}
        <div className="left-top-box">
          <div className="left-top-box1"></div>
          <div className="left-top-box2"></div>
        </div>

        {/* 6 more equal boxes */}
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div >

      {/* Right Column */}
      < div className="right-column" >
        <div className="right-top-box"></div>
        <div className="right-bottom-box"></div>
      </ >
    </div >
  );
}

export default LayoutPage;