const { User, UserSchema } = require('./user.model')
const { SupplierMovement, SupplierMovementSchema } = require('./supplier_movement.model')
const { Payment, PaymentSchema } = require('./payment.model')
const { Supplier, SupplierSchema } = require('./supplier.model')

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize))
  SupplierMovement.init(SupplierMovementSchema, SupplierMovement.config(sequelize))
  Payment.init(PaymentSchema, Payment.config(sequelize))
  Supplier.init(SupplierSchema, Supplier.config(sequelize))
}

module.exports = setupModels;
