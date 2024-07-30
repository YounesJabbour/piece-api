const express = require('express')
const router = express.Router()

const {
  getAllModels,
  createModels,
  deleteModels,
} = require('../controller/model')

router.get('/', getAllModels)
router.post('/', createModels)
router.delete('/', deleteModels)

module.exports = router
