/*** Knowledge Inspiration: Medium.com :: Creating a RESTful API with Node.js and Express ;; from techiydude
 ***/

/***** SETTING UP EXPRESS SERVER ON NODE.JS *****/
const express = require('express');
const app = express();

// Middleware to handle JSON requests
app.use(express.json());

// Initialize tasks array (missing in original code)
const tasks = [];

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

/***** ADDING ROUTES FOR EACH TYPE OF REQUEST *****/

/** Creating Tasks: Post Request **
 * Endpoint: /tasks
 * HTTP Method: POST
 * Description: Add a New Task
 * Request: ****/

app.post('/tasks', (req, res) => {
  const task = req.body.task;
  tasks.push({
    id: tasks.length + 1,
    task: task  // Fixed syntax (was missing colon in original)
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
  const task = req.body.task;  // Fixed missing space between const and task
  const taskIndex = tasks.findIndex((t) => t.id === id);  // Fixed ==== (extra =)

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




