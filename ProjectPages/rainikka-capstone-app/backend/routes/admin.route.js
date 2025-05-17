const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin.model');

/************** ADMIN: ROUTES WITHOUT AUTHORIZATION *************/

/*** Simplified Admin Registration ***/
router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  // Basic validation
  if (!email || !password) {
    return res.status(400).json({ message: 'Please enter all fields' });
  }

  try {
    // Check if admin exists
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: 'Admin already exists' });
    }

    // Create new admin without password hashing
    const newAdmin = new Admin({
      email,
      password
    });

    await newAdmin.save();


    res.json({
      admin: {
        id: newAdmin._id,
        email: newAdmin.email
      }
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/*** Admin Login ***/
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Basic validation
  if (!email || !password) {
    return res.status(400).json({ message: 'Please enter all fields' });
  }

  try {
    // Check for admin
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).json({ message: 'Admin does not exist' });
    }

    if (password !== admin.password) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    res.json({
      admin: {
        id: admin._id,
        email: admin.email
      }
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;