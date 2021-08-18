import React from "react";
import "./NearbyPlaces.css";
import PlacesCard from "./PlacesCard";

function NearbyPlaces() {
  return (
    <div className="places">
      <h1>Explore nearby</h1>
      <div className="places__content">
        <PlacesCard
          image="https://a0.muscache.com/im/pictures/7c424b7e-0f02-4282-93cf-c5fc5e5e157d.jpg?im_q=medq&im_w=240"
          location="Hyderabad"
          text="15-minute drive"
        />
        <PlacesCard
          image="https://a0.muscache.com/im/pictures/8340bd19-ee32-4669-8b10-a8ac7e7735d4.jpg?im_q=medq&im_w=240"
          location="Nagpur"
          text="6-hour drive"
        />
        <PlacesCard
          image="https://a0.muscache.com/im/pictures/f98fbb2e-9e10-4514-b4a7-02c467e1da03.jpg?im_q=medq&im_w=240"
          location="Tirupati"
          text="7.5-hour drive"
        />
        <PlacesCard
          image="https://a0.muscache.com/im/pictures/be4d3ba5-08d7-4afe-95a7-f2da6453886a.jpg?im_q=medq&im_w=240"
          location="Nandi Hills"
          text="7-hour drive"
        />
        <PlacesCard
          image="https://a0.muscache.com/im/pictures/7253e011-7c22-48fd-b75d-d0da35372397.jpg?im_q=medq&im_w=240"
          location="Kolhapur"
          text="7-hour drive"
        />
        <PlacesCard
          image="https://a0.muscache.com/im/pictures/a0eb36e7-b468-4c5e-93b2-819e793563b2.jpg?im_q=medq&im_w=240"
          location="Aurangabad"
          text="7-hour drive"
        />
        <PlacesCard
          image="https://a0.muscache.com/im/pictures/85bd76fe-3c73-4e79-b581-36b9676892f7.jpg?im_q=medq&im_w=240"
          location="Vijayawada"
          text="3.5-hour drive"
        />
        <PlacesCard
          image="https://a0.muscache.com/im/pictures/105b8160-1109-4678-b8aa-367ea9faebea.jpg?im_q=medq&im_w=240"
          location="Hampi"
          text="5.5-hour drive"
        />
      </div>
    </div>
  );
}

export default NearbyPlaces;
