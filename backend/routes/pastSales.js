const express = require('express');
const PastSale = require('../models/PastSale');
const router = express.Router();

router.get('/past-sales', async (req, res) => {
  try {
    const pastSales = await PastSale.find({});
    res.json(pastSales);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch past sales' });
  }
});

module.exports = router;
