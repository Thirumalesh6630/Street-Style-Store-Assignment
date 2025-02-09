const express = require('express');
const db = require('../db');
const router = express.Router();

router.get('/items', async (req, res) => {
  try {
    const items = await db('items').select('*');
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
});

module.exports = router;
