import React, { useState, useEffect } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi'; // Import the hamburger menu icon from react-icons

import './CNavbar.css';
import bg from '../../assets/bg.jpg';

function CNavbar() {
  const logoSource1 = '/images/Seamexlogo1.png';
  const logoSource2 = '/images/Seamexlogo.jpg';
  const logoSources = [logoSource1, logoSource2];
  const [logoIndex, setLogoIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen); // Toggle the menu state
  };

  const handleMenuItemClick = () => {
    setMenuOpen(false); // Close the menu when a menu item is clicked
  };

  const [isMobileScreen, setIsMobileScreen] = useState(window.innerWidth < 768); // Adjust the breakpoint as needed

  useEffect(() => {
    const interval = setInterval(() => {
      setLogoIndex((prevIndex) => (prevIndex + 1) % logoSources.length);
    }, 10000);

    const handleResize = () => {
      setIsMobileScreen(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="apple-mobile-web-app-title" content="SeamEx - CustomerPortal" />
      <title>SeamEx - CustomerPortal</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css"
      />
      <style>
        {`
        .navbar {
          background-image: url(${bg});
          .navbar-brand {
            background-image: url(${logoSources[logoIndex]});
            background-size: contain;
            background-repeat: no-repeat;
            width: 200px;
            height: 80px;
            transition: background-image 0.5s;
          }

          .navbar-toggler-icon {
            background-color: #fff;
          }
          /* Add zoom transition to nav links */
          .navbar-nav .nav-link {
            transition: transform 0.2s ease-in-out;
          }

          /* Apply zoom effect on hover */
          .navbar-nav .nav-link:hover {
            transform: scale(1.3);
          }
        `}
      </style>
      <Navbar bg="light" expand="md">
        <Navbar.Brand href="https://www.portal.poornata.com/Pages/Home.aspx" target="_blank"></Navbar.Brand>
        {isMobileScreen && (
          <div onClick={handleMenuClick}>
            <FiMenu size={30} color="white" /> {/* Use the hamburger icon from react-icons */}
          </div>
        )}
        <Navbar.Collapse id="basic-navbar-nav" className={menuOpen ? 'show' : ''}>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/home" className="nav-link" onClick={handleMenuItemClick}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/media" className="nav-link" onClick={handleMenuItemClick}>
              Media
            </Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown" onSelect={handleMenuItemClick}>
              <NavDropdown.Item as={Link} to="/whatwedo" className="nav-link">
                What we do?
              </NavDropdown.Item>
              <NavDropdown.Item href="#" className="nav-link">
                Why we do?
              </NavDropdown.Item>
              <NavDropdown.Item href="#" className="nav-link">
                How we do?
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/services" className="nav-link">
                Services we offer
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/about" className="nav-link" onClick={handleMenuItemClick}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link" onClick={handleMenuItemClick}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default CNavbar;
