import React, { createContext, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);

  const cartContextContent = React.useMemo(() => {
    return {
      cartItems,
      cartQuantity,
      addItemToCart: (newItem) => {
        setCartQuantity(prevState => prevState + 1)
        let existingItem = cartItems.find((item) => item.id === newItem.id);
        if (!existingItem) {
          return setCartItems((prevItems) => [
            ...prevItems,
            { ...newItem, quantity: 1 },
          ]);
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
      },
      removeItemFromCart: (id) => {
        setCartQuantity(prevState => prevState - 1)
        let arr = cartItems;
        const selectedItem = arr.find((item) => item.id === id);
        if (selectedItem.quantity === 1) {
          const filteredArr = arr.filter((item) => item.id !== selectedItem.id);
          setCartItems(filteredArr);
        }
        if (selectedItem && selectedItem.quantity > 1) {
          const tempArr = {
            cartItems: cartItems.map((item) =>
              item.id === selectedItem.id
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          };
          return setCartItems(tempArr.cartItems);
        }
      },
      clearCart: () => {
        setCartItems([]);
        setCartQuantity(0);
      },
    };
  });

  return (
    <CartContext.Provider value={cartContextContent}>
      {children}
    </CartContext.Provider>
  );
};
