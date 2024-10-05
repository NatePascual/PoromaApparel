const mongoose = require('mongoose');

const customerHighlightSchema = new mongoose.Schema({
  customerName: String,
  feedback: String,
  imageUrl: String, // Customer's image in apparel
});

module.exports = mongoose.model('CustomerHighlight', customerHighlightSchema);
