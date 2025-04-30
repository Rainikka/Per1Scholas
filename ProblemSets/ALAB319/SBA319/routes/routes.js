/*** Set: Router for Endpoints ***/
const router = express.Router();
const routes = require('./routes/routes');
app.use('./api', routes);


/****** Endopoint Routes: INDUCES *********/

/*** Endpoint: Post Method ***/
router.post('/post', (req, res) => {
  res.send('Add New Post')
});

/*** Endpoint: Delete Method By ID ***/
router.delete('/delete/:id', (req, res) => {
  res.send('Delete Item By Id')
});

/*** Endpoint: Update By ID Method ***/
router.put('/update/:id', (req, res) => {
  res.send('Update Item By ID')
});

/*** Endpoint: Get All Method ***/
router.get('/getAll', (req, res) => {
  res.send('Get Collection of All Items')
});

/*** Endpoint: Get One By ID Method ***/
router.get('/getOne/:id', (req, res) => {
  res.send('Get Item By ID')
});


module.exports = router;
