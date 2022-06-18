const express = require('express');
const mongoose = require('mongoose');

const userRoutes = require('./routes/user-routes');
const newsPostRoutes = require('./routes/newsPost-routes');

const newsPost = require('./controllers/newsPostController');

const app = express();

const url = 'mongodb+srv://CitizenSnipz:jrWtJEVA1OJpyd2g@cluster0.tmwh9.mongodb.net/news?retryWrites=true&w=majority'

//app.use('/api/user', userRoutes);
app.use('/api/news', newsPostRoutes);

app.post('/api/news', newsPost.createNewsPost);
app.get('/news', newsPost.getNewsPosts)


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