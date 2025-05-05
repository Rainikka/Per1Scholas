const mongoose = require('mongoose');
const WeightliftSchema = new mongoose.Schema({
  exercise: {
    type: String,
    required: [true, "Enter strength exercise"]
  },
  muscle: {
    type: String,
    required: [true, "Enter muscle group of focus"]
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
