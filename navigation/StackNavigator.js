import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native";
import ShopScreen from "../screens/ShopScreen";
import DetailScreen from "../screens/DetailScreen";
import ShoppingCartScreen from "../screens/ShoppingCartScreen";
import Ionicons from '@expo/vector-icons/Ionicons'
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const MainStackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ShopScreen"
        component={ShopScreen}
        options={{headerLeft: () => (
            <Ionicons
              name="ios-menu"
              size={32}
              onPress={() => {navigation.toggleDrawer()}}
            />
        )}}
      />
      <Stack.Screen
        name="DetailsScreen"
        component={DetailScreen}
      />
      <Stack.Screen
        name="ShoppingCartScreen"
        component={ShoppingCartScreen}
      />
    </Stack.Navigator>
  );
};

export { MainStackNavigator };
