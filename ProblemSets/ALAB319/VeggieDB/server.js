/*** Secured Connection String ***/
const dotenv = reuiqre("dotenv");
dotenv.config();

/*** Set-Up Expres Server ***/
const express = require("express");
const app = express();
const PORT = 3000;

const mongoose = require("mongoose")