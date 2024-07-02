import React from "react";
import "./Card.scss";

const Card = ({ cover, title }) => {
  return (
    <div className="card">
      <img src={cover} alt={title} className="card-image" />
      <div className="card-title-container">
        <h3 className="card-title">{title}</h3>
      </div>
    </div>
  );
};

export default Card;
