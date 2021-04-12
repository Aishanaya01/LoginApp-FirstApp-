/*import React, { useState, useEffect } from "react";
import { Animated, Easing, View, Image, Text, StyleSheet } from "react-native";
import logo from "../assets/atom.png";
const LogoAnimation = ({ navigation }) => {
  const [spinAnim, setSpinAnim] = useState(new Animated.Value(0));
  const spin = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  /*useEffect(() => {
    Animated.loop(
      Animated.timing(spinAnim, {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear,
       
      })
    ).start();
  });
  return (
    <View style={styles.LogoContainer}>
      <Animated.Image
        source={logo}
        style={styles.logo}
        style={{ height: 100, width: 100, transform: [{ rotate: spin }] }}
      />
      <Text style={styles.LogoText}>React-Native</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  LogoContainer: {
    alignItems: "center",
    marginBottom: 50,
  },
  logo: {
    width: 120,
    height: 120,
  },
  LogoText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
});

export default LogoAnimation;*/