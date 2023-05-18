const { Model, DataTypes, Sequelize } = require('sequelize');

const SUPPLIER_MOVEMENT_TABLE = 'supplier_movements';

const SupplierMovementSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  typeOfMovement: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'type_of_movement'
  },
  documentNumber: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'document_number'
  },
  supplier: {
    allowNull: false,
    type: DataTypes.STRING
  },
  concept: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  costCenter: {
     allowNull: false,
     type: DataTypes.STRING,
     field: 'cost_center'
  },
  typeOfExpenditure: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'type_of_expenditure'
  },
  typeOfPayment: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'type_of_payment'
  },
  creditDays: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'credit_days'
  },
  payday: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  },
  seriesDocument: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'series_document'
  },
  gas: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
  }
}

class SupplierMovement extends Model {
  static associate(models) {
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: SUPPLIER_MOVEMENT_TABLE,
      modelName: 'Supplier_Movement',
      timestamps: false
    }
  }
}


module.exports = { SUPPLIER_MOVEMENT_TABLE, SupplierMovementSchema, SupplierMovement }
