import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/CartContext.js";
import PropTypes from 'prop-types';
import "./Product.css";

const Product = ({ item }) => {
  const cart = useCart();
  const [buttonIsHovered, setButtonHovered] = useState(false);

  const addProductTocart = () => {
    cart.sendToCart(item, 1);
  };

  return (
    <figure className="Product">
      <img
        src={`/media/${item.image}`}
        alt={item.title}
        onMouseEnter={() => setButtonHovered(true)}
        onMouseLeave={() => setButtonHovered(false)}
        className={buttonIsHovered ? "hovered" : null}
      />
      {buttonIsHovered && (
        <>
          <Link
            to={`/${item.id}`}
            className="Product__button details-btn"
            onMouseEnter={() => setButtonHovered(true)}
            onMouseLeave={() => setButtonHovered(false)}
          >
            view details
          </Link>
          <button
            className="Product__button add-btn"
            onMouseEnter={() => setButtonHovered(true)}
            onMouseLeave={() => setButtonHovered(false)}
            onClick={addProductTocart}
          >
            add to cart
          </button>
        </>
      )}
      <figcaption className="Product__info">
        <p className="Product__brand">{item.brand}</p>
        <h3 className="Product__name">{item.title}</h3>
        <p className="Product__price">{`\$${item.price.toFixed(2)}`}</p>
      </figcaption>
    </figure>
  );
};

Product.propTypes = {
  item: PropTypes.object,
}

Product.defaultProps = {
  item: {},
}

export default Product;
