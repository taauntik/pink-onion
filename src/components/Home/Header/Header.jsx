import React from "react";
import Navbar from "../../common/Navbar/Navbar";

function Header() {
  return (
    <>
      <Navbar />
      <div className="banner">
        <div>
          <h1>Best Food Waiting for your belly</h1>
          <div className="search-input">
            <input
              type="text"
              className="shadow-sm"
              placeholder="Search Foods ..."
            />
            <button className="shadow-sm">Search</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
