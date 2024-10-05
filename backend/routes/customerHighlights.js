const express = require('express');
const CustomerHighlight = require('../models/CustomerHighlight');
const router = express.Router();

router.get('/highlights', async (req, res) => {
  try {
    const highlights = await CustomerHighlight.find({});
    res.json(highlights);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch highlights' });
  }
});

module.exports = router;
