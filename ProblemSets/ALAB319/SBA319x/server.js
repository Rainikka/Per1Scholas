
/*** Require: Express Sever ***/
const express = require("express");
const app = express();
PORT = 3000;

/*** Set-Up: Port for Listening ***/
app.listen(3000, () => {
  console.log(`Server is running on Port: André${PORT}`)

});
/*** Response: Default Page ***/
app.get('/', (req, res) => {
  res.send("Hello from Node API")

}); 