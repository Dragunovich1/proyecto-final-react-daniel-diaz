import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export const CustomNavbar = () => {
  const { getTotalItems } = useCart();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand to="" as={NavLink}>Retro Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/category/Consolas" as={NavLink}>Consolas</Nav.Link>
            <Nav.Link to="/category/Accesorios" as={NavLink}>Accesorios</Nav.Link>
            <Nav.Link to="/category/Merchandising" as={NavLink}>Merchandising</Nav.Link>
            <Nav.Link to="/about" as={NavLink}>Acerca de nosotros</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link to="/cart" as={NavLink} >
              <FontAwesomeIcon icon={faShoppingCart} />
              {getTotalItems() > 0 && (
                <span className="badge bg-primary">{getTotalItems()}</span>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
