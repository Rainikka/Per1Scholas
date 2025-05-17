/****** Rainikka Corprew ******/
/********* MERN STACK *********/
/******** 2025-RTT-04 *********/
/******************************/

/******************************/
/******* FINAL CAPSTONE *******/
/********** PROJECT ***********/
/******** 16-MAY-2025 *********/


/********* ENVIRONMENT SET-UP ***********/
/****************************************/

/*** Secure Environment VARIABLE ***/
const dotenv = require('dotenv');
dotenv.config();
const test = require('./config/database.js');

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

/*** Import All Routes ***/
const schoolRoutes = require('./routes/school.route');
const adminRoutes = require('./routes/admin.route')
const publicRoutes = require('./routes/public.route');

/*** Set  Routes for Endpoints ***/
app.use('/api/public', publicRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/schools', schoolRoutes);

/*** Mongo Database Connection ***/
const mongoose = require('mongoose');
const mongoString = process.env.DATA_URI;
mongoose.connect(mongoString)
  .then(() => {
    console.log(`Database is Connected: ${mongoose.connection.name} `)
  })
  .catch((error) => {
    console.log("Database NOT Connected:", error.message);
  });

/*** Routes ***/
app.get('/', (req, res) => {
  res.send('School Dashboard API');
});

/*** Set-Up: Port for Listening ***/
const PORT = process.env.PORT || 3000
app.listen(PORT, () =>
  console.log(`Server is listening on PORT: André${PORT} `));