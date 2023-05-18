const express = require('express');
const passport = require('passport')

const UserService = require('./../services/user.service');
const validatorHandler = require('./../middlewares/validator.handler');
// const { updateUserSchema, createUserSchema, getUserSchema } = require('./../schemas/user.schema');

const router = express.Router();
const service = new UserService();

router.get('/',
  passport.authenticate('jwt', {session: false}),
  async (req, res, next) => {
  try {
    const users = await service.find();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  passport.authenticate('jwt', {session: false}),
  async (req, res, next) => {
  try {
    const id = req.params
    const users = await service.findOneUser(id);
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
});

router.post('/',
  async (req, res, next) => {
  try {
    const body = req.body
    const newUser = await service.create(body);
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
