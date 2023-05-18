const { Model, DataTypes, Sequelize } = require('sequelize');

const SUPPLIER_TABLE = 'suppliers';

const SupplierSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  company: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  address: {
    allowNull: false,
    type: DataTypes.STRING
  },
  phone: {
    allowNull: false,
    type: DataTypes.INTEGER(15)
  },
  nit: {
    allowNull: false,
    type: DataTypes.INTEGER(25),
    unique: true,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  interestRate: {
    allowNull: false,
    type: DataTypes.FLOAT,
    field: 'interest_rate'
  },
  creditDays: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'credit_days'
  },
  ledgerAccount: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'ledger_account'
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class Supplier extends Model {
  static associate(models) {
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: SUPPLIER_TABLE,
      modelName: 'Supplier',
      timestamps: false
    }
  }
}


module.exports = { SUPPLIER_TABLE, SupplierSchema, Supplier }
