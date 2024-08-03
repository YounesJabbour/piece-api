var express = require('express')
var router = express.Router()
const {
  getAllPieces,
  createPieces,
  deletePieces,
  getAllPiecesByModel,
} = require('../controller/piece')

/* GET home page. */
router.get('/', getAllPieces)
router.get('/model/:id', getAllPiecesByModel)
router.post('/', createPieces)
router.delete('/', deletePieces)

module.exports = router
