import { useMutation } from '@tanstack/react-query'
import { CartItem, ShippingAdress } from '../types/Cart'
import apiClient from '../apiClient'
import { Order } from '../types/Ordre'

export const useCreateOrderMutation = () =>
  useMutation({
    mutationFn: async (order: {
      orderItems: CartItem[]
      shippingAdress: ShippingAdress
      paymentMethod: string
      itemsPrice: number
      shippingPrice: number
      taxPrice: number
      totalPrice: number
    }) =>
      (
        await apiClient.post<{ message: string; order: Order }>(
          'api/orders',
          order
        )
      ).data,
  })
