import {
  View,
  Text,
  StyleSheet,
  Button,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Screen from "../components/UI/Screen";
import Card from "../components/UI/Card";
import Colors from "../constants/Colors";
import {
  Fragment,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { CartContext } from "../store/Cart";
import CartButton from "../components/CartButton";

export default function DetailScreen({ navigation, route, props }) {
  const { item, canAddToCart } = route.params;
  const { addItemToCart, cartQuantity } = useContext(CartContext);
  const [iconSize, setIconSize] = useState(32);

  useLayoutEffect(() => {
    {
      canAddToCart &&
        navigation.setOptions({
          headerRight: () => (
            <CartButton cartQuantity={cartQuantity} iconSize={iconSize}/>
          ),
        });
    }
  }, [iconSize, cartQuantity]);

  const handleAddItem = (item) => {
    bumpButton();
    addItemToCart(item);
  };

  const bumpButton = () => {
    setIconSize(33);
    setTimeout(() => {
      setIconSize(34);
    }, 100);
    setTimeout(() => {
      setIconSize(35);
    }, 100);
    setTimeout(() => {
      setIconSize(32);
    }, 200);
  };

  return (
    <Fragment>
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
      </Screen>
      {canAddToCart && (
        <TouchableOpacity
          onPress={() => {
            handleAddItem(item);
          }}
        >
          <View style={styles.button}>
            <Text
              style={{
                fontSize: 20,
                color: Colors.primary,
                alignSelf: "center",
                padding: 8,
              }}
            >
              Add to cart
            </Text>
          </View>
        </TouchableOpacity>
      )}
    </Fragment>
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
    width: 300,
    borderRadius: 20,
    borderColor: Colors.primary,
    borderWidth: 1,
    bottom: 35,
    left: 45,
  },
});
