import React from "react";
import "./LargeCard.css";

function LargeCard({ image, title, description }) {
  return (
    <div className="largeCard">
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}

export default LargeCard;
