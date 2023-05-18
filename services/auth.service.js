const boom = require('@hapi/boom');
const bcrypt = require('bcrypt')

const { models } = require('./../libs/sequelize');

class AuthService {
  constructor() {}

  async findByEmail(email) {
    const rta = await models.User.findOne({
      where: { email }
    });
    return rta;
  }

}

module.exports = AuthService;
