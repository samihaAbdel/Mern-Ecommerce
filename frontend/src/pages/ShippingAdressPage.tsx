import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Store } from '../Store'
import { Helmet } from 'react-helmet-async'
import CheckoutSteps from '../components/CheckoutSteps'
import { Button, Form } from 'react-bootstrap'

export default function ShippingAdressPage() {
  const navigate = useNavigate()
  const { state, dispatch } = useContext(Store)
  const {
    userInfo,
    cart: { shippingAdress },
  } = state

  useEffect(() => {
    if (!userInfo) {
      navigate('/signin?redirect=/shipping')
    }
  }, [userInfo, navigate])

  const [fullName, setFullName] = useState(shippingAdress.fullName || '')
  const [adress, setAdress] = useState(shippingAdress.adress || '')
  const [city, setCity] = useState(shippingAdress.city || '')
  const [postalCode, setPostalCode] = useState(shippingAdress.postalCode || '')
  const [country, setCountry] = useState(shippingAdress.country || '')

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault()
    dispatch({
      type: 'SAVE_SHIPPING_ADRESS',
      payload: {
        fullName,
        adress,
        city,
        postalCode,
        country,
      },
    })
    localStorage.setItem(
      'shippingAdress',
      JSON.stringify({
        fullName,
        adress,
        city,
        postalCode,
        country,
      })
    )
    navigate('/payment')
  }

  return (
    <div>
      <Helmet>
        <title> Shipping Adress</title>
      </Helmet>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <div className="countainer" small-container>
        <h1 className="my-3">Shipping Address</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="fullName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="adress">
            <Form.Label>Address</Form.Label>
            <Form.Control
              value={adress}
              onChange={(e) => setAdress(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="postalCode">
            <Form.Label>Postal Code</Form.Label>
            <Form.Control
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="country">
            <Form.Label>Country</Form.Label>
            <Form.Control
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
          </Form.Group>
          <div className="mb-3">
            <Button variant="primary" type="submit">
              Continue
            </Button>
          </div>
        </Form>
      </div>
    </div>
  )
}
