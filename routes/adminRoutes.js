const express = require('express');

const {
  postAddActor,
  postAddMovie
} = require('../controllers/adminControllers');

const router = express.Router();

// POST /api/admin/add_actor
router.post('/add_actor', postAddActor);

// POST /api/admin/add_movie
router.post('/add_movie', postAddMovie);

module.exports = router;
