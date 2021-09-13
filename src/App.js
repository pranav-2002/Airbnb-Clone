import "./App.css";
import Banner from "./components/Banner";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LargeCardRow from "./components/LargeCardRow";
import Navbar from "./components/Navbar";
import NearbyPlaces from "./components/NearbyPlaces";
import { Switch, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import React, { useState } from "react";
import { LocationContext } from "./components/Contexts/LocationContext";

function App() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);

  return (
    <div className="app">
      <LocationContext.Provider
        value={{
          startDate,
          setEndDate,
          endDate,
          setStartDate,
          noOfGuests,
          setNoOfGuests,
        }}
      >
        <Switch>
          <Route path="/" exact>
            <Navbar />
            <Banner />
            <NearbyPlaces />
            <Features />
            <Hero />
            <LargeCardRow />
            <Footer />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
        </Switch>
      </LocationContext.Provider>
    </div>
  );
}

export default App;
