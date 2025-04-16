
/*** Set-Up: User Router ***/
const express = require('express')
const router = express.Router()

/*** Set-Up: General Task Router ***/
router.get('/', (req, res) => {
  res.send('Task List')
})

/*** Set-Up: New Task Router ***/
router.get('/new', (req, res) => {
  res.send('New Task Item')
})

/*** Export User Router ***/
module.exports = router