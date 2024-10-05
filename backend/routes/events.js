const express = require('express');
const Event = require('../models/Event');
const router = express.Router();

router.get('/events', async (req, res) => {
  try {
    const events = await Event.find({});
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch events' });
  }
});

module.exports = router;
