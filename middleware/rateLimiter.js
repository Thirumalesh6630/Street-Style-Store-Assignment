const rateLimit = require('express-rate-limit');

module.exports = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100,
  message: "Rate limit exceeded. Try again later."
});
