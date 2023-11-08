import React from 'react';

import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';


import './newsletterpage.css';
function Newsletterpage() {
  return (

    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)' }}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Newsletter Page</h2>
          <p>Please login to check news feed daily/weekly...!!</p>
          <MDBInput wrapperClass='mb-4' label='Name' size='lg' id='form1' type='text' />
          <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='form2' type='email' />
          <MDBInput wrapperClass='mb-4' label='Poornata Id' size='lg' id='form3' type='text' />

          <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Submit</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  )
}

export default Newsletterpage;