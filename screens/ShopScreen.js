import React, { useEffect } from "react";
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
import { NavigationContainer } from "@react-navigation/native";
import Colors from "../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";

const DUMMY_DATA = [
  {
    id: "p1",
    title: "An Old Tire",
    description:
      "Just think of all the fun things you and your family can do with an amazing product like An Old Tire",
    price: 1.95,
    imageAddress:
      "https://image.shutterstock.com/image-photo/old-tire-on-white-background-260nw-1576592083.jpg",
  },
  {
    id: "p2",
    title: "Ball in a Cup",
    description:
      "No video game can compete with the excitement of... Ball in a Cup!",
    price: 16.5,
    imageAddress: "https://thumbs.dreamstime.com/z/ball-cup-toy-9211440.jpg",
  },
  {
    id: "p3",
    title: "Prescription Glasses",
    description:
      "These stylish Prescription Glasses are the last piece of the puzzle that you have been looking for.",
    price: 38.99,
    imageAddress:
      "https://images.ray-ban.com/is/image/RayBan/805289345015__002.png?impolicy=RB_Product&width=1024&bgc=%23f2f2f2",
  },
  {
    id: "p4",
    title: "A Single Sneaker",
    description:
      "Why in the world would anybody spend $80 on a single shoe? I mean it doesn't even have any laces. You know what? I quit... This Place is... Yes, I guess I have been typing all this in, but who cares!?",
    price: 79.99,
    imageAddress:
      'https://i.ebayimg.com/images/g/WMsAAOSw3PRfoHa3/s-l400.jpg',
  },
];

export default function ShopScreen({ navigation, route, props }) {
  const { isEditable } = route.params ? route.params : false;

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
