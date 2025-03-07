import React, { useRef, useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

const Header = () => {
  const inputFieldRef = useRef(null);
  const [isCategoryVisible, setIsCategoryVisible] = useState(false);

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
      <Link to={'/'}>  <div className="header-logo">Glamy</div></Link>
        
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
          <div className="header-category" onMouseEnter={() => setIsCategoryVisible(true)} onMouseLeave={() => setIsCategoryVisible(false)}>
            Categories
          </div>
          <div className="header-subcategory-p" onMouseEnter={() => setIsCategoryVisible(true)} onMouseLeave={() =>  setIsCategoryVisible(false)} style={{ display: isCategoryVisible ? 'block' : 'none' }}>
           <div className="parent-header-c">
            <div className="header-subcategory-category"> Casual Shoes
              <ul className="subcategory-list">
                <li className="subcategory-item"><Link to="/adidas">Adidas</Link></li>
                <li className="subcategory-item"><Link to="/nike">Nike</Link></li>
                <li className="subcategory-item"><Link to="/converse">Converse</Link></li>
                <li className="subcategory-item"><Link to="/vans">Vans</Link></li>
                <li className="subcategory-item"><Link to="/new-balance">New Balance</Link></li>
              </ul>
            </div>
            <div className="header-subcategory-category">Sports & Athletic Shoes
              <ul className="subcategory-list">
                <li className="subcategory-item"><Link to="/adidas">Adidas</Link></li>
                <li className="subcategory-item"><Link to="/nike">Nike</Link></li>
                <li className="subcategory-item"><Link to="/reebok">Reebok</Link></li>
                <li className="subcategory-item"><Link to="/under-armour">Under Armour</Link></li>
                <li className="subcategory-item"><Link to="/asics">ASICS</Link></li>
              </ul>
            </div>
            <div className="header-subcategory-category">Formal Shoes
              <ul className="subcategory-list">
                <li className="subcategory-item"><Link to="/adidas">Adidas</Link></li>
                <li className="subcategory-item"><Link to="/nike">Nike</Link></li>
                <li className="subcategory-item"><Link to="/converse">Converse</Link></li>
                <li className="subcategory-item"><Link to="/vans">Vans</Link></li>
                <li className="subcategory-item"><Link to="/new-balance">New Balance</Link></li>
              </ul>
            </div>
            <div className="header-subcategory-category">Boots
              <ul className="subcategory-list">
                <li className="subcategory-item"><Link to="/dr-martens">Dr. Martens</Link></li>
                <li className="subcategory-item"><Link to="/timberland">Timberland</Link></li>
                <li className="subcategory-item"><Link to="/ugg">UGG</Link></li>
                <li className="subcategory-item"><Link to="/the-north-face">The North Face</Link></li>
                <li className="subcategory-item"><Link to="/merrell">Merrell</Link></li>
              </ul>
            </div>
            <div className="header-subcategory-category">Traditional & Cultural Shoes
              <ul className="subcategory-list">
                <li className="subcategory-item"><Link to="/dr-martens">Dr. Martens</Link></li>
                <li className="subcategory-item"><Link to="/timberland">Timberland</Link></li>
                <li className="subcategory-item"><Link to="/ugg">UGG</Link></li>
                <li className="subcategory-item"><Link to="/the-north-face">The North Face</Link></li>
                <li className="subcategory-item"><Link to="/merrell">Merrell</Link></li>
              </ul>
            </div>
            </div>
          </div>
          <div className="header-category"><Link to={"/OnlineAuth"}>Online auth</Link></div>
         <Link to={'/about'}> <div className="header-category">About Us</div></Link>
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
