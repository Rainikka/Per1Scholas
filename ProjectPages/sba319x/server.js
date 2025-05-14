/****** Rainikka Corprew ******/
/********* JAVASCRIPT *********/
/********** SBA 319 ***********/
/******************************/

/******************************/
/***** MONGO.DB DATABASE ******/
/******** APPLICATION *********/
/******** 04-MAY-2025 *********/

/******** Knowledge Inspiration 1 **********
 * 
 * Media Outlet :: YouTube
 * Title :: Learn MongoDB
 * Title :: Learn Mongoose
 * Creator/Author :: WebDevSimplified
 * 
******** Knowledge Inspiration 2 ************
 * 
 * Media Outlet :: FreeCodeCamp
 *  Title :: How to Build a RESTful API
 *  Creator / Author :: Nishant Kumar
 *  
 ******** Knowledge Inspiration 3 **********
 * 
 * Media Outlet :: FreeCodeCamp
 * Title :: CRUD API
 * Creator / Author :: Coding Cleverly
 *  
*******************************************/


/********** ENVIRONMENT SET-UP ***********/
/*****************************************/

/*** Require: Connection String ***/
const dotenv = require('dotenv').config();

/*** Require: Express Server ***/
const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const app = express();


/*** Middleware for JSON use ***/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*** Connect: Database to Server ***/
const mongoString = process.env.DATABASE_URI;
mongoose.connect(mongoString)
  .then(() => {
    console.log("Database is Connected")
  })
  .catch((error) => {
    console.log("Database NOT Connected:", error.message);
  });

/*** Import All Models ***/
const User = require('./models/user.model');
const Aerobic = require('./models/aerobic.model');
const Weightlift = require('./models/weightlift.model');

/*** Import All Routes ***/
const userRoute = require('./routes/user.route');
const aerobicRoute = require('./routes/aerobic.route')
const weightliftRoute = require('./routes/weightlift.route');

/*** Set Endpoint for Routes ***/
app.use('/api/users', userRoute);
app.use('/api/aerobics', aerobicRoute);
app.use('/api/weightlifts', weightliftRoute);


/*** Proper Error-Handling ***/
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something broke!' });
});


/*** Set-Up: Port for Listening ***/
app.listen(PORT, () => {
  console.log(`Server is running on Port: André${PORT}`)
});
