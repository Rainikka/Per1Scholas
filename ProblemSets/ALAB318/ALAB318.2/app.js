/******************************/
/****** Rainikka Corprew ******/
/********* JAVASCRIPT *********/
/******** ALAB 318.2 **********/
/******************************/

/******************************/
/***** BUILDING AN EXPRESS ****/
/******* APPLICATION *********/
/******* 18-APR-2025 *********/


/*** Set-Up: Express Server Module ***/
const express = require("express");
const app = express();
const PORT = 3000;

/*** Set-Up Views: Template Engine ***/
app.set('view engine', 'pug')
app.set('views', 'views')



/*** Set-Up: API Endpoint Routes ***/

/** Set-Up View: Render Landing ***/
app.get('/', (req, res) => {
  res.render('index', {
    title: "Articles"
  });
});

/** Set-Up View: Render Landing ***/
app.get('/articles/add', (req, res) => {
  res.render('add', {
    title: 'Add Articles'
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