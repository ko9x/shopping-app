import { View, Text, StyleSheet, Button, ImageBackground } from "react-native";
import Screen from "../components/UI/Screen";
import Card from "../components/UI/Card";
import Colors from "../constants/Colors";
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { CartContext } from "../store/Cart";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function DetailScreen({ navigation, route, props }) {
  const { item } = route.params;
  const { addItemToCart } = useContext(CartContext);
  const [iconSize, setIconSize] = useState(32);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Ionicons
          name="ios-cart"
          size={iconSize}
          color={Colors.primary}
          onPress={() => {
            navigation.navigate("ShoppingCartScreen", { isEditable: true, hasRemoveButton: true });
          }}
        />
      ),
    })
  }, [iconSize]);

  const handleAddItem = (item) => {
    bumpButton();
    addItemToCart(item)
  };

  const bumpButton = () => {
    setIconSize(37);
    setTimeout(() => {
      setIconSize(38);
    }, 100);
    setTimeout(() => {
      setIconSize(40);
    }, 100);
    setTimeout(() => {
      setIconSize(32);
    }, 200);
  }

  return (
    <Screen>
      <Card style={{ position: "absolute", top: 5 }}>
        <ImageBackground
          source={{ uri: item.imageAddress }}
          style={styles.BGImage}
        />
      </Card>
      <View style={styles.body}>
        <Text style={styles.text}>{item.description}</Text>
      </View>
      <View style={{ ...styles.body, marginTop: 4 }}>
        <Text style={styles.text}>${Number(item.price).toFixed(2)}</Text>
      </View>
      <View style={styles.button}>
        <Button title="Add to cart" onPress={() => {
          handleAddItem(item);
        }} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  BGImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    borderRadius: 10,
    overflow: "hidden",
  },
  body: {
    padding: 10,
    margin: "8%",
    fontSize: 50,
    borderRadius: 8,
    borderColor: "black",
    borderWidth: 1,
  },
  text: {
    fontSize: 20,
  },
  button: {
    position: "absolute",
    bottom: 50,
    width: "80%",
    borderRadius: 20,
    borderColor: Colors.primary,
    borderWidth: 1,
  },
});
