
/*** Requirements & Imports for Router ***/
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin.model');

/************** ADMIN: ROUTES FOR AUTHORIZATON *************/

/*** District Admin Registration ***/
router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  /*** Form All-Fields Validation ***/
  if (!email || !password) {
    return res.status(400).json({ message: 'Please enter all fields' });
  }

  try {
    // // Check if admin exists
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: 'Admin already exists' });
    }

    /*** Create New Admin ***/
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newAdmin = new Admin({
      email,
      password: hashedPassword
    });

    await newAdmin.save();

    /*** Token Granted for New Admin CRUD Access ***/
    const token = jwt.sign({ id: newAdmin._id }, process.env.JWT_SECRET, {
      expiresIn: '1h'
    });

    res.json({
      token,
      admin: {
        id: newAdmin._id,
        email: newAdmin.email
      }
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/*** Returning Admin Login ***/
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  /*** Form All-Fields Validation ***/
  if (!email || !password) {
    return res.status(400).json({ message: 'Please enter all fields' });
  }

  try {
    // // Check for admin
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).json({ message: 'Admin does not exist' });
    }

    /*** Validaton ***/
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    /*** Token Granted for Returning Admin CRUD Access ***/
    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
      expiresIn: '1h'
    });

    res.json({
      token,
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