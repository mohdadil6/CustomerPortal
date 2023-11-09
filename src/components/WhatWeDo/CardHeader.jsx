import React from 'react';

const CardHeader = (props) => {
  return (
    <div className="card-container">
      <style>
        {`
          /* Service Card Styles */
          .card-container {
              display: flex;
              justify-content: space-around;
              align-items: center;
              gap: 10px;
          }

          .service-card {
              display: flex;
              justify-content: space-around;
              align-items: center;
              padding: 60px;
              background: rgb(241, 235, 223);
              color: rgb(11, 13, 14);
              text-decoration: dotted;
              border-width: 6px;
              border-style: solid groove double;
              border-color: red green blue yellow;
              border-radius: 25px;
              text-align: start;
              transition: transform 0.2s;
              width: auto;
              white-space: nowrap;
              overflow: hidden;
          }

          .service-card:hover {
              transform: scale(1.5);
              transition-property: unset;
              transition-timing-function: ease-in-out;
              background: rgb(192, 197, 249);
          }

          .service-card h2 {
              font-size: 1.2rem;
              margin: 0;
          }

          .service-card p {
              font-size: 1rem;
          }
        `}
      </style>
      <div className="service-card">
        <div className="service-content">
          <h2>Captive HR Service</h2>
        </div>
      </div>

      <div className="service-card">
        <div className="service-content">
          <h2>Hire to Retire Cycle</h2>
        </div>
      </div>

      <div className="service-card">
        <div className="service-content">
          <h2>Career Development</h2>
        </div>
      </div>

      <div className="service-card">
        <div className="service-content">
          <h2>Technology-centric</h2>
        </div>
      </div>
    </div>
  );
};

export default CardHeader;














// import React, { useState } from 'react';
// import './CardHeader.css'; // Import your CSS file

// const CardHeader = (props) => {
//   const [expanded, setExpanded] = useState(false);

//   const serviceData = [
//     { title: 'Captive HR Service', description: 'Description for Captive HR Service' },
//     { title: 'Hire to Retire Cycle', description: 'Description for Hire to Retire Cycle' },
//     { title: 'Career Development', description: 'Description for Career Development' },
//     { title: 'Technology-centric', description: 'Description for Technology-centric' },
//   ];

//   const handleMouseEnter = () => {
//     setExpanded(true);
//   };

//   const handleMouseLeave = () => {
//     setExpanded(false);
//   };

//   return (
//     <div className="card-container">
//       {serviceData.map((service, index) => (
//         <div
//           className={`service-card ${expanded ? 'expanded' : ''}`}
//           key={index}
//         >
//           <div className="service-content">
//             <h2>{service.title}</h2>
//             <p>{service.description}</p>
//           </div>
//         </div>
//       ))}
//       {expanded && (
//         <div className="additional-services">
//           {serviceData.slice(1, 4).map((service, index) => (
//             <div className="service-card" key={index}>
//               <div className="service-content">
//                 <h2>{service.title}</h2>
//                 <p>{service.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CardHeader;



