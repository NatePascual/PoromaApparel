const express = require('express');
const Offer = require('../models/Offer');
const router = express.Router();

// Get exclusive offers
router.get('/offers', async (req, res) => {
  try {
    const currentDate = new Date();
    const offers = await Offer.find({
      startDate: { $lte: currentDate },
      endDate: { $gte: currentDate },
    });
    res.json(offers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch offers' });
  }
});

module.exports = router;
