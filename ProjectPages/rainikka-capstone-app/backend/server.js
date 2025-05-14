/****** Rainikka Corprew ******/
/********* MERN STACK *********/
/******** 2025-RTT-04 *********/
/******************************/

/******************************/
/******* FINAL CAPSTONE *******/
/********** PROJECT ***********/
/******** 18-MAY-2025 *********/


/********* ENVIRONMENT SET-UP ***********/
/****************************************/

/*** Secure Environment Variable ***/
const dotenv = require('dotenv');
dotenv.config();

/*** Import & Invoke Express ***/
const express = require('express');
const app = express();

/*** Import Middleware ***/
const cors = require('cors');
const urlencoded = require('urlencode');

/** Configure Middleware ***/
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));


/*** Import Router ***/
// const notesRouter = require('./routes/books-router.js');
// app.use('/books', notesRouter);

/*** Import All Models ***/
const User = require('./models/user.model');
const Aerobic = require('./models/aerobic.model');
const school = require('./models/school.model');

/*** Import All Routes ***/
const userRoute = require('./routes/user.route');
const aerobicRoute = require('./routes/aerobic.route')
const schoolRoute = require('./routes/school.route');

/*** Set Endpoint for Routes ***/
app.use('/api/users', userRoute);
app.use('/api/aerobics', aerobicRoute);
app.use('/api/schools', schoolRoute);

// const Book = require('./models/book-model.js');
// app.get('/', (req, res) => {
//   res.send('Hello from Node API Server Update')
// });

// /*** Route to Create **/
// app.get('/api/books', async (req, res) => {
//   try {
//     const book = await Book.create(req.body);
//     res.statu(201).json(book);
//     console.log(`${book} created successfully`);
//   } catch (error) {
//     res.status(500).json({
//       message: error.message
//     });
//     console.log(`${book} NOT created `);
//   }
// });

/*** Mongo Database Connection ***/
const mongoose = require('mongoose');
const mongoString = process.env.MONGO_URI;
mongoose.connect(mongoString)
  .then(() => {
    console.log(`Database is Connected: ${mongoose.connection.name} `)
  })
  .catch((error) => {
    console.log("Database NOT Connected:", error.message);
  });

/*** Set-Up: Port for Listening ***/
const PORT = process.env.PORT || 3000
app.listen(PORT, () =>
  console.log(`Server is listening on PORT: André${PORT} `));