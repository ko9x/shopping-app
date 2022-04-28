import { Text } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import ProductCard from "../components/ProductCard";
import Screen from "../components/UI/Screen";

export default function OrderDetailScreen({route, navigation}) {
    const {order} = route.params;

    const renderItems = ({item}) => {
       return (
       <TouchableOpacity onPress={() => {navigation.navigate("OrderItemDetailScreen", {item, canAddToCart: false})}}>
         <ProductCard item={item} hasQuantity={true}/>
       </TouchableOpacity>
       )
    };

  return (
    <Screen>
      <FlatList 
       data={order.order}
       renderItem={renderItems}
       keyExtractor={item => item.id}
      />
    </Screen>
  );
}
