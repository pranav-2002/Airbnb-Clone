import React from "react";
import "./Features.css";
import FeaturesCard from "./FeaturesCard";

function Features() {
  return (
    <div className="features">
      <h1>Live anywhere</h1>
      <div className="features__content">
        <FeaturesCard
          image="https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=320"
          title="Outdoor getaways"
        />
        <FeaturesCard
          image="https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=320"
          title="Unique stays"
        />
        <FeaturesCard
          image="https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=320"
          title="Entire homes"
        />
        <FeaturesCard
          image="https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=320"
          title="Pets allowed"
        />
      </div>
    </div>
  );
}

export default Features;
