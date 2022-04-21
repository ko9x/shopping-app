import React, { useEffect, useCallback, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Button,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import Screen from "../components/UI/Screen";
import Card from "../components/UI/Card";
import { NavigationContainer, useFocusEffect } from "@react-navigation/native";
import Colors from "../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function ShopScreen({ navigation, route, props }) {
  const { isEditable } = route.params ? route.params : false;
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch('https://react-http-max-54195-default-rtdb.firebaseio.com/products.json');

    const data = await response.json();

    let arr = [];

    for (const key in data) {
      arr.push({
        id: key,
        title: data[key].title,
        description: data[key].description,
        price: data[key].price,
        imageAddress: data[key].imageAddress,
      });
    }

    setProducts(arr);

  }

  useFocusEffect(
    useCallback(() => {
      getProducts();
    }, [])
  )

  useEffect(() => {
    if (isEditable) {
      navigation.setOptions({
        headerRight: () => (
          <Ionicons
            name="ios-add"
            size={32}
            color={Colors.primary}
            onPress={() => {
              navigation.navigate("AddOrEditScreen", { titlePreface: "Add" });
            }}
          />
        ),
      });
    }
  }, [isEditable]);

  const renderItem = ({ item }) => (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => navigation.navigate("DetailsScreen", { item: item })}
      >
        <View style={styles.container}>
          <Card>
            <View style={styles.content}>
              <Text style={styles.item}>{item.title}</Text>
              <ImageBackground
                source={{ uri: item.imageAddress }}
                style={styles.BGImage}
              />
            </View>
            {isEditable && (
              <View style={styles.buttonContainer}>
                <Button
                  title="Edit"
                  onPress={() => {
                    navigation.navigate("AddOrEditScreen", {
                      titlePreface: "Edit",
                      item: item
                    });
                  }}
                />
                <Button title="Remove" />
              </View>
            )}
          </Card>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );

  return (
    <Screen>
      <FlatList
        data={products}
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
  BGImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    borderRadius: 10,
    overflow: "hidden",
  },
  item: {
    padding: 5,
    marginVertical: 5,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  content: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    maxHeight: "20%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    backgroundColor: "#ccc",
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
});
