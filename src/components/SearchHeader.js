import React, { useContext } from "react";
import "./SearchHeader.css";
import { LocationContext } from "./Contexts/LocationContext";

function SearchHeader() {
  const url = window.location.href.split("/")[4].replace("%20", " ");

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const { startDate, endDate, noOfGuests } = useContext(LocationContext);

  return (
    <div className="header">
      <p>
        300+ stays • {startDate.getDate()} {monthNames[startDate.getMonth()]} -{" "}
        {endDate.getDate()} {monthNames[endDate.getMonth()]} • {noOfGuests}{" "}
        guest(s)
      </p>
      <h1>Stays in {url} </h1>
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
