var express = require('express')
var router = express.Router()
const {
  getAllPieces,
  createPieces,
  deletePieces,
} = require('../controller/piece')

/* GET home page. */
router.get('/', getAllPieces)
router.post('/', createPieces)
router.delete('/', deletePieces)

module.exports = router
