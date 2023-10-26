import { CartItem, ShippingAdress } from './Cart'
import { UserInfo } from './UserInfo'

export type Order = {
  _id: string
  orderItems: CartItem[]
  shippingAdress: ShippingAdress
  paymentMethod: string
  userInfo: UserInfo
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
