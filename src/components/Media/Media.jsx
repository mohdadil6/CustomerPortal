import React, { useState } from 'react';
import india from '../../assets/ind.jpg';
import ganpati from '../../assets/ganpati.jpg';
import diwali from '../../assets/diwali.jpg';
import quality from '../../assets/quality.jpg';

const Media = () => {
  const events = [
    {
      title: 'Ganesh Chaturthi',
      date: 'September 10, 2023',
      location: 'Airoli',
      description: 'Celebration of God Ganesha!',
      imageUrl: ganpati,
    },
    {
      title: 'Independence Day',
      date: 'August 15, 2023',
      location: 'Airoli',
      description: 'Followed the tri-color theme throughout the Seamex office.',
      imageUrl: india,
    },
    {
      title: 'Diwali Celebration',
      date: 'November 10, 2023',
      location: 'Airoli',
      description: 'Flaunt yourself in your traditional way',
      imageUrl: diwali,
    },
    {
      title: 'Quality Day',
      date: 'November 22, 2023',
      location: 'Airoli',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: quality,
    },
  ];

  const [expandedImage, setExpandedImage] = useState(null);

  const handleExpandImage = (imageUrl) => {
    setExpandedImage(imageUrl);
  };

  const handleCloseImage = () => {
    setExpandedImage(null);
  };

  return (
    <div>
      <style>
        {`
          /* Event heading */
          h3 {
            background-color: #ffe17e; /* Background color of the heading box */
            color: #fff; /* Text color */
            padding: 10px 20px; /* Padding inside the box */
            border-radius: 8px; /* Rounded corners */
            font-size: 24px; /* Font size of the heading */
            text-align: center; /* Center align the heading */
            margin: 20px 0; /* Margin around the heading box */
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Box shadow for a subtle lift effect */
          }

          .app {
            text-align: center;
          }

          h1 {
            font-size: 36px;
            font-weight: bold;
            color: #f3e4e4;
            text-align: center;
            margin: 20px 0;
            text-transform: uppercase;
          }

          h1::after {
            content: '';
            display: block;
            width: 500px;
            height: 3px;
            background-color: #5a3d3d;
            margin: 10px auto;
          }

          .event-card h3 {
            font-size: 25px;
            margin: 10px 0;
            color: #333;
            position: relative;
          }

          .event-container {
            display: flex;
            overflow-x: auto;
            white-space: nowrap;
            gap: 20px;
            position: relative;
          }

          .event-card h3::after {
            content: "             ";
            display: block;
            width: 100%;
            height: 2px;
            background-color: #333;
            position: absolute;
            bottom: 0;
            left: 0;
          }

          .event-list {
            display: flex;
            gap: 50px;
            flex-wrap: wrap;
          }

          .fullSize {
            font-style: italic;
            padding: 2px;
            margin: 5px;
            font-size: 0.3cm;
            background-color: rgb(95, 124, 138);
            width: 100px;
          }

          .event-card {
            background-color: #fff;
            border: 1px solid #ddd;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            padding: 20px;
            margin: 10px;
            margin-bottom: 100px;
            max-width: 300px;
            text-align: center;
            transition: transform 0.2s, box-shadow 0.2s;
            min-height: 200px;
          }

          .event-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
          }

          .event-card h3 {
            font-size: 20px;
            margin: 10px 0;
          }

          .event-card img {
            max-width: 100%;
            height: 100%;
            object-fit: cover;
            margin: 10px 0;
          }

          .event-card p {
            font-size: 14px;
            margin: 10px 0;
          }

          .event-card:hover {
            transform: scale(1.1);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
          }

          .small-image {
            max-width: 100%;
            height: 150px;
            object-fit: cover;
            cursor: pointer;
            transition: transform 0.2s;
            border: solid rgb(202, 142, 73) 2px;
          }

          .small-image:hover {
            transform: translateY(0);
          }

          .expanded-image {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 999;
          }

          .expanded-image img {
            max-width: 90%;
            max-height: 90vh;
            border-radius: 10px;
            border: 4px solid rgb(91, 91, 91);
          }

          .close-button {
            position: absolute;
            top: 10px;
            right: 10px;
            font-size: 24px;
            color: #fff;
            cursor: pointer;
            background: none;
            border: none;
            outline: none;
          }

          @media (max-width: 768px) {
            .event-list {
              flex-direction: column;
              align-items: center;
            }
            .event-card {
              width: 100%;
            }
          }
        `}
      </style>

      <div className="app">
        <h2>Discover What's Happening!!</h2>
        <div className="event-list">
          {events.map((event, index) => (
            <div key={index} className="event-card">
              <h3>{event.title}</h3>
              <img
                src={event.imageUrl}
                alt={event.title}
                className="small-image"
                onClick={() => handleExpandImage(event.imageUrl)}
              />
              <button onClick={() => handleExpandImage(event.imageUrl)} className="fullSize">
                View Full Size
              </button>
              <p>Date: {event.date}</p>
              <p>Location: {event.location}</p>
              <p>{event.description}</p>
            </div>
          ))}
        </div>

        {expandedImage && (
          <div className="expanded-image">
            <img src={expandedImage} alt="Expanded Event Image" />
            <button className="close-button" onClick={handleCloseImage}>
              &times;
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Media;
