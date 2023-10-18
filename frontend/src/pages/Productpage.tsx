import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import { useGetProductDetailsBySlugQuery } from '../hooks/productHooks'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import { getError } from '../utils'
import { ApiError } from '../types/ApiErrors'
import {
  Badge,
  Button,
  Card,
  CardBody,
  Col,
  ListGroup,
  Row,
} from 'react-bootstrap'
import Rating from '../components/Rating'

export default function Productpage() {
  const params = useParams()
  const { slug } = params
  const { data, isLoading, error } = useGetProductDetailsBySlugQuery(slug!)
  console.log(data, isLoading, error)

  return isLoading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{getError(error as ApiError)}</MessageBox>
  ) : !data ? (
    <MessageBox variant="warning">Product Not Found</MessageBox>
  ) : (
    <div>
      <Row>
        <Col md={6}>
          <img
            className="large"
            src={data.image}
            alt={data.name}
            style={{ height: '400px', width: '400px' }}
          ></img>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Helmet>
                <title>{data.name}</title>
              </Helmet>
              <h1>{data.name}</h1>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                rating={data.rating}
                numReviews={data.numReviews}
              ></Rating>
            </ListGroup.Item>
            <ListGroup.Item> Price: ${data.price}</ListGroup.Item>
            <ListGroup.Item>
              {' '}
              Description:
              <p>{data.description}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>${data.price}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {data.countInStock > 0 ? (
                        <Badge bg="success">In stock</Badge>
                      ) : (
                        <Badge bg="danger">Unavailable</Badge>
                      )}
                    </Col>
                  </Row>
                </ListGroup.Item>
                {data.countInStock > 0 && (
                  <ListGroup.Item>
                    <div className="d-grid">
                      <Button variant="primary">Add to Cart</Button>
                    </div>
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
