import React, { useRef } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Header = () => {
  const inputFieldRef = useRef(null);

  const toggleClearButton = () => {
    const inputField = inputFieldRef.current;
    const clearButton = document.getElementById("clearButton");

    if (inputField && clearButton) {
      clearButton.style.display =
        inputField.value.trim() !== "" ? "flex" : "none";
    }
  };

  const clearInput = () => {
    const inputField = inputFieldRef.current;
    const clearButton = document.getElementById("clearButton");

    if (inputField && clearButton) {
      inputField.value = "";
      clearButton.style.display = "none";
      inputField.focus();
    }
  };

  return (
 <>
      <div className="header-body">
        <div className="header-logo">Glamy</div>
        
        <div className="header-search-box">
          <div className="search-input">
            <input
              type="text"
              className="search-input-field"
              placeholder="Search for products..."
              aria-label="Search products"
              ref={inputFieldRef}
              onInput={toggleClearButton}
            />

<div className="search-icon">
            <SearchIcon className="cseachi-icon-cross" />
          </div>
          </div>
         
          <button
            id="clearButton"
            className="clear-btn"
            aria-label="Clear search"
            onClick={clearInput}
            style={{ display: "none" }}
          >
            <ClearIcon />
          </button>
       
        </div>

        <div className="header-categories">
          <div className="header-category">Categories</div>
          <div className="header-category">Online auth</div>
          <div className="header-category">About Us</div>
          <div className="header-category">Sell on Glamy</div>
          <div className="header-category">Glamy Blog</div>
        </div>
        <div className="header-profile">
          <SentimentSatisfiedAltIcon className="header-icon-z" />
        </div>
        <div className="header-wishlist">
          <HeartBrokenIcon className="header-icon-z"  />
        </div>
      </div>
      <div className="header-body-banner">
        <h1 className="header-body-banner-heading">About Glamy:</h1>
        <p className="header-body-banner-para">
          Glow your style, glow your life.
        </p>
        <div className="header-body-banner-arrow">
          <ArrowForwardIcon className="header-body-banner-arrow-icon" />
        </div>
      </div>

      </>
  );
};

export default Header;
