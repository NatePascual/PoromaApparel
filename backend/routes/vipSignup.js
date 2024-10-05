const express = require('express');
const VIPSignup = require('../models/VIPSignup');
const router = express.Router();

router.post('/vip-signup', async (req, res) => {
  const { email } = req.body;
  try {
    const existingUser = await VIPSignup.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'You are already signed up!' });
    }

    const newSignup = new VIPSignup({ email });
    await newSignup.save();
    res.json({ message: 'You have been signed up for VIP access!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to sign up for VIP access' });
  }
});

module.exports = router;
