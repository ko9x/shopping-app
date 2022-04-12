import { createDrawerNavigator } from "@react-navigation/drawer";
import { DefaultTheme } from "@react-navigation/native";
import { MainStackNavigator } from "./StackNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Shop" component={MainStackNavigator} options={{ headerShown: false }}/>
        </Drawer.Navigator>
    )
};

export default DrawerNavigator;

