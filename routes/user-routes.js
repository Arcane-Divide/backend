const express = require('express');
const userControllers = require('../controllers/userData-controller');


const router = express.Router();

router.get('/', userControllers.userData);
router.post('/login', userControllers.userLogin);


module.exports = router;