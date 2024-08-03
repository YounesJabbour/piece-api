const PieceDao = require('../dao/pieceDao')

class PieceService {
  constructor() {
    this.pieceDao = new PieceDao()
  }

  async getPiecesByModelId(id) {
    return await this.pieceDao.getPiecesByModelId(id)
  }

  async getAllPieces() {
    return await this.pieceDao.getAllPieces()
  }

  async createPieces(pieces) {
    return await this.pieceDao.createPieces(pieces)
  }

  async stock(reference) {
    return await this.pieceDao.stock(reference)
  }

  async isStockEnough(reference, quantity) {
    const stock = await this.stock(reference)
    return stock >= quantity
  }

  async isDisponible(reference) {
    const stock = await this.stock(reference)
    return stock > 0
  }
  async deleteAll() {
    return await this.pieceDao.deleteAllPieces()
  }
}

module.exports = PieceService
