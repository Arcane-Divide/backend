const express = require('express');
const userControllers = require('../controllers/userData-controller');
const newsPostController = require('../controllers/newsPostController');

const router = express.Router();

router.get('/', userControllers.userData);
router.get('/news', newsPostController.getNewsPosts);

module.exports = router;