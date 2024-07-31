const express = require('express')
const router = express.Router()

const {
  getAllOperations,
  createOperations,
  deleteOperation,
} = require('../controller/operation')

router.get('/', getAllOperations)
router.post('/', createOperations)
router.delete('/', deleteOperation)

module.exports = router
