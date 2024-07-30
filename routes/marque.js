const router = require('express').Router()
const {
  getAllMarques,
  createMarques,
  deleteMarques,
} = require('../controller/marque')

router.get('/', getAllMarques)
router.post('/', createMarques)
router.delete('/', deleteMarques)

module.exports = router
