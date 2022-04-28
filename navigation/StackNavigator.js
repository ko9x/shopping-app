import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native";
import ShopScreen from "../screens/ShopScreen";
import DetailScreen from "../screens/DetailScreen";
import ShoppingCartScreen from "../screens/ShoppingCartScreen";
import AddOrEditProductScreen from "../screens/AddOrEditProductScreen";
import OrdersScreen from "../screens/OrdersScreen";
import OrderDetailScreen from "../screens/OrderDetailScreen";
import Colors from "../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useContext } from "react";
import { CartContext } from "../store/Cart";

const Stack = createNativeStackNavigator();

const MainStackNavigator = ({ navigation }) => {
  const { removeItemFromCart } = useContext(CartContext);

  const removeItemHandler = (id) => {
    if (id) {
      removeItemFromCart();
    } else {
      return;
    }
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ShopScreen"
        component={ShopScreen}
        initialParams={{ isEditable: false }}
        options={{
          title: "Shop",
          headerLeft: () => (
            <Ionicons
              name="ios-menu"
              size={32}
              color={Colors.primary}
              onPress={() => {
                navigation.toggleDrawer();
              }}
            />
          ),
          headerRight: () => (
            <Ionicons
              name="ios-cart"
              size={32}
              color={Colors.primary}
              onPress={() => {
                navigation.navigate("ShoppingCartScreen", {
                  isEditable: true,
                  hasQuantity: true,
                  onRemove: removeItemHandler(),
                });
              }}
            />
          ),
        }}
      />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
      <Stack.Screen name="ShoppingCartScreen" component={ShoppingCartScreen} />
    </Stack.Navigator>
  );
};

const ProductsStackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ManageProductsScreen"
        component={ShopScreen}
        initialParams={{ isEditable: true }}
        options={{
          title: "Manage Products",
          headerLeft: () => (
            <Ionicons
              name="ios-menu"
              size={32}
              color={Colors.primary}
              onPress={() => {
                navigation.toggleDrawer();
              }}
            />
          ),
        }}
      />
      <Stack.Screen name="AddOrEditScreen" component={AddOrEditProductScreen} />
    </Stack.Navigator>
  );
};

const OrdersStackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OrdersScreen"
        component={OrdersScreen}
        options={{
          title: "Orders",
          headerLeft: () => (
            <Ionicons
              name="ios-menu"
              size={32}
              color={Colors.primary}
              onPress={() => {
                navigation.toggleDrawer();
              }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="OrderDetailScreen"
        component={OrderDetailScreen}
        options={{
          title: "Order Details",
        }}
      />
      <Stack.Screen
        name="OrderItemDetailScreen"
        component={DetailScreen}
        options={{
          title: "",
        }}
      />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, ProductsStackNavigator, OrdersStackNavigator };
