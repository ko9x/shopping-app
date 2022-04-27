import { SafeAreaView, Text, StyleSheet } from "react-native";

export default function Screen(props) {
  return (
    <SafeAreaView style={{ ...styles.container, ...props.style }}>
      {props.children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
