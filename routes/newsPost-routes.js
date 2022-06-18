const express = require('express');

const newsPostController = require('../controllers/newsPostController');

const router = express.Router();

router.get('/', newsPostController.getNewsPosts);

module.exports = router;