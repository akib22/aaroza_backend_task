const express = require('express');

// local dependencies
const { postSignUp, postLogIn } = require('../controllers/authControllers');

const router = express.Router();

router.post('/signup', postSignUp);

router.post('/login', postLogIn);

module.exports = router;
