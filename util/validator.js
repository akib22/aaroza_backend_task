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

// add actor input validation
const actorInputValidation = data => {
  const err = [];
  const dataFormat = /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;
  let { name, birthday, country } = data;

  if (name) name = name.trim();
  if (country) country = country.trim();
  if (birthday) birthday = birthday.trim();

  // name validation;
  if (!name || validator.isEmpty(name)) {
    err.push('name is required.');
  }

  // birthday validation
  if (!birthday || validator.isEmpty(birthday)) {
    err.push('birthday is required.');
  } else if (!birthday.match(dataFormat)) {
    err.push('birthday should be yyyy-mm-dd format.');
  }

  // country validation
  if (!country || validator.isEmpty(country)) {
    err.push('country is required.');
  }

  return err.length > 0 ? { err } : { name, birthday, country };
};

// add movie input validation
const movieInputValidation = data => {
  const err = [];
  let { title, year, rating, actors } = data;

  if (title) title = title.trim();
  if (year) year = year.trim();
  if (rating) rating = rating.trim();
  if (actors) actors = actors.trim();

  // title validation
  if (!title || validator.isEmpty(title)) {
    err.push('title is required.');
  }

  // year validation
  if (!year || validator.isEmpty(year)) {
    err.push('year is required.');
  } else if (!year.match(/^\d{4}/)) {
    err.push('year should be yyyy format.');
  }

  // rating validation
  if (!rating || validator.isEmpty(rating)) {
    err.push('rating is required.');
  }

  // actors validation
  if (!actors || validator.isEmpty(actors)) {
    err.push('actors is required.');
  }

  return err.length > 0 ? { err } : { title, year, rating, actors };
};
module.exports = {
  signupInputValidation,
  loginInputValidation,
  actorInputValidation,
  movieInputValidation
};
