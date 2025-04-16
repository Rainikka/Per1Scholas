
/*** Set-Up: User Router ***/
const express = require('express')
const router = express.Router()

/*** Set-Up: General User Router ***/
router.get('/', (req, res) => {
  res.send('User ToDo List')
})

/*** Set-Up: New User Router ***/
router.get('/new', (req, res) => {
  res.send('User New ToDo Form')
})

/*** Set-Up: Create New User Router ***/
router.post('/', (req, res) => {
  res.send('Create New ToDo User')
})

/*** Get User By ID ***/
router.get('/:userId', (req, res) => {
  res.send(`Get User with ID ${req.params.userId} `)
})

/*** Update User By ID ***/
router.put('/:userId', (req, res) => {
  res.send(`Update User with ID ${req.params.userId} `)
})

/*** Get User By ID ***/
router.get('/:userId', (req, res) => {
  res.send(`Get User with ID ${req.params.userId} `)
})

/*** Export User Router ***/
module.exports = router