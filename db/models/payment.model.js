const { Model, DataTypes, Sequelize } = require('sequelize');

const PAYMENT_TABLE = 'payments';

const PaymentSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  },
  payday: {
    allowNull: false,
    type: DataTypes.DATE
  },
  documentNumber: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'document_number'
  },
  supplier: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  billNumber: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'bill_number'
  },
  series: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  amount: {
    allowNull: false,
    type: DataTypes.FLOAT
  },
  billDate: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'bill_date'
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING
  }
}

class Payment extends Model {
  static associate(models) {
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PAYMENT_TABLE,
      modelName: 'Payment',
      timestamps: false
    }
  }
}


module.exports = { PAYMENT_TABLE, PaymentSchema, Payment }
