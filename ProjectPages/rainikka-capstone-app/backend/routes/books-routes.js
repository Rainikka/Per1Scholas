const express = require('express');
const router = express.Router();
const bookssController = require('../controllers/books-controller.js');

/*** INDUCES ***/
// router.get('/', notesController.getNotes);
// router.post('/', notesController.createNote);
// router.delete('/:id', notesController.deleteNote);
// router.put('/:id', notesController.updateNote);
// router.get('/:id', notesController.getNote);
router.get('/seed', notesController.seedNotes);

module.exports = router;