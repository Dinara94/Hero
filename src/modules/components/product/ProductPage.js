import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import useProducts from "../../hooks/useProducts.js";
import { useCart } from "../../hooks/CartContext.js";
import Counter from "../common/Counter/Counter.js";
import "./ProductPage.css";

const ProductPage = () => {
  const { id } = useParams();
  const { findSelected, selectedProduct } = useProducts();
  const cart = useCart();
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    findSelected(id);
  }, [id]);

  const addTocart = () => {
    cart.sendToCart(selectedProduct, counter);
  };

  const increment = () => {
    setCounter((prev) => prev + 1);
  };

  const decrement = () => {
    setCounter((prev) => (prev === 1 ? 1 : prev - 1));
  };

  return (
    <section className="Product-page">
      <ul className="Product-page__breadcrumbs">
        <li className="breadcrumbs__link">
          <Link to={`/`}>home</Link>
        </li>
        <li className="breadcrumbs__link">{selectedProduct.title}</li>
      </ul>

      <figure className="Product-page__container">
        <div className="Product-page__img">
          <img
            src={`/media/${selectedProduct.image}`}
            alt={selectedProduct.title}
          />
        </div>
        <div className="Product-page__card">
          <figcaption className="Product-page__text">
            <p className="card__brand">{selectedProduct.brand}</p>
            <h2 className="card__name">{selectedProduct.title}</h2>
            <p className="card__price">{`\$${selectedProduct.price}.00`}</p>
            <p className="card__descr">{selectedProduct.description}</p>
          </figcaption>
          <div className="Product-page__btns">
            <Counter
              item={selectedProduct}
              counter={counter}
              functionIncrement={increment}
              functionDecrement={decrement}
            />
            <button className="btns__add" onClick={addTocart}>
              add to cart
            </button>
          </div>
        </div>
      </figure>
    </section>
  );
};

export default ProductPage;
