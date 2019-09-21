const Actor = require('../models/Actor');
const Movie = require('../models/Movie');
const {
  actorInputValidation,
  movieInputValidation
} = require('../util/validator');

/**
 * @controller addActor
 * @desc save actor in the database.
 * @return
 */
exports.postAddActor = (req, res, next) => {
  const validationResult = actorInputValidation(req.body);

  if (validationResult.err) {
    const err = new Error();
    err.statusCode = 400;
    err.msg = 'validation failed.';
    err.errors = validationResult.err;
    return next(err);
  }

  const { name, birthday, country } = validationResult;
  const newActor = new Actor({
    name,
    birthday,
    country
  });

  newActor
    .save()
    .then(actor => {
      res.status(201).json({ actor, msg: 'successfully added.' });
    })
    .catch(err => next(err));
};

/**
 * @controller addMovie
 * @desc save movie in the database.
 * @return
 */
exports.postAddMovie = async (req, res, next) => {
  const validationResult = movieInputValidation(req.body);

  if (validationResult.err) {
    const err = new Error();
    err.statusCode = 400;
    err.msg = 'validation failed.';
    err.errors = validationResult.err;
    return next(err);
  }

  const { title, year, rating, actors } = validationResult;
  const actorsNames = actors.split(',');
  let actorNamesList = actorsNames.map(actorName =>
    Actor.findOne({ name: actorName.trim() })
  );
  actorNamesList = await Promise.all(actorNamesList);
  const filteredActorList = actorNamesList.filter(actor => actor !== null);

  const newMovie = new Movie({
    title,
    year,
    rating,
    actors: filteredActorList
  });

  newMovie
    .save()
    .then(movie => {
      res.status(201).json({ movie, msg: 'successfully added.' });
    })
    .catch(err => next(err));
};
