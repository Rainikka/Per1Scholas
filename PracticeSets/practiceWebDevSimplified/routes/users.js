
/*** Set-Up: User Router ***/
const express = require('express')
const router = express.Router()

/*** Set-Up: General User Router ***/
router.get('/', (req, res) => {
  res.send('User List')
})

/*** Set-Up: New User Router ***/
router.get('/new', (req, res) => {
  res.send('User New Form')
})

/*** Set-Up: Create New User Router ***/
router.post('/', (req, res) => {
  res.send('Create New User')
})

/*** Get User By ID ***/
router.get('/:userId', (req, res) => {
  res.send(`Get User with ID ${req.params.userId} `)
})

/*** Export User Router ***/
module.exports = router