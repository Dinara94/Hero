import React, { useState, useCallback } from "react";
import { useCart } from "../../hooks/CartContext.js";
import "./CartRowPopup.css";

const CartRowPopup = ({ item, setTotalSumState }) => {
  const cart = useCart();

  const deleteItem = useCallback(() => {
    cart.deleteFromCart(item.id);
    setTotalSumState(
      cart.orderList.reduce((sum, current) => sum + current.total, 0)
    );
  }, [cart.orderList]);

  return (
    <article className="CartRowPopup">
      <div className="CartRowPopup__image">
        <img src={`/media/${item.image}`} alt={item.title} />
      </div>
      <div className="CartRowPopup__info">
      <span className="card__name">{item.title}</span>
      <span className="card__quantity">{` x ${item.quantity}`}</span>
        <p className="card__brand">{item.brand}</p>
        <p className="card__price">{`\S${item.total}.00`}</p>
      </div>
      <button className="CartRowPopup__delete" onClick={deleteItem}>
        &#9587;
      </button>
    </article>
  );
};

export default CartRowPopup;
