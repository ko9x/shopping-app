import { useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function AddOrEditProductScreen({ navigation, route }) {
  const { titlePreface } = route.params;

  const fullTitle = `${titlePreface} Product`;

  useLayoutEffect(() => {
    navigation.setOptions({ title: fullTitle });
  }, [titlePreface]);

  return (
    <View>
      <Text>Add or Edit Product Screen!</Text>
    </View>
  );
}

const sytles = StyleSheet.create({});
