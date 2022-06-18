const mongoose = require('mongoose');

const newsPostSchema = new mongoose.Schema({
    title: { type: String, required: true },
    date: { type: String, required: true },
    img: { type: String, required: false },
    content: { type: String, required: true },
})

module.exports = mongoose.model('NewsPost', newsPostSchema);