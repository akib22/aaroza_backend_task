const express = require('express');

const {
  postAddActor,
  postAddMovie
} = require('../controllers/adminControllers');
const isAuth = require('../middlewares/is-auth');
const isAdmin = require('../middlewares/is-admin');

const router = express.Router();

// POST /api/admin/add_actor
router.post('/add_actor', isAuth, isAdmin, postAddActor);

// POST /api/admin/add_movie
router.post('/add_movie', isAuth, isAdmin, postAddMovie);

module.exports = router;
