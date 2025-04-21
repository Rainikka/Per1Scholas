import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
import Fruit from './fruits/models/fruit.mjs'

const app = express()
const port = process.env.PORT || 3000

// Mongoose Connection
mongoose.connect(process.env.ATLAS_URI)
mongoose.connection.once('open', () => {
  console.log('connected to mongoDB')
})

// Mock data
const fruits = ["apple", "banana", "pear"]

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Fruits API!')
})

// seed route
app.get('/fruits/seed', async (req, res) => {
  try {
    await Fruit.create([
      {
        name: 'grapefruit',
        color: 'pink',
        readyToEat: true
      },
      {
        name: 'grape',
        color: 'purple',
        readyToEat: false
      },
      {
        name: 'avocado',
        color: 'green',
        readyToEat: true
      }
    ])
    res.redirect('/fruits')
  } catch (error) {
    console.error(error)
  }
})


// GET all fruits 
app.get('/fruits', async (req, res) => {
  try {
    const fruits = await Fruit.find()
    res.json(fruits)
  } catch (err) {
    console.log(err)
  }
  // res.send(fruits)
})

// POST Create a new fruit
app.post('/fruits/', (req, res) => {
  if (req.body.readyToEat == "on") {
    req.body.readyToEat = true
  } else {
    req.body.readyToEat = false
  }
  Fruit.create(req.body, (err, createdFruit) => {
    res.send(createdFruit)
  })
})

//GET one fruit by its ID
app.get('/fruits/:id', async (req, res) => {
  try {
    const fruit = await Fruit.findById(req.params.id)
    res.json(fruit)
  } catch (err) {
    console.log(err)
  }
})

// App.listen
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})