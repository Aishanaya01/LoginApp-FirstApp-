import React, { useState, useEffect } from "react";
import {
  View,
  ImageBackground,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Text,
  Animated,
  Easing,
} from "react-native";
import logo from "../assets/atom.png";
import { Ionicons } from "@expo/vector-icons";
// import * as Font from 'expo-font';
const ProfileScreen = ({ navigation }) => {
  const [spinAnim, setSpinAnim] = useState(new Animated.Value(0));
  const spin = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinAnim, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  });

  return (
    <ImageBackground style={styles.backgroundContainer}>
      <View style={styles.LogoContainer}>
        <Animated.Image
          source={logo}
          style={styles.logo}
          style={{ height: 100, width: 100, transform: [{ rotate: spin }] }}
        />
        <Text style={styles.LogoText}>SettingScreeen</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.6,
    backgroundColor: "yellow",
  },
  LogoContainer: {
    alignItems: "center",
    marginBottom: 50,
  },
});

export default ProfileScreen;