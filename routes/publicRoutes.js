const express = require('express');
const { getActors, getMovies } = require('../controllers/publicControllers');
const isAuth = require('../middlewares/is-auth');

const router = express.Router();

// GET /api/actors
router.get('/actors', getActors);

// GET /api/movies
router.get('/movies', isAuth, getMovies);

module.exports = router;
