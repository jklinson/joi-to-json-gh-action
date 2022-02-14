const joi = require('joi');

const user = joi.object({
  email: joi.string().email().required(),
  phone_number: joi.string().optional(),
  first_name: joi.string().required(),
  last_name: joi.string().required(),
  dob: joi.date().iso().optional()
});

module.exports = user;
