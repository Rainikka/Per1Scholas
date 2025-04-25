
/******************************/
/****** Rainikka Corprew ******/
/********* JAVASCRIPT *********/
/********** SBA 318 ***********/
/******************************/

/******************************/
/****** EXPRESS SERVER ********/
/******** APPLICATION *********/
/******** 17-APR-2025 *********/


/*********** ENVIRONMENT SET-UP  ***********/
/*******************************************/

/****** GIT & NODE INITIALIZATIONS *******
 * 
 * npm init -y
 * npm i express mongodb mongoose dotenv urlencode cors method-override
 * npm i --save-dev nodemon
 * 
 * git init  ~~ git add . ~~  git commit -m "note" ~~ git push
 
 * In package.json file, 
 * replace this key/value pair:
    * "scripts":  
       -"test": "echo\"Error: no test specified\" && exit 1"
  
  * with this key/value pair ******
    * "scripts": {
        - "start": "node server.js",
        - "devStart": "nodemon server.js"
   * },

/****** STARTING UP THE SERVER ENGINE *******   
 *  
 * node start ~~- One server run 
 * nodemon devStart ~~ automatically restarts server with everye change in code 
 * 
/*******************************************************/

/******** Set-Up: Express Server ********/
const express = require("express");
const PORT = 5050;
const app = express();

const grades = require("./routes/grades.js");
const grade_agg = require("./routes/grades_agg.mjs");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the API.");
});

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Seems like we messed up somewhere...");
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
}); const grades = require("./routes/grades.js");
const grade_agg = require("./routes/grades_agg.mjs");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the API.");
});

app.use("/grades", grades);
app.use("/grades", grades_agg);

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Seems like we messed up somewhere...");
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Seems like we messed up somewhere...");
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

/***********************************/

const express require('express');
const mongoose require('mongoose');
const dotenv require('dotenv');
dotenv.config()
comst Fruit require('./models/fruit.mjs');
const Fruits require('./routes/fruits.mjs');

const app = express()
const port = process.env.PORT || 3000

// Middleware 
app.use(express.urlencoded())
app.use(express.json())

// Mongoose Connection
mongoose.connect(process.env.ATLAS_URI)
mongoose.connection.once('open', () => {
  console.log('connected to mongoDB')
})

// Mock data
// const fruits = ["apple", "banana", "pear"]

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
// From our Fruit Routes
app.use('/fruits', Fruits)

// INDUCES

// // GET all fruits- Index
// app.get('/fruits', async (req, res)=>{
//     try{
//         const fruits = await Fruit.find()
//         res.json(fruits)
//     }catch (err) {
//         console.log(err)
//     }
//     // res.send(fruits)
// })

// // New - to be handled by our front end 

// // Delete - Delete one fruit by Id
// app.delete('/fruits/:id', async (req, res)=>{
//     try {
//         await Fruit.findByIdAndDelete(req.params.id)
//         res.redirect('/fruits')//redirect back to fruits index
//     } catch(error) {
//         console.error(error);
//       }
//     })

// // Update - Update an existing fruit by id
// app.put("/fruits/:id", async (req, res) => {
//     try {
//       if (req.body.readyToEat === "on") {
//         //if checked, req.body.readyToEat is set to 'on'
//         req.body.readyToEat = true; //do some data correction
//       } else {
//         //if not checked, req.body.readyToEat is undefined
//         req.body.readyToEat = false; //do some data correction
//       }
//       // fruits.push(req.body);
//       await Fruit.findByIdAndUpdate(req.params.id, req.body);

//       res.redirect("/fruits");
//     } catch (error) {
//       console.log(error);
//     }
//   });

// // Create - POST Create a new fruit 
// app.post('/fruits/', async (req, res) => {
//     try {
//         if (req.body.readyToEat === "on") {
//           //if checked, req.body.readyToEat is set to 'on'
//           req.body.readyToEat = true //do some data correction
//         } else {
//           //if not checked, req.body.readyToEat is undefined
//           req.body.readyToEat = false //do some data correction
//         }
//          await Fruit.create(req.body)

//         res.redirect("/fruits")

//       } catch(error) {
//         console.log(error)
//       }
// })

// // Edit - to be handled by Frunt end


// //Show - GET one fruit by its ID
// app.get('/fruits/:id', async (req, res) =>{
//     try{
//         const fruit = await Fruit.findById(req.params.id)
//         res.json(fruit)
//     } catch(err) {
//         console.log(err)
//     }
// })

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Seems like we messed up somewhere...");
});

// App.listen
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})


