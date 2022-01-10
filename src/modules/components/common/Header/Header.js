import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../../hooks/CartContext.js";
import CartPopup from "../../cart/CartPopup.js";
import "./Header.css";

const Header = () => {
  const cart = useCart();
  const [arrowUnactive, setArrowUnactive] = useState(true);
  const [openPopup, setOpenPopup] = useState(false);

  const toggleClass = (e) => {
    setArrowUnactive(!arrowUnactive);
    arrowUnactive
      ? (e.currentTarget.className = "links__item arrow-up")
      : (e.currentTarget.className = "links__item arrow-down");
  };

  const popupStateChange = () => {
    setOpenPopup(!openPopup);
  };

  return (
    <header className="App-header">
      <Link to="/" className="App-header__logo">
        <img src="/media/logo.png" alt="logo" />
      </Link>
      <nav className="App-header__links">
        <Link to="/" className="links__item">
          Home
        </Link>
        <Link to="/" className="links__item arrow-down" onClick={toggleClass}>
          Shop
        </Link>
        <Link to="/journal" className="links__item">
          Journal
        </Link>
        <Link
          to="/more"
          className="links__item arrow-down"
          onClick={toggleClass}
        >
          More
        </Link>
      </nav>
      <button className="links__item arrow-down headerPopupButton" onClick={popupStateChange}>
        <span>My cart</span>
        {cart.orderList.length > 0 && (
          <span>{`(${cart.orderList.length})`}</span>
        )}
      </button>
      {openPopup && (
        <CartPopup openPopup={openPopup} popupStateChange={popupStateChange}/>
      )}
    </header>
  );
};

export default Header;
