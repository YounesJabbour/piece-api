const { ReasonPhrases, StatusCodes } = require('http-status-codes')
const ApplicationError = require('../utils/ApplicationError')
const PieceService = require('../service/Piece-service')

// create a new instance of PieceService
const pieceService = new PieceService()

const getAllPieces = async (req, res, next) => {
  try {
    const pieces = await pieceService.getAllPieces()
    if (!pieces) {
      throw new ApplicationError(ReasonPhrases.NOT_FOUND, StatusCodes.NOT_FOUND)
    }
    res.status(StatusCodes.OK).json(pieces)
  } catch (error) {
    next(error)
  }
}

const createPieces = async (req, res, next) => {
  try {
    const pieces = req.body
    const createdPieces = await pieceService.createPieces(pieces)
    res.status(StatusCodes.CREATED).json(createdPieces)
  } catch (error) {
    next(error)
  }
}

const deletePieces = async (req, res, next) => {
  try {
    await pieceService.deleteAll()
    res.status(StatusCodes.NO_CONTENT).send()
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getAllPieces,
  createPieces,
  deletePieces,
}
