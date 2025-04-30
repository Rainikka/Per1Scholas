/*** Set: Routes for Endpoints ***/
const router = express.Router();
const routes = require('./routes/routes');
module.exports = router;
app.use('./api', routes);


/***** Endopoint Route: Post *******/

/*** Endpoint: Post Method ***/
router.post('/post', (req, res) => {
  res.send('Post API')
});

/*** Endpoint: Get All Method ***/
router.get('/getAll', (req, res) => {
  res.send('Get All API')
});

/*** Endpoint: Get By Id Method ***/
router.post('/post', (req, res) => {
  res.send('Post API')
});

/*** Endpoint: Get By Id Method ***/
router.post('/post', (req, res) => {
  res.send('Post API')
});

/*** Endpoint: Delete Method Method ***/
router.delete('/post', (req, res) => {
  res.send('Post API')
});

