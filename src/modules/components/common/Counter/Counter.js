import React, { useEffect } from "react";
import "./Counter.css";

const Counter = ({ counter, functionIncrement, functionDecrement }) => {
  useEffect(() => {}, [counter]);

  return (
    <div className="counter">
      <div className="counter__value">{counter}</div>
      <div className="counter__controls">
        <button className="counter__controls_plus" onClick={functionIncrement}>
          +
        </button>
        <button className="counter__controls_minus" onClick={functionDecrement}>
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
