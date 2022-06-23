const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const userRoutes = require('./routes/user-routes');
const newsPostRoutes = require('./routes/newsPost-routes');
const blogPostRoutes = require('./routes/blogPost-routes');

const newsPost = require('./controllers/newsPostController');
const blogPost = require('./controllers/blogPostController');


const app = express();

const url = 'mongodb+srv://CitizenSnipz:jrWtJEVA1OJpyd2g@cluster0.tmwh9.mongodb.net/news?retryWrites=true&w=majority'

//app.use('/api/user', userRoutes);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use('/api/news', newsPostRoutes);
app.use('/api/blog', blogPostRoutes);
app.use('/api/users', userRoutes);
app.use('/images', express.static(path.join('images')));



app.post('/news', newsPost.createNewsPost);
app.get('/news', newsPost.getNewsPosts)

app.post('/blog', blogPost.createBlogPost);
app.get('/blog', blogPost.getBlogPosts);


mongoose
    .connect(url)
    .then(() => {
        console.log('Connected to DB!')
        app.listen(3080, () => {
            console.log("App is listening on port 3080")
        });
    }).catch(err => {
        console.log(err);
    });