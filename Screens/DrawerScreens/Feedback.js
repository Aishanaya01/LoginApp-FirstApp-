import React from "react";
import { Text, StyleSheet } from "react-native";

function Feedback() {
  return <Text style={styles.backgroundColor}>Feedback-screen</Text>;
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

export default Feedback;