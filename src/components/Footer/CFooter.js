import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import social media icons

function CFooter() {
  return (
    <Navbar bg="light" variant="light" className="footer">
      <Nav className="ml-auto">
        <Nav.Link href="#privacy-policy">Privacy Policy</Nav.Link>
        <Nav.Link href="#terms-of-service">Terms of Service</Nav.Link>
        <Nav.Link href="#copyright">© 2023 SeamEx</Nav.Link>
        <Button
          onClick={() => window.open("https://www.facebook.com/your-facebook-profile", "_blank")}
          variant="link"
        >
          <FaFacebook /> Facebook
        </Button>
        <Button
          onClick={() => window.open("https://twitter.com/your-twitter-profile", "_blank")}
          variant="link"
        >
          <FaTwitter /> Twitter
        </Button>
        <Button
          onClick={() => window.open("https://www.instagram.com/your-instagram-profile", "_blank")}
          variant="link"
        >
          <FaInstagram /> Instagram
        </Button>
        <Button
          onClick={() => window.open("https://www.linkedin.com/in/your-linkedin-profile", "_blank")}
          variant="link"
        >
          <FaLinkedin /> LinkedIn
        </Button>
      </Nav>
    </Navbar>
  );
}

export default CFooter;
