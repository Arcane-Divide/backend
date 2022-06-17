const express = require('express');
const userControllers = require('../controllers/userData-controller');

const router = express.Router();

router.get('/', userControllers.userData);

module.exports = router;