import { Product } from './types/Product'

export const sampleProducts: Product[] = [
  {
    name: 'Nike Slim Shirt',
    slug: 'nike-slim-shirt',
    category: 'Shirts',
    image: '../images/p1.jpeg',
    price: 120,
    countInStock: 10,
    brand: 'Nike',
    rating: 4.5,
    numReviews: 10,
    description: 'high quality shirt',
  },
  {
    name: 'Adidas Fit Shirt',
    slug: 'adidas-fit-shirt',
    category: 'Shirts',
    image: '../images/p2.jpeg',
    price: 100,
    countInStock: 20,
    brand: 'Adidas',
    rating: 4.0,
    numReviews: 10,
    description: 'high quality product',
  },
  {
    name: 'Lacoste Free Pants',
    slug: 'lacoste-free-pants',
    category: 'Pants',
    image: '../images/p3.jpeg',
    price: 220,
    countInStock: 0,
    brand: 'Lacoste',
    rating: 4.8,
    numReviews: 17,
    description: 'high quality product',
  },
  {
    name: 'Nike Slim Pant',
    slug: 'lacoste-free-pant',
    category: 'Pants',
    image: '../images/p4.jpeg',
    price: 78,
    countInStock: 15,
    brand: 'Nike',
    rating: 4.5,
    numReviews: 14,
    description: 'high quality product',
  },
]
