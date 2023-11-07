import { useContext, useEffect } from 'react'
import {
  Badge,
  Button,
  Container,
  Nav,
  NavDropdown,
  Navbar,
} from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { LinkContainer } from 'react-router-bootstrap'
import { Store } from './Store'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const {
    state: { mode, cart, userInfo },
    dispatch,
  } = useContext(Store)

  useEffect(() => {
    document.body.setAttribute('data-bs-theme', mode)
  }, [mode, userInfo])

  const switchModehandler = () => {
    dispatch({ type: 'SWITCH_MODE' })
  }
  const signoutHandler = () => {
    dispatch({ type: 'USER_SIGNOUT' })
    localStorage.removeItem('userInfo')
    localStorage.removeItem('cartItems')
    localStorage.removeItem('shippingAdress')
    localStorage.removeItem('paymentMethod')
    window.location.href = '/signin'
  }
  return (
    <div className="d-flex flex-column vh-100">
      <ToastContainer position="bottom-center" limit={1} />
      <header>
        <Navbar expand="lg">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>tsAmazona</Navbar.Brand>
            </LinkContainer>
          </Container>
          <Nav>
            <Link to="/cart" className="nav-link">
              Cart
              {cart.cartItems.length > 0 && (
                <Badge pill bg="danger">
                  {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                </Badge>
              )}
            </Link>
            {userInfo ? (
              <NavDropdown
                title={`Hello, ${userInfo.name}`}
                id="basic-nav-dropdown"
              >
                <LinkContainer to="/orderhistory">
                  <NavDropdown.Item>Order History</NavDropdown.Item>
                </LinkContainer>
                <Link
                  className="dropdown-item"
                  to="#signout"
                  onClick={signoutHandler}
                >
                  Sign Out
                </Link>
              </NavDropdown>
            ) : (
              <Link className="nav-link" to="/signin">
                Sign In
              </Link>
            )}

            <Button variant={mode} onClick={switchModehandler}>
              <i className={mode === 'light' ? 'fa fa-sun' : 'fa fa-moon'}></i>
            </Button>
          </Nav>
        </Navbar>
      </header>
      <main>
        <div>
          <Container className="mt-3 mb-3">
            <Outlet />
          </Container>
        </div>
      </main>

      <footer>
        <div className="text-center">All right reserved</div>
      </footer>
    </div>
  )
}

export default App
