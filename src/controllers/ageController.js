import AgeService from '../services/ageServices';
import response from '../utils/response';

const getAgeController = (req, res) => {
  const { day, month, year } = req.query;
  const age = new AgeService(day, month, year);
  const getDOB = age.getAge();
  response(res, 200, 'success', null, getDOB);
};

export default getAgeController;
