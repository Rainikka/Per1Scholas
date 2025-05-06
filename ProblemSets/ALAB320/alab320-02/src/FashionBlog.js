import React from 'react';
import './FashionBlog.css';
import sartre1 from './images-sartre/sartre1.jpg';
import sartre2 from './images-sartre/sartre2.jpg';

function FashionBlog() {
  return (
    <div className="page-container">

      {/* Left Column */}
      <header className="header">
        <h1 className="title">Sartre's List</h1>
        <h2 className="subtitle">Better-Dressed People</h2>

        <nav className="navBar" aria-label="Main Navigation" role="navigation">
          <ul className="navList">
            <li className="list-items list-item1"><a className="links link1" href="http://perscholas.org">Women's</a></li>
            <li className="list-items list-item2"><a className="links link2" href="http://perscholas.org">Men's</a></li>
            <li className="list-items list-item3"><a className="links link3" href="http://perscholas.org">On the Street</a></li>
            <li className="list-items list-item4"><a className="links link4" href="http://perscholas.org">The Catwalk</a></li>
            <li className="list-items list-item5"><a className="links link5" href="http://perscholas.org">AdWatch</a></li>
            <li className="list-items list-item6"><a className="links link6" href="http://perscholas.org">About</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="main">
        <section classname="article-container">
          <div className="article-dates article-date-1">11/11/20</div>
          <div className="article-titles article-title-1">On the Street in Brooklyn</div>
          <img className="article-images image1" src={sartre1} alt="Brooklyn street fashion" />
          <article className="articles article1">
            <p className="article-texts"> Quisque a auctor neque. Aliquam erat volutpat. Praesent tristique malesuada leo at commodo. Nullam ut accumsan ligula, et hendrerit ex. Fusce est massa, placerat quis elit sed, varius gravida tellus. Mauris a purus lobortis, posuere massa ut, blandit tellus. In accumsan nisi vitae iaculis ultrices. In lectus libero, scelerisque vitae interdum placerat, tempor ac nunc. Mauris cursus urna dolor, ac porta nibh interdum nec. Aliquam placerat erat vitae luctus sollicitudin.
            </p> </article>
        </section>


        <section classname="article-container">
          <div className="article-dates article-date-1">11/12/20</div>
          <div className="article-titles article-title-1">Vintage in Vogue</div>
          <img className="article-images image1" src={sartre2} alt="Vintage fashion" />
          <article className="articles article1">
            <p className="article-texts"> Nam eleifend urna libero, vel aliquam lacus dictum in. Mauris bibendum convallis libero, in consequat sapien dignissim a. Nunc faucibus magna at lorem porttitor, vel elementum velit sagittis. Donec porttitor et mi non placerat. Donec rutrum quis ex convallis venenatis. Aliquam in hendrerit odio. Aenean dolor enim, laoreet quis ipsum ac, imperdiet blandit lectus. Vestibulum cursus mauris id nulla semper scelerisque. Fusce metus nisi, vehicula in tristique quis, molestie quis sem. Morbi ut finibus ipsum, ac finibus sapien.</p>
          </article>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
      </footer>
    </div>
  );
}

export default FashionBlog;