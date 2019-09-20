const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/User');
const {
  signupInputValidation,
  loginInputValidation
} = require('../util/validator');
const { hashPassword } = require('../util/hashPassword');

/**
 * @controller signup
 * @desc check provided information, if information is valid save as a users to the database.
 * @return
 */
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
    .then(() => {
      const token = jwt.sign({ username }, process.env.SECRET);
      res.status(201).json({ success: true, token });
    })
    .catch(err => next(err));
};

/**
 * @controller login
 * @desc check provided information, If all information is valid then generated a jsonwebtoken.
 * @return
 */
exports.postLogIn = (req, res, next) => {
  const validationResult = loginInputValidation(req.body);

  if (validationResult.err) {
    return res.status(400).json({
      success: false,
      msg: 'validation failed.',
      errors: validationResult.err
    });
  }

  const { username, password } = validationResult;

  User.findOne({ username })
    .then(async user => {
      if (!user) {
        return res.status(400).json({
          success: false,
          msg: 'cannot find any user with this username.'
        });
      }

      const isEqual = await bcrypt.compare(password, user.password);

      if (!isEqual) {
        return res
          .status(400)
          .json({ success: false, msg: 'incorrect password.' });
      }

      const token = jwt.sign({ username }, process.env.SECRET);

      res
        .status(200)
        .json({ success: true, token, msg: 'you are successfully logged in' });
    })
    .catch(err => next(err));
};
