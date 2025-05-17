const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: v => v.endsWith('@admin.schools.nyc.gov'),
      message: 'Email must end with @admin.schools.nyc.gov'
    }
  },
  password: { type: String, required: true }
});

module.exports = mongoose.model('Admin', adminSchema);