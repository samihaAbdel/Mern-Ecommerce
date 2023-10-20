import express from 'express'
import { ProductModel } from '../models/productModel'
import asyncHandler from 'express-async-handler'
import { sampleProducts, sampleUsers } from '../data'
import { UserModel } from '../models/userModel'

export const seedRouter = express.Router()

seedRouter.get(
  '/',
  asyncHandler(async (req, res) => {
    await ProductModel.deleteMany({})
    const createProducts = await ProductModel.insertMany(sampleProducts)
    await UserModel.deleteMany({})
    const createUsers = await UserModel.insertMany(sampleUsers)
    // console.log(sampleUsers)
    // console.log(UserModel)
    // console.log(ProductModel)
    res.json({
      createProducts,
      createUsers,
    })
  })
)
