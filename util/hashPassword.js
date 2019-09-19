const bcrypt = require('bcryptjs');

exports.hashPassword = data => {
  return bcrypt.hash(data, 10);
};
