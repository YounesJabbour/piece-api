var express = require('express')
var router = express.Router()
const { createCommande, getCommandes } = require('../controller/commande')

router.post('/create', createCommande)
router.get('/', getCommandes)

module.exports = router
