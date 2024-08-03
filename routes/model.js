const express = require('express')
const router = express.Router()

const {
  getAllModels,
  createModels,
  deleteModels,
  getModelsByMarqueId,
} = require('../controller/model')

router.get('/', getAllModels)
router.get('/marque/:id', getModelsByMarqueId)
router.post('/', createModels)
router.delete('/', deleteModels)

module.exports = router
