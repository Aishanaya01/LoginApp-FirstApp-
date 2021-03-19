import React from "react";
import { Text, StyleSheet } from "react-native";

function ManageSub() {
  return (
    <Text style={styles.backgroundContainer}>Manage-subscription-screen</Text>
  );
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

export default ManageSub;
