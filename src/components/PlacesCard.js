import React from "react";
import "./PlacesCard.css";

function PlacesCard({ image, location, text }) {
  return (
    <div className="card">
      <div className="card__content">
        <div className="card__image">
          <img src={image} alt="card" />
        </div>
        <div className="card__text">
          <h5>{location}</h5>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default PlacesCard;
