export default (res, code, status, error, data) => {
  res.status(code).json({
    status,
    error,
    data
  });
};
