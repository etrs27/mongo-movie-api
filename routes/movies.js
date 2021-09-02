const express = require('express');
const router = express.Router();

let Movie = require('../models/Movies')

// List of Movies
router.get('/', function(req, res, next){
    Movie.getMovies(function(err, movies){
        if(err){
            res.send(err)
        }
        res.json(movies);
    },10);
});

// See single Movie
router.get('/:id', function(req, res, next){
    Movie.getMovieById([req.params.id], function(err, movie){
        if(err){
            res.send(err);
        }
        res.json(movie);
    });
});

// Add a Movie
router.post('/', function(req, res, next){
    let newMovie = new Movie({
        title: 'The Dark Knight',
        plot: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
        cover: 'https://listofdeaths.fandom.com/wiki/The_Dark_Knight?file=The_Dark_Knight_poster.jpg',
        genre: 'Action',
        actors: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
        releaseDate: new Date('07/18/2008')
    });

    newMovie.save(function(err, movie){
        if(err){
            res.send(err);
        }
        res.json(movie);
    });
});


module.exports = router;