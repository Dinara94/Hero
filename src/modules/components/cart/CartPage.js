import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/CartContext.js";
import CartRow from "./CartRow.js";
import "./CartPage.css";

const CartPage = () => {
  const cart = useCart();
  const [totalSumState, setTotalSumState] = useState(0);

  useEffect(() => {
    setTotalSumState(cart.orderList.reduce((sum, current) => sum + current.total, 0));
  }, []);

  return (
    <section className="CartPage">
      <h1 className="CartPage__title">Shopping Cart</h1>
      <div className="CartPage__table">
        <div className="table__row table__row_top">
          <p>product</p>
          <p>quantity</p>
          <p>total</p>
          <p>action</p>
        </div>
        {cart.orderList.map((item) => (
          <CartRow key={item.id} item={item} setTotalSumState={setTotalSumState}/>
        ))}
        <div className="table__row table__row_sum">
          <div>
            <p className="row-sum__line">cart overview</p>
            <div className="row-sum__line">
              <span>subtotal</span>
              <span>{`\$${totalSumState}.00`}</span>
            </div>
            <div className="row-sum__line">
              <span>total</span>
              <span className="totalResult">{`\$${totalSumState}.00 CAD`}</span>
            </div>
          </div>
        </div>
        <div className="table__footer">
          <Link to={`/`} className="table__link">
            continue shopping
          </Link>
          <button className="table__checkout">checkout</button>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
