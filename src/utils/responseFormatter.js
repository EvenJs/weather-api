module.exports = (res, code, messgae, data) => {
  res.status(code).json({
    status: code === 200 ? 'success' : 'error',
    messgae,
    data
  });
};