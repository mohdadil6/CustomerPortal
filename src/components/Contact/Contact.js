import React from 'react';
import EnquiryForm from '../EnquiryForm/EnquiryForm';


function ContactUs() {
  return (
    <>
      <h2>Contact Us</h2>
      <EnquiryForm />
      <div className="Address" style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
        <div className="Address2" style={{ backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', flex: 1, margin: '10px' }}>
          <h3 style={{ color: '#d32f2f', fontSize: '18px' }}>Contact Information</h3>
          <p style={{ fontSize: '14px' }}>
            <h4 >SeamEx</h4>
            <br />
            1401, 14th Floor, Empire Tower, Cloud City Campus, Thane - Belapur Rd, M I, D C
            <br />
            Navi Mumbai, Maharashtra 400708
            <br />
            Phone: +91 12345 67890
            <br />
            Email: info@seamex.com
          </p>
        </div>
        <div style={{ backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', flex: 1, margin: '10px' }}>
          <h3 style={{ color: '#d32f2f', fontSize: '18px' }}>Social Links</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>
              <a href="#" style={{ textDecoration: 'none', color: '#007bff', fontSize: '14px' }}>LinkedIn</a>
            </li>
            <li>
              <a href="#" style={{ textDecoration: 'none', color: '#007bff', fontSize: '14px' }}>Instagram</a>
            </li>
            <li>
              <a href="https://www.portal.poornata.com/Pages/Home.aspx" rel="noopener noreferrer" target="_blank" style={{ textDecoration: 'none', color: '#007bff', fontSize: '14px' }}>
                Poornata
              </a>
            </li>
          </ul>
        </div>
      </div>
     
    </>
  );
}

export default ContactUs;
