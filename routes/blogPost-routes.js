const express = require('express');

const blogPostController = require('../controllers/blogPostController');

const router = express.Router();

router.get('/', blogPostController.getBlogPosts);

module.exports = router;