import React, { createContext, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const cartContextContent = React.useMemo(() => {
    return {
      cartItems,
      addItemToCart: (newItem) => {
        setCartItems((prevItems) => [...prevItems, newItem]);
      },
    };
  });

  return (
      <CartContext.Provider value={cartContextContent}>
          {children}
      </CartContext.Provider>
  )
};
