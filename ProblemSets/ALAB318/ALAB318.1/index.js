
/********************* PART 1: Node Installation *********************/
// node.js installed successfully

/********************* PART 2: Node Command Line Interface *********************/
/**** TASK 1: JavaScript code from the command line using the “eval” and “print” commands.The --eval or -e flag tells Node to evaluate the following string as a JavaScript expression.The--print or -p flag behaves similarly, but automatically prints the result if possible. ***/

/** Requested operation entered on command line with Node  eval flag as method for displaying answered response  ***
 * 
 * Requested Operation: node -e 'console.log(17 + 25)' 
 * Response Answer: 42 
 *
/** Requested operation entered on command line with Node  eval flag as method for displaying answered response  ***
 * Requested Operation: node -p '17 + 25'
 * Response Answer: 42 
 ****
 
 /**** TASK 2: Inside of the new JavaScript file, write some arbitrary code.We will use the classic “Hello World” example. Ensure that your file has some type of output using console.log! ***/
console.log('Hello World');

/********************* PART 3: Node Package Manager *********************/

/**** TASK 1: Generate default npm pakage
* Open the package.json file.
* Within “scripts” object, add a new entry under “test” called “start.” Set the value of “start” to “node index.js.” 
* 
* "scripts": {
"start": "node index.js"
},
***/

/**** TASK 2: Use the following command:
* npm i--save - dev nodemon
* Using nodemon to run your program is simple:
* nodemon index.js


/********************* PART 4: Creating A Server *********************/
/**** TASK 1: Module allows node to transfer data over the Hyper Text Transfer Protocol (HTTP) used by the internet. ***/
const http = require('http');

/**** TASK 2: Define the location and port of the server. ***/
const hostname = '127.0.0.1';
const port = 3000;

/**** TASK 3: Define the server response to method requests ***/
const server1 = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!\n');
});

/**** TASK 4: Set server to listen for communications  ***/
server1.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

/**** TASK 5: Save the file, and use nodemon to start the application.
 * Open a web browser, and navigate to 127.0.0.1: 3000(or localhost: 3000). ****/

/**** TASK 6: Explore: What happens if we change our createServer call to the following ? ***/
const server2 = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write('<h1 style="color: red">Hello World!</h1>');
  res.write('<p>I wonder what else we can send...</p>');
  res.end();
});

const express = require('express');
const app = express();
const PORT = 3000;

/********************* PART 5: Open Exploration *********************/
/**** TASK 1:  Aboutt Page Route ****/
app.get('/about', (req, res) => {
  res.send('This is the About page');
});

/**** TASK 2: Contact Page Route ***/
app.get('/contact', (req, res) => {
  res.send('This is the Contact Page.');
});