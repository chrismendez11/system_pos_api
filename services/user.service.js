const boom = require('@hapi/boom');
const bcrypt = require('bcrypt')

const { models } = require('./../libs/sequelize');

class UserService {
  constructor() {}

  async create(data) {
    const hash = await bcrypt.hash(data.password, 10)
    const newUser = await models.User.create({
      ...data,
      password: hash
    });
    delete newUser.dataValues.password
    return newUser
  }

  async find() {
    const rta = await models.User.findAll();
    return rta;
  }

  async findOneUser(id) {
    const rta = await models.User.findOne(id);
    return rta;
  }

}

module.exports = UserService;
