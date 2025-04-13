import mongoose from 'mongoose';

const schema = mongoose.Schema;
export const ContactSchema = new Schema({
  firstName: {
    type: String,
    required: 'Enter a first name'
  },
  lasttName: {
    type: String,
    required: 'Enter a last name'
  },
  email: {
    type: String,
    required: 'Enter email'
  },
  phone: {
    type: number,
  },
  dateCreated: {
    type: Date,
    default: Date.now
  }
})