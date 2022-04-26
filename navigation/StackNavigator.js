import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native";
import ShopScreen from "../screens/ShopScreen";
import DetailScreen from "../screens/DetailScreen";
import ShoppingCartScreen from "../screens/ShoppingCartScreen";
import AddOrEditProductScreen from "../screens/AddOrEditProductScreen";
import Colors from "../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { useContext } from "react";
import { CartContext } from "../store/Cart";

const Stack = createNativeStackNavigator();

const MainStackNavigator = ({ navigation }) => {

  const {removeItemFromCart} = useContext(CartContext);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ShopScreen"
        component={ShopScreen}
        initialParams={{isEditable: false}}
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
                navigation.navigate("ShoppingCartScreen", {isEditable: true, hasRemoveButton: true, onRemove: removeItemFromCart()});
              }}
            />
          ),
        }}
      />
      <Stack.Screen name="DetailsScreen" component={DetailScreen} />
      <Stack.Screen
        name="ShoppingCartScreen"
        component={ShoppingCartScreen}
        options={{ title: "Shopping Cart" }}
      />
    </Stack.Navigator>
  );
};

const ProductsStackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ManageProductsScreen"
        component={ShopScreen}
        initialParams={{isEditable: true}}
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

export { MainStackNavigator, ProductsStackNavigator };
