import React from "react";
import { Text, StyleSheet } from "react-native";

function Plans() {
  return <Text style={styles.backgroundContainer}>Plans-screen</Text>;
}
const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.6,
    backgroundColor: "#fff",
  },
});

export default Plans;