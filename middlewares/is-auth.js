const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.get('Authorization');
  if (!authHeader) {
    return res.status(401).json({ msg: 'you are not authenticate' });
  }
  // extract token from Bearer
  const token = authHeader.split(' ')[1];
  let decodedToken;

  try {
    decodedToken = jwt.verify(token, process.env.SECRET);
  } catch (error) {
    next(error);
  }

  if (!decodedToken) {
    return res.status(401).json({ msg: 'you are not authenticate' });
  }

  req.userId = decodedToken.id;
  next();
};
