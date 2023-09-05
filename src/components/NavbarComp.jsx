import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-secondary bg-opacity-50 justify-content-between">
      <Container className='d-flex'>
        <Navbar.Brand href="#home" class="text-uppercase text-decoration-none"><span className='brand-name fw-bold fs-1'>Rock<span className='ampersand'>&</span>D</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="p-2 ms-3" id="basic-navbar-nav">
           <Nav>
            <Nav.Link className="ms-2 text-uppercase fw-bold"href="#home">Home</Nav.Link>
            <Nav.Link className="ms-2 text-uppercase fw-bold"href="#link">Contact</Nav.Link>
            <NavDropdown className="ms-2 text-uppercase fw-bold"title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item className="p-2"href="#action/3.1">Rock t-shirts</NavDropdown.Item>
              <NavDropdown.Item className="p-2"href="#action/3.2">D&D t-shirts</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget/>
    </Navbar>
  );
}

export default NavBar;