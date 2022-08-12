import AgeService from '../services/ageServices';
import response from '../utils/response';

const getAgeController = (req, res) => {
  const { dob } = req.query;
  const age = new AgeService(dob);
  const getDOB = age.getAge();
  response(res, 200, 'success', null, getDOB);
};

export default getAgeController;
