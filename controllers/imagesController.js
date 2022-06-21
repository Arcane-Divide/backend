const mongoose = require('mongoose');
const fileUpload = require('../middleware/file-upload');


const getImage = async (req, res, next) => {
    const image = "../images/" + req.body.name;
    console.log('image get was called!', image);
    res.json(image);
}

const postImage = async (req, res, next) => {
    console.log('image post was called!');
    fileUpload.single('image')
}

exports.getImage = getImage;
exports.postImage = postImage;