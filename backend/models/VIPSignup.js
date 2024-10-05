const mongoose = require('mongoose');

const vipSignupSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  dateSignedUp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('VIPSignup', vipSignupSchema);
