const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Enter Name of Book"]
  },
  author: {
    type: String,
    required: [true, "Enter Full Name"]
  },
  publisher: {
    type: Number,
    required: true,
    default: 0
  },
}, {
  timestamps: true,
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;