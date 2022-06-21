const express = require('express');
const fileUpload = require('../middleware/file-upload');

const newsPostController = require('../controllers/newsPostController');

const router = express.Router();

router.get('/', newsPostController.getNewsPosts);
router.post('/', fileUpload.single('image'), newsPostController.createNewsPost);

module.exports = router;