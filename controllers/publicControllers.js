const Actor = require('../models/Actor');
const Movie = require('../models/Movie');

/**
 * @controller get actors
 * @desc find all actors from database then return them.
 * @return [{actors}]
 */
exports.getActors = (req, res, next) => {
  Actor.find()
    .then(actors => {
      res.status(200).json(actors);
    })
    .catch(err => next(err));
};

/**
 * @controller get movies
 * @desc find all movies from database then return them.
 * @return [{movies}]
 */
exports.getMovies = (req, res, next) => {
  Movie.find()
    .populate('actors')
    .exec((err, movies) => {
      if (err) return next(err);
      res.status(200).json({ movies });
    });
};
