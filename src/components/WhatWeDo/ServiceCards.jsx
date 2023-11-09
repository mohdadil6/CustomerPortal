import React, { useState } from 'react';
// import './wfa.css';

const ServiceCard = ({ service }) => {
  const [showExpanded, setShowExpanded] = useState(false);

  const toggleExpanded = () => {
    if (!showExpanded) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling when expanded
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling when closed
    }
    setShowExpanded(!showExpanded);
  };

  return (
    <div className={`services-card ${showExpanded ? 'expanded' : ''}`}>
      {!showExpanded && (
        <div>
          <img src={service.photo} alt={service.name} />
          <h2>{service.name}</h2>
          <p className="aim-cost">
            <br />
            Aim: {service.aim}
          </p>
          <button onClick={toggleExpanded}>Know More</button>
        </div>
      )}
      {showExpanded && (
        <div className="service-expanded-card">
          <div className="service-expanded-content">
            <h2>{service.name}</h2>
            <p className="aim-cost">
              {service.aim}
              <br />
            </p>
            <p>{service.description}</p>
            <button onClick={toggleExpanded}>Close</button>
          </div>
        </div>
      )}
      <style>
        {`
          body {
            overflow: auto; /* Enable scrolling by default */
          }

          .services-card {
            width: 300px;
            border: 1px solid #ccc;
            padding: 10px;
            margin: 10px;
          }

          .services-card img {
            max-width: 100%;
            height: auto;
          }

          .aim-cost {
            margin-top: 10px;
          }

          .service-details {
            margin-top: 10px;
            position: relative;
          }

          .service-expanded-card {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
          }

          .service-expanded-content {
            background: #d4d4d4;
            color: #423e3e;
            max-width: 60%; /* Adjust the width as needed */
            padding: 20px;
            border-radius: 30px;
            text-align: center;
          }

          /* Styling for the close button in serviceExpandedCard */
          .service-expanded-content button {
            background-color: #007bff;
            color: #fff;
            border: none;
            cursor: pointer;
            margin-top: 10px;
          }

          .service-expanded-content button:hover {
            background-color: #0056b3;
          }

          .services-card:not(.expanded) {
            display: block;
          }
        `}
      </style>
    </div>
  );
};

export default ServiceCard;
