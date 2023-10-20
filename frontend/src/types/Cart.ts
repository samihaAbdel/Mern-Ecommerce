export type CartItem = {
  image: string | undefined
  slug: string
  quantity: number
  countInStock: number
  price: number
  _id: string
  name: string
}

export type ShippingAdress = {
  fullName: string
  adress: string
  city: string
  country: string
  postalCode: string
}

export type Cart = {
  cartItems: CartItem[]
  shippingAdress: ShippingAdress
  paymentMethod: string
  itemPrice: number
  shippinggPrice: number
  taxPrice: number
  totalPrice: number
}
