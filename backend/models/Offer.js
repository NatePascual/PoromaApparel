const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  startDate: Date,
  endDate: Date,
  imageUrl: String, // Path to product image
  available: { type: Boolean, default: false },
});

module.exports = mongoose.model('Offer', offerSchema);
