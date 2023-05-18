const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');

class SupplierService {
  constructor() {}

  async create(data) {
    const newSupplier = await models.Supplier.create(data);
    return newSupplier
  }

  async find() {
    const suppliers = await models.Supplier.findAll();
    return suppliers
  }

  async findOne(id) {
    const supplier = await models.Supplier.findOne({
      where: id
    })
    if (!supplier) {
      throw boom.notFound('Supplier not found')
    }
    return supplier
  }

  async update(id, changes) {
    const supplier = await this.findOne(id)
    const update = await supplier.update(changes)
    return update
  }

  async delete(id) {
    const supplier = await this.findOne(id)
    await supplier.destroy()
    return { id }
  }

}

module.exports = SupplierService;
