import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './CNavbar.css';
import logo from '../../assets/Seamexlogo.jpg';

function CNavbar() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="apple-mobile-web-app-title" content="SeamEx - CustomerPortal" />
      <title>SeamEx - CustomerPortal</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css"
      />
        <Navbar bg="light" expand="md">
      <Navbar.Brand href="https://www.portal.poornata.com/Pages/Home.aspx" target="_blank">
        <img src={logo} alt="SeamEx logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#" className="nav-link">Home</Nav.Link>
          <Nav.Link href="#" className="nav-link">Media</Nav.Link>
          <NavDropdown title="Services" id="basic-nav-dropdown">
            <NavDropdown.Item href="#" className="nav-link">What we do?</NavDropdown.Item>
            <NavDropdown.Item href="#" className="nav-link">Why we do?</NavDropdown.Item>
            <NavDropdown.Item href="#" className="nav-link">How we do?</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#" className="nav-link">Services we offer</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#" className="nav-link">About</Nav.Link>
          <Nav.Link href="#" className="nav-link">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar></>
  );
}

export default CNavbar;
