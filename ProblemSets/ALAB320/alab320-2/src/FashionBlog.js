import React from 'react';
import './FashionBlog.css';

function FashionBlog() {
  return (
    <div className="page-container">

      {/* Left Column */}
      <header className="header">
        <h1 className="title">Sartre's List</h1>
        <h2 className="subtitle">Better Dressed People</h2>

        <nav className="navBar">
          <ul className="navList">
            <li className="list-items list-item1"><a className="a-links link1" href="">1</a></li>
            <li className="list-items list-item2"><a className="a-links link2" href="">2</a></li>
            <li className="list-items list-item3"><a className="a-links link3" href="">3</a></li>
            <li className="list-items list-item4"><a className="a-links link4" href="">4</a></li>
            <li className="list-items list-item5"><a className="a-links link5" href="">5</a></li>
            <li className="list-items list-item6"><a className="a-links link6" href="">6</a></li>
          </ul>
        </nav>
      </header>

      {/* 6 equal-spaced boxes */}
      <main main className="main">
        <div className="section2-box4">4</div>
        <div className="section2-box5">5</div>
        <div className="section2-box6">6</div>
        <div className="section2-box7">7</div>
      </main>

      {/* 6 equal-spaced boxes */}
      <footer className="footer">
        <div className="section3-box8">8</div>
        <div className="section3-box9">9</div>
        <div className="section3-box10">10</div>
        <div className="section3-box11">11</div>
      </footer>
    </div>

  );
}

export default FashionBlog;