const express = require('express');
const router = express.Router();

const Movie = require('../models/Movies')

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
    const movie = req.body;
    const newMovie = new Movie(movie);

    newMovie.save(function(err, movie){
        if(err){
            res.send(err);
        }
        res.json(movie);
    });
});

// Update Movie
router.put('/:id', function(req, res, next){
    const query = {_id: [req.params.id]};
    const body = req.body;
    Movie.update(query, {$set:body}, {}, function(err, movie){
        if(err){
            res.send(err);
        }
        res.json(movie);
    });
});


module.exports = router;