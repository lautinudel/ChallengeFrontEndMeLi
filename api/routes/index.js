const express = require('express');
const { itemController } = require('../controllers');
const router = express.Router();

router.get('/items', itemController.getItems);
router.get('/items/:id', itemController.getItemDetails);

module.exports = router;