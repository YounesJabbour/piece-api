const CommandeDao = require('../dao/commandeDao')

class CommandeService {
  constructor() {
    this.commandeDao = new CommandeDao()
  }

  async getCommandes() {
    return await this.commandeDao.getAll()
  }

  async createCommande(commande) {
    const { pieces, ...rest } = commande
    return await this.commandeDao.create(rest, pieces)
  }

  async findById(id) {
    return await this.commandeDao.getById(id)
  }

  async getAllCommandes() {
    return await this.commandeDao.getAll()
  }

  async updateCommande(id, commande) {
    return await this.commandeDao.update(id, commande)
  }

  async deleteCommande(id) {
    return await this.commandeDao.delete(id)
  }
}

module.exports = CommandeService
