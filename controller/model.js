const { ReasonPhrases, StatusCodes } = require('http-status-codes')
const ApplicationError = require('../utils/ApplicationError')
const ModelService = require('../service/model-service')

// create a new instance of ModelService
const modelService = new ModelService()

const getAllModels = async (req, res, next) => {
  try {
    const models = await modelService.getAllModels()
    // if no models are found, throw an error
    if (!models)
      throw new ApplicationError(ReasonPhrases.NOT_FOUND, StatusCodes.NOT_FOUND)

    res.status(StatusCodes.OK).json(models)
  } catch (error) {
    next(error)
  }
}

const createModels = async (req, res, next) => {
  try {
    const models = req.body
    const createdModels = await modelService.createModels(models)
    res.status(StatusCodes.CREATED).json(createdModels)
  } catch (error) {
    console.log(error)
    next(error)
  }
}

const deleteModels = async (req, res) => {
  try {
    await modelService.deleteAll()
    res.status(StatusCodes.NO_CONTENT).send()
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getAllModels,
  createModels,
  deleteModels,
}
