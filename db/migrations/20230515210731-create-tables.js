'use strict';

const { SUPPLIER_MOVEMENT_TABLE, SupplierMovementSchema } = require('../models/supplier_movement.model')
const { PAYMENT_TABLE, PaymentSchema } = require('../models/payment.model')
const { SUPPLIER_TABLE, SupplierSchema } = require('../models/supplier.model')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(SUPPLIER_MOVEMENT_TABLE, SupplierMovementSchema)
    await queryInterface.createTable(PAYMENT_TABLE, PaymentSchema)
    await queryInterface.createTable(SUPPLIER_TABLE, SupplierSchema)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.drop(SUPPLIER_MOVEMENT_TABLE)
    await queryInterface.drop(PAYMENT_TABLE)
    await queryInterface.drop(SUPPLIER_TABLE)
  }
};
