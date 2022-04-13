import { useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Screen from "../components/UI/Screen";

export default function AddOrEditProductScreen({ navigation, route }) {
  const { titlePreface } = route.params;

  const fullTitle = `${titlePreface} Product`;

  useLayoutEffect(() => {
    navigation.setOptions({ title: fullTitle });
  }, [titlePreface]);

  return (
    <Screen>
      <Text>Add or Edit Product Screen!</Text>
    </Screen>
  );
}

const sytles = StyleSheet.create({});
