const express = require('express');
const fileUpload = require('../middleware/file-upload');

const imagesController = require('../controllers/imagesController');


const router = express.Router();

router.get('/', imagesController.getImage);
router.post('/', 
    fileUpload.single('image')
);

module.exports = router;