const { ReasonPhrases, StatusCodes } = require('http-status-codes')
const CommandeService = require('../service/commande-service')
const ApplicationError = require('../utils/ApplicationError')
const NotFoundError = require('../utils/NotFoundError')
// create a new instance of CommandeService
const commandeService = new CommandeService()

const createCommande = async (req, res, next) => {
  try {
    const commande = req.body
    const createdCommande = await commandeService.createCommande(commande)
    res.status(StatusCodes.CREATED).json(ReasonPhrases.CREATED)
  } catch (error) {
    next(error)
  }
}

const getCommandes = async (req, res, next) => {
  try {
    const commandes = await commandeService.getCommandes()
    if (!commandes) {
      throw new NotFoundError('Commandes not found')
    }
    res.status(StatusCodes.OK).json(commandes)
  } catch (error) {
    next(error)
  }
}
module.exports = {
  createCommande,
  getCommandes,
}
