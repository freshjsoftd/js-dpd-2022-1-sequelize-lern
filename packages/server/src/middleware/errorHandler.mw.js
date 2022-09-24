const { Sequelize: { BaseError } } = require('../db/models');
const { ValidationError } = require("yup");

module.exports.validationErrorHandler = (err, req, res, next) => {
  if(err instanceof ValidationError){
    return res.status(422).send({errors: [{
      title: 'Validation Error',
      details: err.errors
    }]})
  }
  next(err)
}

module.exports.sequelizeErrorHandler = (err, req, res, next) => {
  if(err instanceof BaseError) {
    // implement method
    next(err);
  }
  next(err);
}

module.exports.errorHandler = (err, req, res, next) => {
  if(res.headerSent){
    return;
  }
  res.status(err?.status ?? 500)
  .send({errors: [{title: err?.message ?? `Internal server error`}]})
}
