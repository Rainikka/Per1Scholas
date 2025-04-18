/******************************/
/****** Rainikka Corprew ******/
/********* JAVASCRIPT *********/
/******** ALAB 318.2 **********/
/******************************/

/******************************/
/***** BUILDING AN EXPRESS ****/
/******** APPLICATION *********/
/******** 18-APR-2025 *********/


/*** Set-Up: Express Server Module ***/
const express = require("express");
const app = express();
const path - require('path')
const PORT = 3000;

/*** Set-Up Views: Template Engine ***/
app.set('views', 'views')
app.set('views', pug)

/*** Set-Up: API Endpoint Routes ***/

/** Get Route: Home Page ***/
app.get('/', (req, res) => {
  res.send('Hello World')

});




/** Start Server: Port Listening Function ***/
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});