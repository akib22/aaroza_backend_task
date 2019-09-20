const validator = require('validator');

// signup input validation
const signupInputValidation = data => {
  const err = [];
  let { username } = data;
  const { password } = data;
  if (username) username = data.username.trim();

  // username validation
  if (!username || validator.isEmpty(username)) {
    err.push('username is required.');
  } else if (!validator.isLength(username, { min: 3, max: 20 })) {
    err.push('username should be between 3 to 20 characters.');
  }

  // password validation
  if (!password || validator.isEmpty(password)) {
    err.push('password is required.');
  } else if (!validator.isLength(password, { min: 8 })) {
    err.push('password should be at least 8 characters.');
  }

  return err.length > 0 ? { err } : { username, password };
};

// login input validation
const loginInputValidation = data => {
  const err = [];
  let { username } = data;
  const { password } = data;
  if (username) username = data.username.trim();

  // username validation
  if (!username || validator.isEmpty(username)) {
    err.push('username is required.');
  }
  // password validation
  if (!password || validator.isEmpty(password)) {
    err.push('password is required.');
  }

  return err.length > 0 ? { err } : { username, password };
};

module.exports = {
  signupInputValidation,
  loginInputValidation
};
