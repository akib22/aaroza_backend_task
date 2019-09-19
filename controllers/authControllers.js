const User = require('../models/User');

const {
  signupInputValidation,
  loginInputValidation
} = require('../util/validator');

const { hashPassword } = require('../util/hashPassword');

// signup controller
exports.postSignUp = async (req, res, next) => {
  const validationResult = signupInputValidation(req.body);

  if (validationResult.err) {
    return res.status(400).json({
      success: false,
      msg: 'validation failed.',
      errors: validationResult.err
    });
  }

  validationResult.password = await hashPassword(validationResult.password);

  const { username, password } = validationResult;
  const newUser = new User({
    username,
    password
  });

  newUser
    .save()
    .then(user => res.status(201).json({ user, token: 'fafdkfld' }))
    .catch(err => next(err));
};

exports.postLogIn = (req, res) => {
  const validationResult = loginInputValidation(req.body);
  res.status(201).json({ token: 'fafdkfldlogin' });
};
