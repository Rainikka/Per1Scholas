
/******************************/
/****** Rainikka Corprew ******/
/********* JAVASCRIPT *********/
/******** ALAB 318.3 **********/
/******************************/

/******************************/
/******** RESTFUL API *********/
/********* EXPANSION **********/
/******** 18-APR-2025 *********/

/*** Set-Up: Express Server ***/
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

/*** Set-Up: Middleware Initialization ***/
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/*** Set-Up: JSON Body-Parsers */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/*** Importing Routes ***/
const users = require("./routes/users");
const posts = require("./routes/posts");
const error = require("./utilities/error");

/** Timestamp Middleware ***/
app.use((req, res, next) => {
  const time = new Date();

  console.log(
    `-----
${time.toLocaleTimeString()}: Received a ${req.method} request to ${req.url}.`
  );

  // Safely check for request body
  if (req.body && typeof req.body === 'object' && Object.keys(req.body).length > 0) {
    console.log("Containing the data:");
    console.log(`${JSON.stringify(req.body)}`);
  }

  next();
});

// Valid API Keys.
let apiKeys = ["perscholas", "ps-example", "hJAsknw-L198sAJD-l3kasx"];

// New middleware to check for API keys!
// Note that if the key is not verified,
// we do not call next(); this is the end.
// This is why we attached the /api/ prefix
// to our routing at the beginning!
app.use("/api", function (req, res, next) {
  var key = req.query["api-key"];

  // Check for the absence of a key.
  if (!key) next(error(400, "API Key Required"));

  // Check for key validity.
  if (apiKeys.indexOf(key) === -1) next(error(401, "Invalid API Key"));

  // Valid key! Store it in req.key for route access.
  req.key = key;
  next();
});

// Use our Routes
app.use("/api/users", users);
app.use("/api/posts", posts);

// Adding some HATEOAS links.
app.get("/", (req, res) => {
  res.json({
    links: [
      {
        href: "/api",
        rel: "api",
        type: "GET",
      },
    ],
  });
});

// Adding some HATEOAS links.
app.get("/api", (req, res) => {
  res.json({
    links: [
      {
        href: "api/users",
        rel: "users",
        type: "GET",
      },
      {
        href: "api/users",
        rel: "users",
        type: "POST",
      },
      {
        href: "api/posts",
        rel: "posts",
        type: "GET",
      },
      {
        href: "api/posts",
        rel: "posts",
        type: "POST",
      },
    ],
  });
});

// 404 Middleware
app.use((req, res, next) => {
  next(error(404, "Resource Not Found"));
});

// Error-handling middleware.
// Any call to next() that includes an
// Error() will skip regular middleware and
// only be processed by error-handling middleware.
// This changes our error handling throughout the application,
// but allows us to change the processing of ALL errors
// at once in a single location, which is important for
// scalability and maintainability.
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ error: err.message });
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}.`);
});