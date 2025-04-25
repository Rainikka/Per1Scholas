/***https://www.youtube.com/watch?v=bC5KVrX-AlA ***/

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// CORS
app.use(cors());

app.options("*",)

app.listen(PORT, () => console.log(`listening on ${PORT}`))