
/*** Set-Up: User Router ***/
const express = require('express')
const router = express.Router()

/*** Set-Up: General User Route ***/
router.get('/', (req, res) => {
  res.send('User List')
})

/*** Set-Up: New User Route ***/
router.get('/new', (req, res) => {
  res.send('User New Form')
})

/*** Export User Router ***/
module.exports = router