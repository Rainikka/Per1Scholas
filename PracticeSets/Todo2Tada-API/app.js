/*** Knowledge Inspiration: Medium.com :: Creating a RESTful API with Node.js and Express:: from techiydude
 ***/

/***** SETTING UP EXPRESS SERVER WITH NODE.JS *****/
const express = require('express');
const app = express();

/*** Static files from page folder ***/
app.use(express.static('statics'));

/*** HTML from  Pug Template Engine  ***/
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('index');
});

/*** Adding Middleware ***/
app.use(express.json());
let tasks = [];

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

/***** ADDING ROUTES FOR EACH REQUEST VERB *****/

/** Creating Tasks: Post Request **
 * Endpoint: /tasks
 * HTTP Method: POST
 * Description: Add a New Task
 * Request: ****/

app.post('/tasks', (req, res) => {
  const task = req.body.task;
  tasks.push({
    id: tasks.length + 1,
    task: task
  });
  res.status(201).json({
    message: 'Task created successfully',
    tasks
  });
});

/** Viewing All Tasks: Get Request **
 * Endpoint: /tasks
 * HTTP Method: GET
 * Description: View All Tasks
 * Request: ****/

app.get('/tasks', (req, res) => {
  res.status(200).json(tasks);
});

/** Updating A Tasks: Put Request **
 * Endpoint: /tasks/:id   // update task by id
 * HTTP Method: PUT
 * Description: Update A Task
 * Request: ****/

app.put('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const task = req.body.task;
  const taskIndex = tasks.findIndex((t) => t.id === id);

  if (taskIndex !== -1) {
    tasks[taskIndex].task = task;
    res.status(200).json({ message: 'Task updated successfully', tasks });
  } else {
    res.status(404).json({
      message: 'Task not found'
    });
  }
});

/** Removing Tasks: Delete Request **
 * Endpoint: /tasks/:id
 * HTTP Method: DELETE
 * Description: Delete A Task
 * Request: ****/

app.delete('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  tasks = tasks.filter((task) => task.id !== id);
  res.status(200).json({ message: 'Task deleted successfully', tasks });
});




