import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import { Store } from './Store'
import { useContext, useEffect } from 'react'

function App() {
  const {
    state: { mode },
    dispatch,
  } = useContext(Store)

  useEffect(() => {
    document.body.setAttribute('data-bs-theme', mode)
  }, [mode])

  const switchModehandler = () => {
    dispatch({ type: 'SWITCH_MODE' })
  }
  return (
    <div className="d-flex flex-column vh-100">
      <header>
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand>tsAmazona</Navbar.Brand>
          </Container>
          <Nav>
            <a href="/cart" className="nav-link">
              Cart
            </a>
            <a href="/signin" className="nav-link">
              Sign In
            </a>
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
