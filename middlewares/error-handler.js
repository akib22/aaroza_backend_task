module.exports = (error, req, res, next) => {
  let { statusCode } = error;

  if (!statusCode) statusCode = 500;

  if (!error.msg) error.msg = 'server error.';

  console.log(error, 'error');

  res.status(statusCode).json(error);
};
