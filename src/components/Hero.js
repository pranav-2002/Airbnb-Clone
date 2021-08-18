import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__img">
        <img
          src="https://airbnb-pi.vercel.app/_next/image?url=https%3A%2F%2Flinks.papareact.com%2F4cj&w=1920&q=75"
          alt="hero"
        />
      </div>
      <div className="hero__text">
        <h3>
          The Greatest <br /> Outdoors
        </h3>
        <p>Wishlists curated by Airbnb.</p>
        <button>Get Inspired</button>
      </div>
    </div>
  );
}

export default Hero;
