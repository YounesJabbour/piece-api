const ApplicationError = require('../utils/ApplicationError')
const { StatusCodes, ReasonPhrases } = require('http-status-codes')
const errorHandler = (err, req, res, next) => {
  console.error(err.stack) // Log the error stack trace

  if (err instanceof ApplicationError) {
    return res.status(err.status).json({
      success: false,
      message: err.message,
    })
  }

  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: ReasonPhrases.INTERNAL_SERVER_ERROR,
  })
}

module.exports = errorHandler
