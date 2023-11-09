import React, { useState } from 'react';
import ServiceType from './ServiceCards';
import Card2 from './card2';
import CardHeader from './CardHeader';

import wfa from '../../assets/wfa.jpg';
import htr from '../../assets/htr.jpg';
import cardevp from '../../assets/cardevp.jpg';
import personaldata from '../../assets/personaldata.jpg';
import exit from '../../assets/exit.jpg';
import middle from '../../assets/middle.jpg';
import ob from '../../assets/ob.jpg';

const WhatWeDo = () => {
  const [isCardVisible, setCardVisible] = useState(false);
  const [showCards, setShowCards] = useState(false); // Add state to control card visibility
  const service1 = [
    {
      name: 'Hire-To-Retire Lifecycle',
      photo: htr,
      aim: 'Efficiently manage HR processes',
      description: 'Your service1 description here',
    },
  ];
  
  const service2 = [
    {
      name: 'Workforce Administration',
      photo: wfa,
      aim: '$30',
      description: 'Your service2 description here',
    },
  ];
  
  const service3 = [
    {
      name: 'Alt-Recruit & On-boarding',
      photo: ob,
      aim: 'Alt-Recruit & On-boarding',
      description: 'Your service3 description here',
    },
  ];
  
  const service4 = [
    {
      name: 'Exit and Offboarding',
      photo: exit,
      aim: 'Exit & Offboarding',
      description: 'Your service4 description here',
    },
  ];
  
  const service5 = [
    {
      name: 'Personal Employee Data Management',
      photo: personaldata,
      aim: 'Personal Employee Data Management',
      description: 'Your service5 description here',
    },
  ];
  
  const service6 = [
    {
      name: 'Career Development',
      photo: cardevp,
      aim: 'Career Development',
      description: 'Your service6 description here',
    },
  ];
  

  const toggleCardVisibility = () => {
    setCardVisible(!isCardVisible);
  };

  // Function to show cards on hover
  const handleMouseEnter = () => {
    setShowCards(true);
  };

  // Function to hide cards when not hovering
  const handleMouseLeave = () => {
    setShowCards(false);
  };

  return (
    <div>
      {/* Internal CSS styles */}
      <style>
        {`
          .about-us-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 20px;
            color: #1d8585;
          }
          .about-us-content {
            background-color: rgb(255, 16, 16);
            background: linear-gradient(to bottom, #e3c034, #f62217);
            border: 100px solid rgb(221, 120, 120);
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 20px;
            max-width: 1200px;
            margin-top: 8%;
            margin-left: 22%;
            margin-right: 22%;
          }
          #h1 {
            color: #6c1616;
          }
          #click {
            font-size: 5px;
          }
          #p1 {
            font-family: "Helvetica Neue";
            color: rgb(56, 53, 53);
            font-variant: initial;
            font-size: 21px;
          }
          .service-areas-header {
            color: #101112;
            padding: 20px;
            margin-top: 5%;
            margin-left: 700px;
            margin-right: 700px;
            border-radius: 10px;
            text-align: center;
            font-family: Georgia, 'Times New Roman', Times, serif;
            background-color: #ea900b;
            align-items: center;
            transition: color 0.3s ease, background-color 0.3s ease;
          }
          .service-areas-header:hover {
            color: #1f1818;
            background-color: #f2571a;
            transform: scale(1.2);
          }
          .star-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 400px;
            position: relative;
            margin-top: 5px;
            margin: 100px;
          }
          .left-cards,
          .right-cards {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }
          .service-card {
            width: 100px;
            height: 100px;
            background-color: #aebfd1;
            border-radius: 50%;
            margin: 100px;
          }
          .center-card {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            z-index: 2;
            margin: 100px;
          }
          .card {
            border: 1px solid #ed1919;
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            background: rgb(251, 215, 215);
            margin-left: 200px;
            width: 300px;
          }
          .card img {
            width: 100%;
            height: auto;
          }
          .card-content {
            padding: 15px;
          }
          .card-content h2 {
            font-size: 20px;
            color: #333;
            margin-bottom: 10px;
          }
          .card-content p {
            font-size: 14px;
            color: #666;
            margin-bottom: 10px;
            transition: max-height 0.3s ease-in;
          }
          .expanded-description {
            font-size: 16px;
            max-height: none;
            overflow: visible;
          }
          .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #007bff;
            color: #fff;
            text-decoration: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
          }
        `}
      </style>
      <div className="about-us-container">
        <div className="about-us-content">
          <h1 id='h1' style={{ fontSize: '43px' }}>SeamEx: Creating a Delightful <br />Employee Experience!!</h1>
          <p id='p1'>
            We serve as the backbone of the Aditya Birla Group, providing captive HR shared services.
            <br />We play a crucial role in supporting the ABG's global workforce and contributing to its growth and success.
          </p>
        </div>
        <br />
        <h1
          className='service-areas-header'
          style={{ fontSize: '23px', cursor: 'pointer' }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={toggleCardVisibility}
        >
          Services We Offer.. &nbsp;<i className="fas fa-hand-pointer"></i>
        </h1>
        {isCardVisible && (
          <div className={`card-container ${showCards ? 'show-cards' : ''}`}>
            <CardHeader />
          </div>
        )}
        <div className='container'>
          <div className='card-container'>
            <div className="star-container">
              <div className="left-cards">
                <div className="abc">
                  <div className="service-container">
                    {service1.map((service, index) => (
                      <ServiceType key={index} service={service} />
                    ))}
                  </div>
                </div>
                <div className="abc">
  <div className="service-container">
    {service2.map((service, index) => (
      <ServiceType key={index} service={service} />
    ))}
  </div>
</div>

                <div className="abc">
                  <div className="service-container">
                    {service3.map((service, index) => (
                      <ServiceType key={index} service={service} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="abc">
                <div className="star-container">
                  <div className="service-container">
                    <Card2
                      title="We cater these services"
                      description="This is a short description of the card."
                      fullDescription="This is the full description of the card. It provides more details about the card's content."
                      image={middle}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="star-container">
              <div className="right-cards">
                <div className="abc">
                  <div className="service-container">
                    {service4.map((service, index) => (
                      <ServiceType key={index} service={service} />
                    ))}
                  </div>
                </div>
                <div className="abc">
                  <div className="service-container">
                    {service5.map((service, index) => (
                      <ServiceType key={index} service={service} />
                    ))}
                  </div>
                </div>
                <div className="abc">
                  <div className="service-container">
                    {service6.map((service, index) => (
                      <ServiceType key={index} service={service} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
