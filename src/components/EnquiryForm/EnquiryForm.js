import React from 'react';

function EnquiryForm() {
  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const inputStyle = {
    width: '100%',
    margin: '8px 0',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #d32f2f',
    fontSize: '16px',
    color: '#333',
    boxSizing: 'border-box',
  };

  const submitButtonStyle = {
    backgroundColor: '#d32f2f',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    transition: 'background-color 0.3s',
  };

  const submitButtonHoverStyle = {
    backgroundColor: '#b71c1c',
  };

  return (<>
    <div style={formStyle}>
      <h2 style={{ textAlign: 'center', margin: '20px 0', color: '#d32f2f' }}>Get In Touch With SeamEx</h2>

      <label htmlFor="name">Your Name</label>
      <input type="text" id="name" name="name" style={inputStyle} required />

      <label htmlFor="subject">Subject</label>
      <input type="text" id="subject" name="subject" style={inputStyle} required />

      <label htmlFor="to">To</label>
      <select id="to" name="to" style={inputStyle} required>
        <option value="">Select a recipient</option>
        <option value="Preeti">Preeti</option>
        <option value="Srividya">Srividya</option>
      </select>

      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" style={inputStyle} required></textarea>

      <label htmlFor="poornataID">Poornata ID (Numbers only)</label>
      <input type="number" id="poornataID" name="poornataID" style={inputStyle} required />

      <input type="submit" value="Submit" style={submitButtonStyle} />
    </div><br/><br/></>
  );
}

export default EnquiryForm;
