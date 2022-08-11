import response from '../utils/response';

const validateInput = (req, res, next) => {
  const { day, month, year } = req.query;
  if (!day || !month || !year) {
    return response(res, 406, 'failed', 'Bad request. Query params day, month and year are required');
  }

  const checkVal = /^[0-9]*$/;

  const validDay = checkVal.test(day);
  const validMonth = checkVal.test(month);
  const validYear = checkVal.test(year);
  if (!validDay || !validMonth || !validYear) {
    return response(res, 406, 'failed', 'Bad request. only integers are allowed');
  }

  next();
};

export default validateInput;
