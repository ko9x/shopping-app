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
        orderTotal: data[key].orderTotal,
        orderDate: data[key].orderDate
      });
    }

    setOrders(arr);
  };

  useFocusEffect(
    useCallback(() => {
      getOrders();
    }, [])
  );

  const renderItems = ({ item }) => {
    const itemsDisplay = item.order.map((item) => (
      <View key={item.id}>
        <View
          style={{
            paddingTop: 5,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text>Item Name: {item.title}</Text>
          <Text> Qty: {item.quantity}</Text>
        </View>
      </View>
    ));
    return (
      <View key={item.id} style={{ paddingVertical: 20, borderBottomColor: 'black', borderBottomWidth: 2 }}>
        <View style={{borderBottomWidth: 1, borderBottomColor: 'black'}}>
        <Text style={{fontWeight: 'bold'}} >Order ID: {item.id}</Text>
        <Text style={{fontWeight: 'bold'}} >Order Date: {item.orderDate}</Text>
        </View>
        {itemsDisplay}
        <Text key={item.id} style={{alignSelf: 'center', paddingTop: 20}}>Order Total: {item.orderTotal}</Text>
      </View>
    );
  };

  return (
    <Screen>
      <FlatList
        data={orders}
        renderItem={renderItems}
        keyExtractor={item => item.id}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
