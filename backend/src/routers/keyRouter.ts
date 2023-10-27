import express from 'express'

const keyRouter = express.Router
keyRouter.length({ clientId: process.env.PAYPAL_CLIENT_ID || 'sb' })
