import response from '../utils/response';

const validateInput = (req, res, next) => {
  const { dob } = req.query;
  if (!dob) {
    return response(res, 429, 'failed', 'Bad request. Query param dob is required');
  }

  const checkVal = /^[0-9]*$/;

  const validDob = checkVal.test(dob);
  if (!validDob) {
    return response(res, 429, 'failed', 'Bad request. only integers are allowed');
  }

  next();
};

export default validateInput;
