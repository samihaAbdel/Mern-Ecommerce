import express from 'express'
import { ProductModel } from '../models/productModel'
import asyncHandler from 'express-async-handler'
import { sampleProducts } from '../data'

export const seedRouter = express.Router()

seedRouter.get(
  '/',
  asyncHandler(async (req, res) => {
    await ProductModel.deleteMany({})
    const createProducts = await ProductModel.insertMany(sampleProducts)
    res.json({ createProducts })
  })
)
