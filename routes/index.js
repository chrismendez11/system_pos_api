const express = require('express');

const userRouter = require('./user.router')
const authRouter = require('./auth.router')
const supplierMovementRouter = require('./supplier_movement.router')
const paymentRouter = require('./payment.router')
const supplierRouter = require('./supplier.router')

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/users', userRouter)
  router.use('/auth', authRouter)
  router.use('/supplierMovement', supplierMovementRouter)
  router.use('/payment', paymentRouter)
  router.use('/supplier', supplierRouter)
}

module.exports = routerApi;
