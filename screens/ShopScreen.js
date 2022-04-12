import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Screen from "../components/UI/Screen";
import Card from "../components/UI/Card";
import { NavigationContainer } from "@react-navigation/native";

const DUMMY_DATA = [
  {
    id: "p1",
    title: "An Old Tire",
    description:
      "Just think of all the fun things you and your family can do with an amazing product like An Old Tire",
    price: 1.95,
  },
  {
    id: "p2",
    title: "Ball in a Cup",
    description:
      "No video game can compete with the excitement of... Ball in a Cup!",
    price: 1.95,
  },
  {
    id: "p3",
    title: "Prescription Glasses",
    description:
      "These stylish Prescription Glasses are the last piece of the puzzle you have been looking for.",
    price: 1.95,
  },
];

export default function ShopScreen({navigation, props}) {
  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => navigation.navigate('DetailsScreen', {item: item})}>
      <View style={styles.container}>
        <Card>
          <Text style={styles.item}>{item.title}</Text>
          <Text style={styles.item}>{item.description}</Text>
          <Text style={styles.item}>{item.price}</Text>
        </Card>
      </View>
    </TouchableOpacity>
  );

  return (
    <Screen>
      <Text>This is the Shop Screen!</Text>
      <FlatList
        data={DUMMY_DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    alignItems: "center",
  },
  item: {
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
