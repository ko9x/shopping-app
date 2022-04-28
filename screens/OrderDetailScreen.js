import { Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ProductCard from "../components/ProductCard";
import Screen from "../components/UI/Screen";

export default function OrderDetailScreen({route}) {
    const {items} = route.params;

    const renderItems = ({item}) => {
       return (
        <ProductCard
        item={item}
      />
       )
    };

  return (
    <Screen>
      <Text>Order Detail Screen!</Text>
      
      <FlatList 
       data={items}
       renderItem={renderItems}
       keyExtractor={item => item.id}
      />
    </Screen>
  );
}
