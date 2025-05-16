const mongoose = require('mongoose'); 
const adminSchema = new mongoose.Schema({
  email: { 
    type: String, 
    required: true, 
    unique: true,
    validate: {
      validator: function(v) {
        return v.endsWith('@admin.nyc.schools.gov');
      },
      message: props => `${props.value} is not a valid admin email!`
    }
  },
  password: { type: String, required: true }
});

module.exports = mongoose.model('Admin', adminSchema);