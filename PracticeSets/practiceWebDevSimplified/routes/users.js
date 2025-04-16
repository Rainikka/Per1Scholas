
/*** Set-Up: ToDo2TaDa User Router ***/
const express = require('express')
const router = express.Router()

/*** Set-Up: General ToDo2TaDa User Router ***/
router.get('/', (req, res) => {
  res.send('Get ToDo User')
})

/*** Set-Up: New ToDo2TaDa User Router ***/
router.get('/new', (req, res) => {
  res.send('User New ToDo Form')
})

/*** Set-Up: Create New ToDo2TaDa User Router ***/
router.post('/', (req, res) => {
  res.send('Create New ToDo User')
})

/*** Get ToDo2TaDa User By ID ***/
router.get('/:id', (req, res) => {
  res.send(`Get User with ID ${req.params.id} `)
})

/*** Update ToDo2TaDa User By ID ***/
router.put('/:id', (req, res) => {
  res.send(`Update User with ID ${req.params.id} `)
})

/*** Delete ToDo2TaDa User By ID ***/
router.delete('/:id', (req, res) => {
  res.send(`Delete User with ID ${req.params.Id} `)
})



/*** Added User Array of Objects ***/
const users = [];

/*** Param Middleware Function Runs Code Before Method ***/
router.param("id", (req, res, next, id) => {

  req.user = users[id]
  next()
})

/*** Export User Router ***/
module.exports = router