
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
router.get('/:userId', (req, res) => {
  res.send(`Get User with ID ${req.params.userId} `)
})

/*** Update ToDo2TaDa User By ID ***/
router.put('/:userId', (req, res) => {
  res.send(`Update User with ID ${req.params.userId} `)
})

/*** Delete ToDo2TaDa User By ID ***/
router.delete('/:userId', (req, res) => {
  res.send(`Delete User with ID ${req.params.userId} `)
})


router.param("id", (req, res, next, id) => {
  console.log(id)
})

/*** Export User Router ***/
module.exports = router