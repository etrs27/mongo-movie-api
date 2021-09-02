const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongomovies');
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'Conncetion Error: '))
db.once('open', function(){
    console.log('MongoDB Connected.');
});

let routes = require('./routes/index');
let movies = require('./routes/movies');

let app = express();

app.use(bodyParser.json());

app.use('/', routes);
app.use('/api/v1/movies', movies);

app.listen(3000, function(){
    console.log('Server running on port 3000.');
});