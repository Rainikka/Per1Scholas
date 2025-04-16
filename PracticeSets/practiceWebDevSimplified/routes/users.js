
/*** Set-Up: User Router ***/
const express = require('express')
const router = express.Router()



app.get('/users', (req, res) => {
  res.send('User List')
})

/*** Set-Up: New User Route ***/
app.get('/users/new', (req, res) => {
  res.send('User New Form')
})