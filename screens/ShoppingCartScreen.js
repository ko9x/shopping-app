import { useContext } from 'react';
import { Text } from 'react-native';
import Screen from "../components/UI/Screen";
import { CartContext } from '../store/Cart';

export default function ShoppingCartScreen() {

    const {cartItems} = useContext(CartContext)

    console.log('cartItems', cartItems); //@DEBUG

    return (
        <Screen>
            <Text>Shopping Cart Screen!</Text>
        </Screen>
    )
};