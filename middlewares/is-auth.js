const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.get('Authorization');
  if (!authHeader) {
    const err = new Error();
    err.msg = 'you are not authenticate';
    err.statusCode = 401;
    return next(err);
  }
  // extract token from Bearer
  const token = authHeader.split(' ')[1];
  let decodedToken;

  try {
    decodedToken = jwt.verify(token, process.env.SECRET);
  } catch (err) {
    return next(err);
  }

  if (!decodedToken) {
    const err = new Error();
    err.msg = 'you are not authenticate';
    err.statusCode = 401;
    return next(err);
  }

  req.userId = decodedToken.id;
  next();
};
