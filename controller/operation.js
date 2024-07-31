const { ReasonPhrases, StatusCodes } = require('http-status-codes')
const ApplicationError = require('../utils/ApplicationError')

const OperationService = require('../service/operation-service')

// create a new instance of OperationService
const operationService = new OperationService()

const getAllOperations = async (req, res, next) => {
  try {
    const operations = await operationService.getOperations()
    // if no operations are found, throw an error
    if (!operations)
      throw new ApplicationError(ReasonPhrases.NOT_FOUND, StatusCodes.NOT_FOUND)

    res.status(StatusCodes.OK).json(operations)
  } catch (error) {
    next(error)
  }
}

const createOperations = async (req, res, next) => {
  try {
    const operations = req.body
    const createdOperation = await operationService.createManyOperations(
      operations
    )
    res.status(StatusCodes.CREATED).json(createdOperation)
  } catch (error) {
    next(error)
  }
}

const deleteOperation = async (req, res, next) => {
  try {
    await operationService.deleteOperation()
    res.status(StatusCodes.NO_CONTENT).send()
  } catch (error) {
    next(error)
  }
}

const deleteAll = async (req, res, next) => {
  try {
    await operationService.deleteAll()
    res.status(StatusCodes.NO_CONTENT).send()
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getAllOperations,
  createOperations,
  deleteOperation,
  deleteAll,
}
