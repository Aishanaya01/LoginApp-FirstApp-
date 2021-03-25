import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  TextInput,
  Button,
  View,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Text,
  Dimensions,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

import { LoginSchema } from "../component/Validation";
import LogoAnimation from "../component/LogoAnimation";

import { Ionicons } from "@expo/vector-icons";
const { width: WIDTH } = Dimensions.get("window");

const Login= ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../images/Login.jpg")}
      style={styles.backgroundContainer}
    >
      <LogoAnimation />

      <View style={{ margin: 12 }}>
        <Formik
          initialValues={{ Email: "", Password: "" }} //initial state of email & password_change
          onSubmit={(values) => {
            navigation.navigate("Home");
          }} //values store the user input for us...values is an object
          validationSchema={LoginSchema} //having all validation objects
        >
          {(
            props //a function returning jsx
          ) => (
            <SafeAreaView>
              <View style={styles.inputContainer}>
                <Ionicons
                  name={"md-person-outline"}
                  size={22}
                  color={"black"}
                  style={styles.inputIcon}
                />
                <TextInput
                  style={styles.input}
                  placeholder={"E-mail"}
                  onBlur={props.handleBlur("email")}
                  placeholderTextColor={"black"}
                  onChangeText={props.handleChange("Email")}
                  value={props.values.Email} //if  onsubmit is done this will change the email field with initial value
                />
                <Text style={styles.ErrorMsg}>
                  {props.touched.Email && props.errors.Email}
                </Text>
              </View>

              <View style={styles.inputContainer}>
                <Ionicons
                  name={"md-lock-closed-outline"}
                  size={22}
                  color={"black"}
                  style={styles.inputIcon}
                />
                <TextInput
                  style={styles.input}
                  placeholder={"Password"}
                  placeholderTextColor={"black"}
                  onChangeText={props.handleChange("Password")}
                  value={props.values.Password} //if  onsubmit is done this will change the email field with initial value
                />
                <Text style={styles.ErrorMsg}>
                  {props.touched.Password && props.errors.Password}
                </Text>
              </View>
              <View style={styles.inputContainer}>
                <TouchableOpacity
                  style={styles.btnLogin}
                  onPress={props.handleSubmit}
                >
                  <Text style={styles.Text}>Login</Text>
                </TouchableOpacity>
              </View>
            </SafeAreaView>
          )}
        </Formik>
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
  btnLogin: {
    width: WIDTH - 295,
    marginLeft: 90,
    height: 45,
    borderRadius: 45,
    backgroundColor: "#e95203",
    justifyContent: "center",
    marginTop: 20,
    padding: 25,
    alignItems: "center",
  },
  text: {
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: 32,
    textAlign: "center",
    fontWeight: "bold",
  },
  ErrorMsg: {
    color: "darkred",
    paddingLeft: 5,
    fontSize: 16,
    fontWeight: "normal",
    paddingLeft: 45,
  },
});
export default Login;