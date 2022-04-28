import { useCallback, useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Screen from "../components/UI/Screen";
import Card from "../components/UI/Card";
import { useFocusEffect } from "@react-navigation/native";

export default function OrdersScreen(props) {
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    const response = await fetch(
      "https://react-http-max-54195-default-rtdb.firebaseio.com/orders.json"
    );

    const data = await response.json();

    let arr = [];

    for (const key in data) {
      arr.push({
        id: key,
        order: data[key].cartItems,
      });
    }

    setOrders(arr);
  };

  useFocusEffect(
      useCallback(() => {
        getOrders();
      },[])
  )

//   useEffect(() => {
//     getOrders();
//   }, []);

  const renderItems = ({ item }) => {
    console.log("item", item.order); //@DEBUG
    const itemsDisplay = item.order.map((item) => (
      <View key={item.id} style={{paddingTop: 5, flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text>Name: {item.title}</Text>
        <Text> Qty: {item.quantity}</Text>
      </View>
    ));
    return (
      <View style={{paddingVertical: 20}}>
        <Text>Order number: {item.id}</Text>
        {itemsDisplay}
      </View>
    );
  };

  return (
    <Screen>
      <FlatList
        data={orders}
        renderItem={renderItems}
        keyExtractor={(item) => item.id}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
