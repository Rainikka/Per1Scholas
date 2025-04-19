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

/*** Middleware: Parse Form Data ***/
app.use(express.urlencoded({ extended: true }));

/*** Set-Up Views: Template Engine ***/
app.set('view engine', 'pug');
app.set('views', './views');

/*** Sample Data: In-Memory Storage ***/
let articles = [
  { id: 1, title: "Article One", author: "Rain Corp", body: "This is article one" },
  { id: 2, title: "Article Two", author: "Rain Corp", body: "This is article two" },
  { id: 3, title: "Article Three", author: "Rain Corp", body: "This is article three" }
];

/*** Set-Up: API Endpoint Routes ***/

/** Route: Homepage (Render Articles) ***/
app.get('/', (req, res) => {
  res.render('index', {
    title: "Articles",
    articles: articles  // Fixed: Now passes `articles` to the template
  });
});

/** GET Route: Add Article ***/
app.get('/articles/add', (req, res) => {
  res.render('add_article', {
    title: 'Add Article'
  });
});

/** POST Route: Handle Form Submission (POST) ***/
app.post('/articles/add', (req, res) => {
  const { title, author, body } = req.body;
  const newArticle = { id: articles.length + 1, title, author, body };
  articles.push(newArticle);
  res.redirect('/');
});

/** Route: About Page ***/
app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About'
  });
});

/** Start Server: Port Listening Function ***/
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
