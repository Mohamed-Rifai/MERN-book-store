const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  cover_photo: String,
  category: String,
  price: Number
});

const BookStore = mongoose.model('BookStore', bookSchema);

module.exports = BookStore;
