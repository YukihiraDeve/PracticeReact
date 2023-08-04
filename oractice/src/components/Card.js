import React from 'react';
import '../styles/components/Card.css';

const Card = ({ logo, title, description }) => {
  return (
    <div className="card-container">
      <img className="card-logo" src={logo} alt="logo" />
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default Card;
