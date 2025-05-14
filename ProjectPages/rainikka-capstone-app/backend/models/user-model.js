const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  user: {
    type: String,
    required: [true, "Enter Full Name"]
  },
  age: {
    type: Number,
    required: true,
    default: 0
  },
  height: {
    type: Number,
    required: true,
    default: 0
  },
  weight: {
    type: Number,
    required: true,
    default: 0
  },
  fitness: {
    type: String,
    required: [true, "Enter Current Fitness Level"]
  },
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);
module.exports = User;