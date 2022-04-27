import {
  View,
  Text,
  ImageBackground,
  Button,
  StyleSheet,
  Alert,
} from "react-native";
import Card from "./UI/Card";

export default function ProductCard(props) {

  return (
    <View style={styles.container}>
      <Card>
        <View style={styles.content}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text style={styles.item}>{props.item.title}</Text>
          {props.hasQuantity && props.item.quantity && <Text style={styles.item}>Total: {(props.item.price * props.item.quantity).toFixed(2)}</Text>}
          </View>
          <ImageBackground
            source={{ uri: props.item.imageAddress }}
            style={styles.BGImage}
          />
        </View>
        {props.isEditable && (
          <View style={styles.buttonContainer}>
            {props.hasEditButton && (
              <Button
                title="Edit"
                onPress={() => {
                  props.navigation.navigate(props.editScreen, {
                    titlePreface: "Edit",
                    item: props.item,
                  });
                }}
              />
            )}
            {props.hasRemoveButton && (
              <Button
                color={"red"}
                title="Remove"
                onPress={() => {
                  props.onRemove(props.item.id, props.item.title);
                }}
              />
            )}
            {props.hasQuantity && (
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: 'center'
                }}
              >
                <Button
                  title=" - "
                  onPress={() => {
                    props.onDecreaseQuantity(props.item.id)
                  }}
                />
                <View><Text>Qty: {props.item.quantity}</Text></View>
                <Button
                  title=" + "
                  onPress={() => {
                    props.onIncreaseQuantity(props.item)
                  }}
                />
              </View>
            )}
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
