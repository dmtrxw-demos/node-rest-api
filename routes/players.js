const express = require('express');
const router = express.Router();

const PlayerController = require('../controllers/player');

router.get('/', PlayerController.findAll);
router.get('/:id', PlayerController.findByPk);
router.post('/', PlayerController.create);
router.put('/:id', PlayerController.update);
router.delete('/:id', PlayerController.destroy);

module.exports = router;
