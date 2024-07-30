const { ReasonPhrases, StatusCodes } = require('http-status-codes')
const ApplicationError = require('../utils/ApplicationError')

const MarqueService = require('../service/marque-service')

// create a new instance of MarqueService
const marqueService = new MarqueService()

const getAllMarques = async (req, res) => {
  try {
    const marques = await marqueService.getAllMarques()
    // if no marques are found, throw an error
    if (!marques)
      throw new ApplicationError(ReasonPhrases.NOT_FOUND, StatusCodes.NOT_FOUND)

    res.status(StatusCodes.OK).json(marques)
  } catch (error) {
    next(error)
  }
}

const createMarques = async (req, res) => {
  try {
    const marques = req.body
    const createdMarques = await marqueService.createMarques(marques)
    res.status(StatusCodes.CREATED).json(createdMarques)
  } catch (error) {
    next(error)
  }
}

const deleteMarques = async (req, res) => {
  try {
    await marqueService.deleteAll()
    res.status(StatusCodes.NO_CONTENT).send()
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getAllMarques,
  createMarques,
  deleteMarques,
}
