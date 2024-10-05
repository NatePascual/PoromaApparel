const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: String,
  date: Date,
  description: String,
  link: String, // Facebook Live URL
});

module.exports = mongoose.model('Event', eventSchema);