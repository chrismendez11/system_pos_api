'use strict';

const { USER_TABLE, UserSchema } = require('../models/user.model')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(USER_TABLE, UserSchema)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.drop(USER_TABLE)
  }
};
