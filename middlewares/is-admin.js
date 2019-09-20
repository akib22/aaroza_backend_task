const User = require('../models/User');

module.exports = async (req, res, next) => {
  const user = await User.findById(req.userId);

  if (!user.isAdmin) {
    const err = new Error();
    err.msg = 'you are not authenticate';
    err.statusCode = 401;
    return next(err);
  }
  next();
};
