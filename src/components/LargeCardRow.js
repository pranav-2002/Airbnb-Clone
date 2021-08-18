import React from "react";
import "./LargeCardRow.css";
import LargeCard from "./LargeCard";

function LargeCardRow() {
  return (
    <div className="largeCardRow">
      <h1>Discover things to do</h1>
      <div className="largeCardRow__content">
        <LargeCard
          image="https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=320"
          title="Experiences"
          description="Find unforgettable activities near you."
        />
        <LargeCard
          image="https://a0.muscache.com/im/pictures/0ce799cb-7553-4369-be9e-d0011e0ef636.jpg?im_w=320"
          title="Online Experiences"
          description="Live, interactive activities led by Hosts."
        />
        <LargeCard
          image="https://a0.muscache.com/im/pictures/f51f70fb-93b7-4974-86e8-1195b64f1353.jpg?im_w=320"
          title="Olympians &amp Paralympians"
          description="Online activities hosted by athletes."
        />
      </div>
    </div>
  );
}

export default LargeCardRow;
