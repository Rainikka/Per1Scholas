const express = require('express');
const router = express.Router();
const Veggie = require('../models/Veggie');

router.get('/', async (req, res) => {
  try {
    const veggies = await Veggie.find();
    res.json(veggies);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const foundVeggie = await Veggie.findById(req.params.id);
    res.json(foundVeggie);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
});

module.exports = router;