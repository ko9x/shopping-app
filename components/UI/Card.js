import { View, StyleSheet } from "react-native";

export default function Card(props) {
  return <View style={{...styles.container, ...props.style}}>{props.children}</View>;
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: "85%",
    backgroundColor: "grey",
    margin: 10,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.36,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 10,
  },
});
