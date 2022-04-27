import { useContext } from "react";
import { FlatList } from "react-native";
import Screen from "../components/UI/Screen";
import { CartContext } from "../store/Cart";
import ProductCard from "../components/ProductCard";

export default function ShoppingCartScreen() {
  const { cartItems, removeItemFromCart, addItemToCart } = useContext(CartContext);

  const handleIncreaseQuantity = (item) => {
    addItemToCart(item);
  }

  const handleDecreaseQuantity = (id) => {
    removeItemFromCart(id);
  }

  const renderItems = ({ item }) => {
    return (
      <ProductCard
      item={item}
      onRemove={removeItemFromCart}
      isEditable={true}
      hasQuantity={true}
      onDecreaseQuantity={handleDecreaseQuantity}
      onIncreaseQuantity={handleIncreaseQuantity}
      />
    );
  };

  return (
    <Screen>
      <FlatList data={cartItems} renderItem={renderItems} keyExtractor={(item) => item.id} />
    </Screen>
  );
}
