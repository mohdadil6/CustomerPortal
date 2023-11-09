import React, { useState } from 'react';
// import './SeamexHeader.css';

const Card2 = (props) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="card">
      <img src={props.image} alt={props.title} />
      <div className="card-content">
        <style>
          {`
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
        <h2>{props.title}</h2>
        <p className={expanded ? 'expanded-description' : ''}>
          {expanded ? props.fullDescription : props.description}
        </p>
        {props.fullDescription && (
          <button className="button" onClick={toggleExpand}>
            {expanded ? 'Read Less' : 'Read More'}
          </button>
        )}
      </div>
    </div>
  );
};

export default Card2;
