const mongoose = require('mongoose');

// Movies Schema
let MovieSchema = mongoose.Schema({
    title: {
        type: String
    },
    plot: {
        type: String
    },
    cover: {
        type: String
    },
    genre: {
        type: String
    },
    actors: {
        type: Array
    },
    releaseDate: {
        Date
    }
});

let Movie = module.exports = mongoose.model('Movie', MovieSchema)

module.exports.getMovies = function(callback, limit){
    Movie.find(callback).limit(limit);
}

module.exports.getMovieById = function(id, callback){
    Movie.findById(id, callback);
}