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

//react-native logo
import logo from "../assets/atom.png";

//for icons
import { Ionicons } from "@expo/vector-icons";

//animation
import * as Animatable from "react-native-animatable";

//screen-width
const { width: WIDTH } = Dimensions.get("window");

const Login1 = ({ navigation }) => {
  const [spinAnim, setSpinAnim] = useState(new Animated.Value(0));
  const spin = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const [data, setData] = useState({
    username: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });
  //username validation
  const textInputChange = (value) => {
    if (value.trim().length >= 4) {
      setData({
        ...data,
        username: value,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: value,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };
  //password validation
  const passwordChange = (value) => {
    if (value.trim().length >= 6) {
      setData({
        ...data,
        password: value,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: value,
        isValidPassword: false,
      });
    }
  };

  //eyebtn
  const updateSecureEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };
  //validation
  const validate_field = () => {
    if (data.username == "" || data.password == "") {
      return Alert.alert(
        "Invalid Attempt",
        "Please login with Valid Credentials."
      );
    }
    if (!(data.password.length >= 6)) {
      return Alert.alert("Invalid Attempt", " Password is too short.");
    }

    if (!/\S+@\S+\.\S+/.test(data.username)) {
      return Alert.alert(
        "Invalid Credentials",
        "Please provide a valid E-mail."
      );
    }

    return navigation.navigate("ProfileScreen");
  };

  //logo animation
  useEffect(() => {
    Animated.loop(
      Animated.timing(spinAnim, {
        toValue: 1,
        duration: 5000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  });

  return (
    <ImageBackground
      source={require("../images/Login.jpg")}
      style={styles.backgroundContainer}
    >
      <View style={styles.LogoContainer}>
        <Animated.Image
          source={logo}
          style={styles.logo}
          style={{ height: 100, width: 100, transform: [{ rotate: spin }] }}
        />
        <Text style={styles.LogoText}>React-Native</Text>
      </View>

      {/*username*/}
      <View style={styles.inputContainer}>
        <Ionicons
          name={"md-person-outline"}
          size={22}
          color={"black"}
          style={styles.inputIcon}
        />
        <TextInput
          value={data.username}
          style={styles.input}
          placeholder={"E-mail"}
          placeholderTextColor={"black"}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          onChangeText={(value) => textInputChange(value)}
        />
      </View>
      {data.isValidUser ? null : (
        <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={styles.errorMsg}>
            Username must be 4 characters long.
          </Text>
        </Animatable.View>
      )}

      <View style={styles.inputContainer}>
        <Ionicons
          name={"md-lock-closed-outline"}
          size={22}
          color={"black"}
          style={styles.inputIcon}
        />
        <TextInput
          //value= {password}
          style={styles.input}
          placeholder={"Password"}
          secureTextEntry={data.secureTextEntry ? true : false}
          placeholderTextColor={"black"}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          onChangeText={(value) => passwordChange(value)}
        />
        <TouchableOpacity style={styles.btnEye} onPress={updateSecureEntry}>
          {data.secureTextEntry ? (
            <Ionicons name={"md-eye-off-outline"} size={22} color={"black"} />
          ) : (
            <Ionicons name={"md-eye-outline"} size={22} color={"black"} />
          )}
        </TouchableOpacity>
      </View>
      {data.isValidPassword ? null : (
        <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={styles.errorMsg}>
            Password must be 6-8 characters long.
          </Text>
        </Animatable.View>
      )}

      <TouchableOpacity style={styles.btnLogin} onPress={validate_field}>
        <Text style={styles.Text}>Login</Text>
      </TouchableOpacity>
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
  },
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
  inputContainer: {
    marginTop: 12,
  },
  input: {
    width: WIDTH - 175,
    height: 45,
    borderRadius: 45,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: "white",
    color: "black",
    marginHorizontal: 25,
  },
  inputIcon: {
    position: "absolute",
    top: 8,
    left: 37,
  },
  inputCheckIcon: {
    position: "absolute",
    top: 8,
    right: 37,
  },
  btnEye: {
    position: "absolute",
    top: 8,
    right: 37,
  },
  btnLogin: {
    width: WIDTH - 295,
    height: 45,
    borderRadius: 45,
    backgroundColor: "#e95203",
    justifyContent: "center",
    marginTop: 20,
    padding: 25,
    alignItems: "center",
  },
  text: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: 32,
    textAlign: "center",
    fontWeight: "bold",
  },
  ErrorMsg: {
    color: "#3c0b01",
    paddingLeft: 5,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Login;