const express = require('express');
const passport = require('passport')

const PaymentService = require('./../services/payment.service');
const validatorHandler = require('./../middlewares/validator.handler');
// const { updateUserSchema, createUserSchema, getUserSchema } = require('./../schemas/user.schema');

const router = express.Router();
const service = new PaymentService();

router.get('/',
  passport.authenticate('jwt', {session: false}),
  async (req, res, next) => {
  try {
    const payments = await service.find();
    res.status(200).json(payments);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  passport.authenticate('jwt', {session: false}),
  async (req, res, next) => {
  try {
    const id = req.params
    const payment = await service.findOne(id);
    res.status(200).json(payment);
  } catch (error) {
    next(error);
  }
});

router.post('/',
  passport.authenticate('jwt', {session: false}),
  async (req, res, next) => {
  try {
    const body = req.body
    const newPayment = await service.create(body);
    res.status(201).json(newPayment);
  } catch (error) {
    next(error);
  }
});

router.patch('/:id',
  passport.authenticate('jwt', {session: false}),
  async (req, res, next) => {
  try {
    const id = req.params
    const data = req.body
    const paymentUpdated = await service.update(id, data)
    res.status(200).json(paymentUpdated);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id',
  passport.authenticate('jwt', {session: false}),
  async (req, res, next) => {
  try {
    const id = req.params
    await service.delete(id)
    res.status(200).json({ message: `Payment with id ${id} deleted successfully`});
  } catch (error) {
    next(error);
  }
});

module.exports = router;
