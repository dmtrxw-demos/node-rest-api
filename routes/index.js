const express = require('express');
const router = express.Router();

const playersRoutes = require('./players');

// Resource routes
router.use('/players', playersRoutes);

module.exports = router;
