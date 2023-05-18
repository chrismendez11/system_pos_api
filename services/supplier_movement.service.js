const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');

class SupplierMovementService {
  constructor() {}

  async create(data) {
    const newSupplierMovement = await models.Supplier_Movement.create(data);
    return newSupplierMovement
  }

  async find() {
    const supplierMovements = await models.Supplier_Movement.findAll();
    return supplierMovements
  }

  async findOne(id) {
    const supplierMovement = await models.Supplier_Movement.findOne({
      where: id
    })
    if (!supplierMovement) {
      throw boom.notFound('Supplier Movement not found')
    }
    return supplierMovement
  }

  async update(id, changes) {
    const supplierMovement = await this.findOne(id)
    const update = await supplierMovement.update(changes)
    return update
  }

  async delete(id) {
    const supplierMovement = await this.findOne(id)
    await supplierMovement.destroy()
    return { id }
  }

}

module.exports = SupplierMovementService;
