import React from 'react';

function About() {
  const inlineStyles = {
    body: {
      fontFamily: 'Oxygen, sans-serif',
      lineHeight: 1.6,
      margin: 0,
      padding: '20px',
      background: '#f7f7f7',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    header: {
      width: '100%',
      background: '#d32f2f',
      color: '#fff',
      padding: '15px',
      textAlign: 'center',
      marginBottom: '20px',
      fontFamily: 'Oxygen, sans-serif',
      letterSpacing: '1px',
    },
    card: {
      width: '45%',
      margin: '10px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      padding: '20px',
      color: '#333',
      fontFamily: 'Oxygen, sans-serif',
      backgroundColor: '#fff',
      borderLeft: '8px solid #d32f2f',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
  };

  return (
    <div style={inlineStyles.body}>
   

      <div style={inlineStyles.card}>
        <h2>Vision</h2>
        <p>
          Seamex is Aditya Birla Group's captive HR shared services, formed in
          2017 to provide a reliable and streamlined employee experience across
          all business units.
        </p>
      </div>

     
      <div style={inlineStyles.card}>
        <h2>Established in 2017</h2>
        <p>
          Seamex was created with the aim of providing a seamless experience for
          Aditya Birla Group employees worldwide, by acting as a single point of
          contact, delivering quick resolutions, and managing the entire employee
          lifecycle. As the Group's captive shared services, Seamex offers
          end-to-end services for employees across all businesses through
          technology-enabled solutions.
        </p>
      </div>

      <div style={inlineStyles.card}>
        <h2>Seamex: A trusted HR partner</h2>
        <p>
          Powered by Technology
          <br />
          Technology has become an integral part of every function of an
          organisation, be it finance, operations, marketing, or even human
          resources. Poornata, the Group's Human Resource Management Software
          (HRMS) covers the entire hire-to-retire lifecycle of employees,
          facilitating the everyday HR processes such as recruitment, hiring,
          payroll management, leave management, and mobility. It also plays a
          vital role in career development by enabling performance management,
          enhancing employee productivity, and effectively monitoring the learning
          needs of employees.
         
        </p>
      </div>
      <div style={inlineStyles.card}>
        <h2>Duis consequat sint veniam incididunt sit consectetur Lorem ad et proident amet elit sint.</h2>
        <p>
          Powered by Technology
          <br />
          In qui enim do mollit voluptate dolore quis reprehenderit ex in. Cillum sint exercitation aliqua irure excepteur eiusmod minim enim consequat minim proident. Laboris tempor duis Lorem laborum aliquip officia non anim in elit. Adipisicing duis do nostrud culpa amet enim nisi duis ad commodo minim officia velit ex. Nisi sit nisi aute ea mollit aliquip magna eiusmod irure labore magna anim amet. Qui consectetur officia ex voluptate mollit. Voluptate eu tempor commodo ullamco fugiat veniam et.
          
        </p>
      </div> <div style={inlineStyles.card}>
        <h2>Officia excepteur incididunt nisi minim esse exercitation deserunt adipisicing amet quis est consectetur.</h2>
        <p>
          Powered by Technology
          <br />
          Incididunt officia magna magna nostrud. Duis ullamco ex incididunt laboris est ad incididunt eu sit. Quis veniam qui adipisicing id nisi Lorem mollit.

        </p>
      </div>
      
    </div>
  );
}

export default About;
