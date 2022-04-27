import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { FlatList, Text, View, Button, StyleSheet } from "react-native";
import Screen from "../components/UI/Screen";
import { CartContext } from "../store/Cart";
import ProductCard from "../components/ProductCard";
import Colors from "../constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ShoppingCartScreen({ navigation }) {
  const { cartItems, removeItemFromCart, addItemToCart } =
    useContext(CartContext);

  const handleIncreaseQuantity = (item) => {
    addItemToCart(item);
  };

  const handleDecreaseQuantity = (id) => {
    removeItemFromCart(id);
  };

  useLayoutEffect(() => {
    if (cartItems.length === 0) {
      navigation.setOptions({
        headerTitle: "Shopping Cart",
      });
    } else {
      const totals = cartItems.map((item) => item.price * item.quantity);
      const cartTotal = totals.reduce((x, y) => x + y);

      const fixedCartTotal = (cartTotal).toFixed(2);

      navigation.setOptions({
        headerTitle: () => (
          <View style={{alignItems: 'center', marginTop: -10}}>
            <Text style={{fontSize: 18}}>Shopping Cart Total:</Text>
            <Text style={{fontSize: 18}}>${fixedCartTotal}</Text>
          </View>
        )
      });
    }
  }, [cartItems]);

  if (cartItems.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 20 }}>Your shopping cart is empty</Text>
      </View>
    );
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
      <FlatList
        data={cartItems}
        renderItem={renderItems}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity containerStyle={{ width: "60%" }}>
        <View style={styles.buttonContainer}>
          <Button title="Order" />
        </View>
      </TouchableOpacity>
    </Screen>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 20,
  },
});
