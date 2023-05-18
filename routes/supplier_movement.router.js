const express = require('express');
const passport = require('passport')

const SupplierMovementService = require('./../services/supplier_movement.service');
const validatorHandler = require('./../middlewares/validator.handler');
// const { updateUserSchema, createUserSchema, getUserSchema } = require('./../schemas/user.schema');

const router = express.Router();
const service = new SupplierMovementService();

router.get('/',
  passport.authenticate('jwt', {session: false}),
  async (req, res, next) => {
  try {
    const supplierMovements = await service.find();
    res.status(200).json(supplierMovements);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  passport.authenticate('jwt', {session: false}),
  async (req, res, next) => {
  try {
    const id = req.params
    const supplierMovement = await service.findOne(id);
    res.status(200).json(supplierMovement);
  } catch (error) {
    next(error);
  }
});

router.post('/',
  passport.authenticate('jwt', {session: false}),
  async (req, res, next) => {
  try {
    const body = req.body
    const newSupplierMovement = await service.create(body);
    res.status(201).json(newSupplierMovement);
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
    const supplierMovementUpdated = await service.update(id, data)
    res.status(200).json(supplierMovementUpdated);
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
    res.status(200).json({ message: `Supplier Movement with id ${id} deleted successfully`});
  } catch (error) {
    next(error);
  }
});

module.exports = router;
