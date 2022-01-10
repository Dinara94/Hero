import React, { useState, useCallback, useEffect } from "react";
import { useCart } from "../../hooks/CartContext.js";
import Counter from "../common/Counter/Counter.js";
import "./CartRow.css";

const CartRow = ({ item, setTotalSumState }) => {
  const cart = useCart();
  const [counter, setCounter] = useState(item.quantity);
  const [itemTotalSum, setItemTotalSum] = useState(item.total);

  const deleteItem = useCallback(() => {
    cart.deleteFromCart(item.id);
    setTotalSumState(
      cart.orderList.reduce((sum, current) => sum + current.total, 0)
    );
  }, [cart.orderList]);

  const computeCartTotal = () => {
    cart.orderList.forEach((element) => {
      if (element.id === item.id) {
        element.quantity = counter;
        element.total = counter * item.price;
      }
    });
    setTotalSumState(
      cart.orderList.reduce((sum, current) => sum + current.total, 0)
    );
  };

  const increment = useCallback(() => {
    setCounter((prev) => prev + 1);
    computeCartTotal();
    setItemTotalSum(() => item.total);
  }, [counter]);

  const decrement = useCallback(() => {
    setCounter((prev) => (prev === 1 ? 1 : prev - 1));
    computeCartTotal();
    setItemTotalSum(() => item.total);
  }, [counter]);

  return (
    <article className="CartRow">
      <div className="CartRow__image">
        <img src={`/media/${item.image}`} alt={item.title} />
      </div>
      <div className="CartRow__info">
        <p className="card__brand">{item.brand}</p>
        <h4 className="card__name">{item.title}</h4>
      </div>
      <Counter
        item={item}
        counter={counter}
        functionIncrement={increment}
        functionDecrement={decrement}
      />
      <p className="CartRow__price">{`\$${itemTotalSum.toFixed(2)}`}</p>
      <button className="CartRow__delete" onClick={deleteItem}>
        &#9587;
      </button>
    </article>
  );
};

export default CartRow;
