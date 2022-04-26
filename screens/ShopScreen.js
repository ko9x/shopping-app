import React, { useEffect, useCallback, useState } from "react";
import {
  ScrollView,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Alert,
} from "react-native";
import Screen from "../components/UI/Screen";
import Card from "../components/UI/Card";
import { NavigationContainer, useFocusEffect } from "@react-navigation/native";
import Colors from "../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import ProductCard from "../components/ProductCard";

export default function ShopScreen({ navigation, route, props }) {
  const { isEditable } = route.params ? route.params : false;
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch(
      "https://react-http-max-54195-default-rtdb.firebaseio.com/products.json"
    );

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
  };

  const removeProduct = async (id) => {
    fetch(
      `https://react-http-max-54195-default-rtdb.firebaseio.com/products/${id}.json`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (response.status === 200) {
          getProducts();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .catch((error) => {
        console.log("error", error); //@DEBUG
      });
  };

  const removeProductAlert = (title, id) => {
    Alert.alert(
      `Are you sure you want to remove ${title}?`,
      "This cannot be undone",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            removeProduct(id);
          },
        },
      ]
    );
  };

  useFocusEffect(
    useCallback(() => {
      getProducts();
    }, [])
  );

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
        onPress={() =>
          !isEditable
            ? navigation.navigate("DetailsScreen", {
                item: item,
                itemTitle: item.title,
              })
            : navigation.navigate("AddOrEditScreen", {
                titlePreface: "Edit",
                item: item,
              })
        }
      >
        <ProductCard
          item={item}
          isEditable={isEditable}
          hasEditButton={true}
          hasRemoveButton={true}
          onRemoveProduct={removeProductAlert}
          navigation={navigation}
        />
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
