/**
 * @controller get actors
 * @desc find all actors from database then return them.
 * @return [{actors}]
 */
exports.getActors = (req, res) => {
  res
    .status(200)
    .json({ name: 'Tom Hanks', birthday: '09-07-1956', country: 'UK' });
};

/**
 * @controller get movies
 * @desc find all movies from database then return them.
 * @return [{movies}]
 */
exports.getMovies = (req, res) => {
  res.status(200).json([
    {
      title: 'Forrest Gump',
      year: 1994,
      rating: 4.7,
      actors: [
        { name: 'Tom Hanks', birthday: '09-07-1956', country: 'America' }
      ]
    }
  ]);
};
