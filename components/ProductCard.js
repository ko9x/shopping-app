import { View, Text, ImageBackground, Button, StyleSheet, Alert } from "react-native";
import Card from "./UI/Card";

export default function ProductCard(props) {

  return (
    <View style={styles.container}>
      <Card>
        <View style={styles.content}>
          <Text style={styles.item}>{props.item.title}</Text>
          <ImageBackground
            source={{ uri: props.item.imageAddress }}
            style={styles.BGImage}
          />
        </View>
        {props.isEditable && (
          <View style={styles.buttonContainer}>
            {props.hasEditButton && (<Button
              title="Edit"
              onPress={() => {
                props.navigation.navigate(props.editScreen, {
                  titlePreface: "Edit",
                  item: props.item,
                });
              }}
            />)}
            {props.hasRemoveButton && (<Button
              color={"red"}
              title="Remove"
              onPress={() => {
                props.onRemove(props.item.id, props.item.title);
              }}
            />)}
          </View>
        )}
      </Card>
    </View>
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
