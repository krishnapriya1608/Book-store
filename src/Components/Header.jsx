import React from 'react'
import { Container, Navbar } from 'react-bootstrap'


function Header() {
  return (
    <div>

<Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            Book Store
          </Navbar.Brand>

          <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
         <button>Sign up</button>      </Navbar.Text>
        </Navbar.Collapse>
        </Container>

      </Navbar>

    </div>
  )
}

export default Header
