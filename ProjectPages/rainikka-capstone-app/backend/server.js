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