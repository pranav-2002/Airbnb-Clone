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

function App() {
  return (
    <div className="app">
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
    </div>
  );
}

export default App;
