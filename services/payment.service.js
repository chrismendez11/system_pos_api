const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');

class PaymentService {
  constructor() {}

  async create(data) {
    const newPayment = await models.Payment.create(data);
    return newPayment
  }

  async find() {
    const payments = await models.Payment.findAll();
    return payments
  }

  async findOne(id) {
    const payment = await models.Payment.findOne({
      where: id
    })
    if (!payment) {
      throw boom.notFound('Payment not found')
    }
    return payment
  }

  async update(id, changes) {
    const payment = await this.findOne(id)
    const update = await payment.update(changes)
    return update
  }

  async delete(id) {
    const payment = await this.findOne(id)
    await payment.destroy()
    return { id }
  }

}

module.exports = PaymentService;
