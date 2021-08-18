import React from "react";
import "./SearchHeader.css";

function SearchHeader() {
  return (
    <div className="header">
      <p>300+ stays</p>
      <h1>Stays in Goa</h1>
      <div className="header__buttons">
        <button>Free cancellation</button>
        <button>Type of places</button>
        <button>Price</button>
        <button>Instant Book</button>
        <button>More filters</button>
      </div>
      <p>Review COVID-19 travel restrictions before you book.Learn more</p>
    </div>
  );
}

export default SearchHeader;