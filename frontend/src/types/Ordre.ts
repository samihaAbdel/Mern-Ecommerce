import { CartItem, ShippingAdress } from './Cart'
import { User } from './User'

export type Order = {
  _id: string
  orderItems: CartItem[]
  shippingAdress: ShippingAdress
  paymentMethod: string
  user: User
  createdAt: string
  isPaid: boolean
  paidAt: string
  isDelivered: boolean
  delivredeAt: string
  itemsPrice: number
  shippingPrice: number
  taxPrice: number
  totalPrice: number
}
