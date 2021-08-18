import React from "react";
import "./SearchCard.css";
import { HeartIcon } from "@heroicons/react/outline";

function searchCard({
  image,
  location,
  price,
  utilities,
  features,
  title,
  rating,
}) {
  return (
    <div className="searchCard">
      <img src={image} alt={title} />
      <div className="searchCard__text">
        <div className="searchCard__location">
          <p>{location}</p>
          <HeartIcon className="icons" />
        </div>
        <h4>{title}</h4>
        <p>
          {utilities} <br /> {features}
        </p>
        <div className="searchCard__price">
          <p>{rating}</p>
          <h5>{price}</h5>
        </div>
      </div>
    </div>
  );
}

export default searchCard;
