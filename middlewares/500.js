module.exports = (error, req, res, next) => {
  let { statusCode, msg } = error;

  if (!statusCode) statusCode = 500;

  if (!msg) msg = 'server error.';

  console.log(error, 'error');

  res.status(statusCode).json({ msg });
};
