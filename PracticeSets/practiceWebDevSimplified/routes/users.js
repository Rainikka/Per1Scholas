
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
router.posts('/', (req, res) => {
  res.send('Create User')
})

router.get('/:id')

/*** Export User Router ***/
module.exports = router