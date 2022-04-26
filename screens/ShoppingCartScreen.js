import { useContext } from "react";
import { FlatList } from "react-native";
import Screen from "../components/UI/Screen";
import { CartContext } from "../store/Cart";
import ProductCard from "../components/ProductCard";

export default function ShoppingCartScreen() {
  const { cartItems, removeItemFromCart } = useContext(CartContext);

  const renderItems = ({ item }) => {
    return (
      <ProductCard
      item={item}
      onRemove={removeItemFromCart}
      isEditable={true}
      hasRemoveButton={true}
      />
    );
  };

  return (
    <Screen>
      <FlatList data={cartItems} renderItem={renderItems} keyExtractor={(item) => item.id} />
    </Screen>
  );
}
