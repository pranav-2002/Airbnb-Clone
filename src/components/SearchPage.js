import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SearchHeader from "./SearchHeader";
import SearchRows from "./SearchRows";

function SearchPage() {
  return (
    <div className="searchPage">
      <Navbar />
      <SearchHeader />
      <SearchRows />
      <Footer />
    </div>
  );
}

export default SearchPage;
