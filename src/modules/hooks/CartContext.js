import React, { useState, useCallback, useContext, useEffect } from "react";

const CartContext = React.createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [orderList, setOrderList] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);

  const sendToCart = useCallback(
    (product, quantity) => {
      setOrderList((prev) => {
        if (prev.some((item) => item.id === product.id)) {
          let productToIncrement = prev.filter(
            (item) => item.id == product.id
          )[0];
          let productIncremented = {
            ...productToIncrement,
            quantity: quantity + productToIncrement.quantity,
          };
          let newArray = prev.filter((item) => item.id !== product.id);
          return [...newArray, productIncremented];
        } else {
          product.quantity = quantity;
          product.total = quantity * product.price;
          return [...prev, product];
        }
      });
    },
    [orderList]
  );

  const deleteFromCart = useCallback(
    (id) => {
      setOrderList(orderList.filter((item) => item.id !== id));
    },
    [orderList]
  );

  return (
    <CartContext.Provider
      value={{
        orderList,
        setOrderList,
        sendToCart,
        deleteFromCart,
      /*   updateCart, */
        openPopup,
        setOpenPopup,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
