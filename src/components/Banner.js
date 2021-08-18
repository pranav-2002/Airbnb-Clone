import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <img
        src="https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg"
        alt="banner"
      />
      <div className="banner__text">
        <p>Not sure where to go? Perfect.</p>
        <button>I'm flexible</button>
      </div>
    </div>
  );
}

export default Banner;
