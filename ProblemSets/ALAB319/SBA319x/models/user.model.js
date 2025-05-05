const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Enter full name"]
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
    required: [true, "Enter fitness level"]
  },
}, {
  timestamps: true
});


const User = mongoose.model('User', UserSchema);
module.exports = User;
