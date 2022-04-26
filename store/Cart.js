import React, { createContext, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const cartContextContent = React.useMemo(() => {
    return {
      cartItems,
      addItemToCart: (newItem) => {
        let existingItem = cartItems.find((item) => item.id === newItem.id);
        if (!existingItem) {
          return setCartItems((prevItems) => [...prevItems, newItem]);
        }
        if (existingItem.quantity) {
          const tempArr = {
            cartItems: cartItems.map((item) =>
              item.id === existingItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          };
          return setCartItems(tempArr.cartItems);
        }
        const tempArr = {
          cartItems: cartItems.map((item) =>
            item.id === existingItem.id ? { ...item, quantity: 2 } : item
          ),
        };
        return setCartItems(tempArr.cartItems);
      },
      removeItemFromCart: (id) => {
        let arr = cartItems;
        const filteredArr = arr.filter((item) => item.id !== id);
        setCartItems(filteredArr);
      },
    };
  });

  return (
    <CartContext.Provider value={cartContextContent}>
      {children}
    </CartContext.Provider>
  );
};
