
/*** Set-Up: User Router ***/
const express = require('express')
const router = express.Router()

/*** Set-Up: General List Router ***/
router.get('/', (req, res) => {
  res.send('Get ToDo List')
})

/*** Set-Up: New ToDo List Router ***/
router.get('/new', (req, res) => {
  res.send('New ToDo Item')
})

/*** Set-Up: Create New Task Line Item Router ***/
router.post('/', (req, res) => {
  res.send('Create New ToDo List Item')
})

/*** Get Task Line Item By ID ***/
router.get('/:userId', (req, res) => {
  res.send(`Get User with ID ${req.params.userId} `)
})

/*** Update Task Line Item By ID ***/
router.put('/:userId', (req, res) => {
  res.send(`Update User with ID ${req.params.userId} `)
})



/*** Export User Router ***/
module.exports = router

