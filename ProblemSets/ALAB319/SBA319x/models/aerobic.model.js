const mongoose = require('mongoose');
const AerobicSchema = new mongoose.Schema({
  cardio: {
    type: String,
    required: [true, "Enter aerobic exercise"]
  },
  time: {
    type: Number,
    required: true,
    default: 0
  },
  intensity: {
    type: Number,
    required: [true, "Rate Intensity: 0 - Low  & 10 - High"]
    default: 0
  },
  distance: {
    type: Number,
    required: false,
    default: 0
  },
}, {
  timestamps: true
});

const Aerobic = mongoose.model('Aerobic', AerobicSchema);
module.exports = Aerobic;
