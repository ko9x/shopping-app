import { View, Text, StyleSheet } from "react-native";
import Screen from "../components/UI/Screen";

export default function DetailScreen({navigation, route, props}) {

  console.log('details', route.params.item); //@DEBUG
  return (
    <Screen>
      <Text>This is the Detail Screen!</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({});
