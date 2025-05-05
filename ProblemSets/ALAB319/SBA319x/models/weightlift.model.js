/*** Require: Mongoose ***/
const mongoose = require('mongoose');

// const WeightliftSchema = new mongoose.Schema({

/*** Weightlift Activities to Include User ID ***/
const WeightliftSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  exercise: {
    type: String,
    required: [true, "Enter Strength Exercise"]
  },
  muscle: {
    type: String,
    required: [true, "Enter Muscle Group of Focus"]
  },
  weight: {
    type: Number,
    required: true,
    default: 0
  },
  reps: {
    type: Number,
    required: false,
    default: 0
  },
}, {
  timestamps: true
});

const Weightlift = mongoose.model('Weightlift', WeightliftSchema);
module.exports = Weightlift;
