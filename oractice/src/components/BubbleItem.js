import React from "react";
import "../styles/components/BubbleItem.css"

const BubbleItem = ({ logo, year, title, description }) => {
    return (
      <div className="bubble-container">
        <div className="year">{year}</div>
        <div className="bubble" style={{ backgroundImage: `url(${logo})` }} />
        <h3 className="title">{title}</h3>
        <p className="subtitle">{description}</p>
      </div>
    );
  };
  
  export default BubbleItem;
  