const ApplicationError = require('./ApplicationError')
const { StatusCodes, ReasonPhrases } = require('http-status-codes')
class NotFoundError extends ApplicationError {
  constructor(message) {
    super(message || ReasonPhrases.NOT_FOUND, StatusCodes.NOT_FOUND)
  }
}
module.exports = NotFoundError
