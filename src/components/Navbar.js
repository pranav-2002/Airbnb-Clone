import React from "react";
import "./Navbar.css";
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import { useState, useEffect } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function Navbar() {
  const [userInput, setUserInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setUserInput("");
  };

  let history = useHistory();

  const redirect = () => {
    if (userInput.length > 0) {
      history.push(`/search/${userInput}`);
    }
  };

  const handleEnter = (event) => {
    if (event.keyCode === 13 && userInput.length > 0) {
      history.push(`/search/${userInput}`);
    }
  };

  useEffect(() => {
    document.addEventListener("keyup", handleEnter);
    return () => document.removeEventListener("keyup", handleEnter);
  });

  return (
    <div className="navbar">
      <div className="navbar__left">
        <Link to="/">
          <img
            src="https://links.papareact.com/qd3"
            alt="logo"
            className="navbar__logo"
          />
        </Link>
        <Link to="/">
          <img
            src="https://d29fhpw069ctt2.cloudfront.net/icon/image/38593/preview.svg"
            alt="logo"
            className="navbar__logoHidden"
          />
        </Link>
      </div>
      <div className="navbar__search">
        <input
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          type="text"
          placeholder="Start your search"
          onKeyPress={handleEnter}
        />
        <SearchIcon className="navbar__searchIcon" onClick={redirect} />
      </div>
      <div className="navbar__right">
        <p>Become a host</p>
        <GlobeAltIcon className="navbar__globeIcon" />
        <div className="navbar__icons">
          <MenuIcon className="navbar__menuIcon" />
          <UserCircleIcon className="navbar__userIcon" />
        </div>
      </div>
      {userInput && (
        <div className="navbar__calender">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#ff385c"]}
            onChange={handleSelect}
            className="dateRange"
          />
          <div className="calender__text">
            <h2>Number of Guests</h2>
            <UsersIcon className="usersIcon" />
            <input
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
              min={1}
              type="number"
              className="number__input"
            />
          </div>
          <div className="navbar__buttons">
            <button onClick={resetInput}>Cancel</button>
            <button onClick={redirect}>Search</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
