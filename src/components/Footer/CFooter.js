import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import social media icons
import './CFooter.css';

function CFooter() {
  return (
    <div className="footer">
      <div className="footer-links">
        <a href="#privacy-policy">Privacy Policy</a>
        <a href="#terms-of-service">Terms of Service</a>
      </div>
      <div className="footer-copyright">
        &copy; 2023 SeamEx
      </div>
      <div className="footer-social">
        <a
          href="https://www.facebook.com/your-facebook-profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook style={{ fontSize: '18px', color: 'white' }} />
        </a>
        <a
          href="https://twitter.com/your-twitter-profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter style={{ fontSize: '18px', color: 'white' }} />
        </a>
        <a
          href="https://www.instagram.com/your-instagram-profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram style={{ fontSize: '18px', color: 'white' }} />
        </a>
        <a
          href="https://www.linkedin.com/in/your-linkedin-profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin style={{ fontSize: '18px', color: 'white' }} />
        </a>
      </div>
    </div>
  );
}

export default CFooter;
