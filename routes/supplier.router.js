const express = require('express');
const passport = require('passport')

const SupplierService = require('./../services/supplier.service');
const validatorHandler = require('./../middlewares/validator.handler');
// const { updateUserSchema, createUserSchema, getUserSchema } = require('./../schemas/user.schema');

const router = express.Router();
const service = new SupplierService();

router.get('/',
  passport.authenticate('jwt', {session: false}),
  async (req, res, next) => {
  try {
    const suppliers = await service.find();
    res.status(200).json(suppliers);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  passport.authenticate('jwt', {session: false}),
  async (req, res, next) => {
  try {
    const id = req.params
    const supplier = await service.findOne(id);
    res.status(200).json(supplier);
  } catch (error) {
    next(error);
  }
});

router.post('/',
  passport.authenticate('jwt', {session: false}),
  async (req, res, next) => {
  try {
    const body = req.body
    const newSupplier = await service.create(body);
    res.status(201).json(newSupplier);
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
    const supplierUpdated = await service.update(id, data)
    res.status(200).json(supplierUpdated);
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
    res.status(200).json({ message: `Supplier with id ${id} deleted successfully`});
  } catch (error) {
    next(error);
  }
});

module.exports = router;
