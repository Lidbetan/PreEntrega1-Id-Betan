import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
//El Link evita que la página se renderice cada vez que se redirecciona al clickear el link.
import { Link } from 'react-router-dom';


function NavBar() {
  return (
    <Navbar expand="lg" className="navbar justify-content-between flex-row-reverse flex-md-row">
      <Container className='d-flex flex-column flex-md-row gap-2'>
        <Link to="/" className="text-uppercase text-decoration-none p-2"><span className='brand-name fw-bold fs-1'>Rock<span className='ampersand'>&</span>D</span></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="p-2 ms-3" id="basic-navbar-nav">
          <Nav>
            <Link className="navlink ms-2 text-uppercase fw-bold " to="/">Home</Link>
            <Link className="navlink ms-2 text-uppercase fw-bold" to="/contact">Contact</Link>
            <NavDropdown className="navlink ms-2 text-uppercase fw-bold" title="Products" id="basic-nav-dropdown">
              <Link className="navlink p-2" to="/men">Men</Link>
              <Link className="navlink p-2" to="/women">Women</Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget />

    </Navbar>
  );
}

export default NavBar;