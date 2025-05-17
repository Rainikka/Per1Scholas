const express = require('express');
const router = express.Router();
const Admin = require('../models/admin.model');

router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await Admin.create({ email, password });
    res.json({ id: admin._id, email: admin.email });
  } catch (err) {
    res.status(err.code === 11000 ? 400 : 500)
      .json({ error: err.code === 11000 ? 'Email exists' : 'Server error' });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });
    res.json(
      admin?.password === password
        ? { id: admin._id, email: admin.email }
        : res.status(400).json({ error: 'Invalid credentials' })
    );
  } catch {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;


router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password required' });
    }

    const admin = await Admin.findOne({ email });
    if (!admin || admin.password !== password) {
      return res.status(400).json({ error: 'Invalid informaton' });
    }

    res.json({ id: admin._id, email: admin.email });

  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;