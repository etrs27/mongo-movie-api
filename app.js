const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongomovies');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Error: '))
db.once('open', function(){
    console.log('MongoDB Connected.');
});

const routes = require('./routes/index');
const movies = require('./routes/movies');

const app = express();

app.use(bodyParser.json());

app.use('/', routes);
app.use('/api/v1/movies', movies);

app.listen(3000, function(){
    console.log('Server running on port 3000.');
});