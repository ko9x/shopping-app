import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ShopScreen from "./screens/ShopScreen";
import DetailScreen from "./screens/DetailScreen";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./navigation/DrawerNavigator";
import OrdersScreen from "./screens/OrdersScreen";
import {CartProvider} from "./store/Cart.js";

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
