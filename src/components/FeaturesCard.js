import React from "react";
import "./FeaturesCard.css";

function FeaturesCard({ image, title }) {
  return (
    <div className="featuresCard">
      <div className="featuresCard__image">
        <img src={image} alt={title} />
      </div>
      <div className="featuresCard__text">
        <h4>{title}</h4>
      </div>
    </div>
  );
}

export default FeaturesCard;
