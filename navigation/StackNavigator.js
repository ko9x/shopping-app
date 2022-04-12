import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ShopScreen from "../screens/ShopScreen";
import DetailScreen from "../screens/DetailScreen";
import ShoppingCartScreen from "../screens/ShoppingCartScreen";

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Shop" component={ShopScreen}/>
            <Stack.Screen name="Details" component={DetailScreen}/>
            <Stack.Screen name="ShoppingCart" component={ShoppingCartScreen}/>
        </Stack.Navigator>
    )
};

export {MainStackNavigator};