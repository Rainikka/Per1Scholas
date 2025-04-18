/******************************/
/****** Rainikka Corprew ******/
/********* JAVASCRIPT *********/
/******** ALAB 318.2 **********/
/******************************/

/******************************/
/***** BUILDING AN EXPRESS ****/
/******* APPLICATION *********/
/******* 18-APR-2025 *********/


/****** Set-Up: Server & Template Engine ******/
/*** Set-Up: Express Server Module ***/
const express = require("express");
const app = express();
const PORT = 3000;

/*** Set-Up Views: Template Engine ***/
app.set('view engine', 'pug')
app.set('views', 'views')


/****** Set-Up: API Endpoint Routes ******/
/*** Set-Up View: Render Landing ***/
app.get('/', (req, res) => {

  let articles = [
    {
      id: 1,
      title: 'Article One',
      author: 'Rain Corp',
      body: 'This is article one'
    },
    {
      id: 2,
      title: 'Article Two',
      author: 'Rain Corp',
      body: 'This is article two'
    },
    {
      id: 3,
      title: 'Article Three',
      author: 'Rain Corp',
      body: 'This is article three'
    },
  ];
  res.render('index', {
    title: "Articles",
    articles: articles
  });
});

/** Set-Up View: Add Articl ***/
app.get('/articles/add', (req, res) => {
  res.render('add_article', {
    title: 'Add Article'
  });
});


/** Get Route: Home Page ***/
// app.get('/', (req, res) => {
//   res.send('Hello World')
// });



/** Start Server: Port Listening Function ***/
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});