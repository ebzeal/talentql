import rateLimit from 'express-rate-limit';

const apiLimiter = rateLimit({
  windowMs: 1 * 1 * 1000,
  max: 3,
  message: 'Too many requests from this IP',
  standardHeaders: true,
  legacyHeaders: false,
});

export default apiLimiter;
