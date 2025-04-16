/******************************/
/****** Rainikka Corprew ******/
/********* JAVASCRIPT *********/
/********** SBA 318 ***********/
/******************************/

/******************************/
/****** EXPRESS SERVER ********/
/******** APPLICATION *********/
/******** 16-APR-2025 *********/


/*** Knowledge Inspiration 1 :: Medium.com :: Creating a RESTful API with Node.js and Express :: from techiydude
 ***/
/*** Knowledge Inspiration 2 :: YouTube :: Learn Express JSs :: from WebDevSimplified
 ***/

/*** Set-Up: Basic Server ***/
const express = require('express');
const methodOverride = require;
const app = express();


/*** Set-Up: Middleware ***/
app.use(express.static('statics')); //static files from page folder
app.set('view engine', 'pug');  // pug template engine
app.set('views', './views'); // view static files
app.use(express.urlencoded({ extended: true }));  // access encoded form input data
app.use(methodOverride('_method')); // access encoded form input data
app.use(express.json()); // putting json capabilities in play


/*** Set-Up: Array of Dummy Task List ***/
let tasks = [
  { id: 1, task: 'Learn Node.js' },
  { id: 2, task: 'Learn Express.js' },
  { id: 3, task: 'Learn Mongo.db' },
  { id: 4, task: 'Learn React.js' },
  { id: 5, task: 'Build REST API' },
  { id: 6, task: 'Build CRUD Capstone' }
];

/*** Set-Up: Route to Render Landing Page *****/
/*** Get Route ***/
app.get('/', (req, res) => {
  res.render('index', { tasks });
});


/*** API Endpoint for Each Request Method ****/

/** Creating Tasks: Post Request **
 * Endpoint: /tasks
 * HTTP Method: POST
 * Description: Add a New Task
 * Request: ****/
app.post('/tasks', (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    task: req.body.task
  };
  tasks.push(newTask);
  res.redirect('/');
});

/** Viewing All Tasks: Get Request **
 * Endpoint: /tasks
 * HTTP Method: GET
 * Description: View All Tasks
 * Request: ****/
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

/** Updating A Tasks: Put Request **
 * Endpoint: /tasks/:id   // update task by id
 * HTTP Method: PUT
 * Description: Update A Task
 * Request: ****/
app.put('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedTask = req.body.task;
  const taskIndex = tasks.findIndex(t => t.id === id);

  if (taskIndex !== -1) {
    tasks[taskIndex].task = updatedTask;
    res.redirect('/');
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
});

/** Removing Tasks: Delete Request **
 * Endpoint: /tasks/:id
 * HTTP Method: DELETE
 * Description: Delete A Task
 * Request: ****/
app.delete('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  tasks = tasks.filter(task => task.id !== id);
  res.redirect('/');
});

/** Set-Up: Server Start ***/
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});