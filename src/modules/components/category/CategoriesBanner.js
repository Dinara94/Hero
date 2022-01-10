import React, { useState } from "react";
import "./CategoriesBanner.css";

const CategoriesBanner = () => {
  const pathImg = "/media/plates-header.jpg";
  /*   const [isOpened, setOpened] = useState(true); */

  /*   const toggleClass = () => {
    setOpened(!isOpened);
  }; */

  return (
    <div className="Categories-container__banner">
      <img src={pathImg} alt="banner_photo" />
      <div className="banner-text">
        <h2 className="banner-text__title">Plates</h2>
        <p className="banner-text__subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
};

export default CategoriesBanner;
