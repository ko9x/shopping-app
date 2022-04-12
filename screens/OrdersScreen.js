import { View, Text, StyleSheet } from 'react-native';
import Screen from '../components/UI/Screen';

export default function OrdersScreen(props) {
    return <Screen><Text>This is the orders screen!</Text></Screen>
};

// OrdersScreen.navigationOptions = (navigationData) => {
//     return {
//         headerLeft: () => (
//             <Ionicons
//               name="ios-menu"
//               size={32}
//               color={Colors.primary}
//               onPress={() => {
//                 navigation.openDrawer();
//               }}
//             />
//           ),
//     }
// }

const styles = StyleSheet.create({

});

