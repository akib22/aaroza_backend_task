const express = require('express');

// local dependencies
const { postSignUp, postLogIn } = require('../controllers/authControllers');

const router = express.Router();

// POST /user/signup
router.post('/signup', postSignUp);

// POST /user/login
router.post('/login', postLogIn);

module.exports = router;
