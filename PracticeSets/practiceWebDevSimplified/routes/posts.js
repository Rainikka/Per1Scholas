
/*** Set-Up: User Router ***/
const express = require('express')
const router = express.Router()

/*** Set-Up: General List Router ***/
router.get('/', (req, res) => {
  res.send('ToDo List')
})

/*** Set-Up: New ToDo List Router ***/
router.get('/new', (req, res) => {
  res.send('New ToDo Item')
})

/*** Set-Up: Create New Task Itemr Router ***/
router.post('/', (req, res) => {
  res.send('Create New ToDo Item')
})





/*** Export User Router ***/
module.exports = router

