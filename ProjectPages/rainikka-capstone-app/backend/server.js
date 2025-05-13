/****** Rainikka Corprew ******/
/********* JAVASCRIPT *********/
/******** 2025-RTT-04 *********/
/******************************/

/******************************/
/******* FINAL CAPSTONE *******/
/********** PROJECT ***********/
/******** 18-MAY-2025 *********/


/********** ENVIRONMENT SET-UP ***********/
/*****************************************/

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
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

/*** Import Notes Router ***/
// const notesRouter = require('./routes/notes-router.js');
// app.use('/notes', notesRouter);

/*** Mongo Server Connecton ***/
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI);
mongoose.connection.once('open', () => {
  console.log(`Connected to MongoDB database: ${mongoose.connection.name}`);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () =>
  console.log(`server is listening on PORT: André${PORT}`));