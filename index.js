const express = require('express');

const userRoutes = require('./routes/user-routes');

const app = express();

app.use('/api/user', userRoutes);

app.listen(3080);