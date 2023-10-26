import express, { Request, Response } from 'express'
import asyncHandler from 'express-async-handler'
import { isAuth } from '../utils'
import { OrderModel } from '../models/orderModel'
import { Product } from '../models/productModel'
export const orderRouter = express.Router()
orderRouter.post(
  '/',
  isAuth,
  asyncHandler(async (req: request, res: response) => {
    if (req.body.orderItems.length === 0) {
      res.status(400).send({ message: 'Cart is empty' })
    } else {
      const createOrder = await OrderModel.create({
        orderItems: req.body.orderItems.map((x: Product) => ({
          ...x,
          product: x._id,
        })),
        shippingAdress: req.body.shippingAdress,
        paymentMethod: req.body.paymentMethod,
        itemsPrice: req.body.itemsPrice,
        shippingPrice: req.body.shippingAdress,
        taxPrice: req.body.taxPrice,
        totalPrice: req.body.totalPrice,
        user: req.body._id,
      })
      res.status(201).json({ message: 'Order Not Found', order: createOrder })
    }
  })
)
