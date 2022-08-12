import rateLimit from 'express-rate-limit';

const apiLimiter = rateLimit({
  windowMs: 1000,
  max: 3,
  message: 'Too many requests from this IP',
  standardHeaders: true,
  legacyHeaders: false,
  statusCode: 429
});

export default apiLimiter;
