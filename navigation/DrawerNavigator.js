import { createDrawerNavigator } from "@react-navigation/drawer";
import { DefaultTheme, DrawerActions } from "@react-navigation/native";
import { MainStackNavigator, ProductsStackNavigator } from "./StackNavigator";
import OrdersScreen from "../screens/OrdersScreen";
import ShopScreen from "../screens/ShopScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const navigation = useNavigation();
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Shop"
        component={MainStackNavigator}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Orders"
        component={OrdersScreen}
        options={{
          headerLeft: () => (
            <Ionicons
              name="ios-menu"
              size={32}
              color={Colors.primary}
              onPress={() => {
                navigation.dispatch(DrawerActions.toggleDrawer());
              }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Manage Products"
        component={ProductsStackNavigator}
        options={{
          headerShown: false,
          headerLeft: () => (
            <Ionicons
              name="ios-menu"
              size={32}
              color={Colors.primary}
              onPress={() => {
                navigation.dispatch(DrawerActions.toggleDrawer());
              }}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
