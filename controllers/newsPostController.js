const mongoose = require('mongoose');
const NewsPost = require('../models/newsPost');

/**
 * 
 * const url = 'mongodb+srv://CitizenSnipz:jrWtJEVA1OJpyd2g@cluster0.tmwh9.mongodb.net/news?retryWrites=true&w=majority'
mongoose.connect(url).then(() => {
    console.log('Connected to DB');
}).catch(() => {
    console.log('Connection to DB failed!');
});
 * 
 */


const createNewsPost = async (req, res, next) => {
    const createdNewsPost = new NewsPost({
        title: req.body.title,
        date: req.body.date,
        img: req.body.img,
        content: req.body.content,
    });

    try {
        createdNewsPost.save();
    } catch (err) {
        const error = new HttpError(
            'News Post creation failed, try again',
            500
        );
        return next(error);
    }

    res.status(201).json({newsPost: createdNewsPost});
}

const getNewsPostById = async (req, res, next) => {
    const newsPostId = req.params.pid;

    try {
        const newsPost = NewsPost.findById(newsPostId);
    } catch (err) {
        const error = new HttpError(
            'Something went wrong, could not find that post', 500
        );
        return next(error);
    }
    
    if(!newsPost) {
        const error = new HttpError(
            'Could not find a post with that id', 404
        );
        return next(error);
    }

    res.json({newsPost: newsPost.toObject( {getters: true}) });
}
    

const getNewsPosts = async (req, res, next) => {
    const newsPosts = await NewsPost.find().exec();
    console.log('Get was called!', newsPosts);
    res.json(newsPosts);
}

exports.createNewsPost = createNewsPost;
exports.getNewsPosts = getNewsPosts;