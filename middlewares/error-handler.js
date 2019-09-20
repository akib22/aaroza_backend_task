module.exports = (error, req, res, next) => {
  const { statusCode, msg } = error;

  if (!statusCode) error.statusCode = 500;

  if (!msg) error.msg = 'server error.';

  console.log(error, 'error');

  res.status(statusCode).json(error);
};
