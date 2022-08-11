import express from 'express';
import getAgeController from './src/controllers/ageController';
import apiLimiter from './src/middlewares/rate-limit';
import validateInput from './src/middlewares/validator';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).json('Welcome');
});

app.get('/howold', apiLimiter, validateInput, getAgeController);

const port = process.env.PORT || 5500;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
