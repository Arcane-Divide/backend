const mongoose = require('mongoose');
const BlogPost = require('../models/blogPost');


const createBlogPost = async (req, res, next) => {
    const createdBlogPost = new BlogPost({
        title: req.body.title,
        date: req.body.date,
        img: req.body.img,
        content: req.body.content,
    });

    try {
        createdBlogPost.save();
    } catch (err) {
        const error = new HttpError(
            'Blog Post creation failed, try again',
            500
        );
        return next(error);
    }

    res.status(201).json({blogPost: createdBlogPost});
}

const getBlogPostById = async (req, res, next) => {
    const blogPostId = req.params.pid;

    try {
        const blogPost = BlogPost.findById(blogPostId);
    } catch (err) {
        const error = new HttpError(
            'Something went wrong, could not find that post', 500
        );
        return next(error);
    }
    
    if(!blogPost) {
        const error = new HttpError(
            'Could not find a post with that id', 404
        );
        return next(error);
    }

    res.json({blogPost: blogPost.toObject( {getters: true}) });
}
    

const getBlogPosts = async (req, res, next) => {
    const blogPosts = await BlogPost.find().exec();
    console.log('Get was called!', blogPosts);
    res.json(blogPosts);
}

exports.createBlogPost = createBlogPost;
exports.getBlogPosts = getBlogPosts;