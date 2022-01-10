import React from "react";
import { Link } from "react-router-dom";
import "./ErrorScreen.css";

const ErrorScreen = () => {
  return (
    <div className="ErrorScreen">
      <h1 className="ErrorScreen__title">Oops!</h1>
      <p className="ErrorScreen__message">
        This page doesn't exist, please go to <Link to="/">homepage</Link>
      </p>
    </div>
  );
};

export default ErrorScreen;
