import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
  AsyncStorage,
  Text,
} from "react-native";
import * as Animatable from "react-native-animatable";

const Splash = () => {
  return (
    <View>
      <ImageBackground
        source={require("../Images/Sp.jpg")}
        style={{ width: "100%", height: "100%", opacity: 0.9 }}
      >
        <View
          style={{
            width: "100%",
            height: "100%",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Animatable.Image
            animation="bounceIn"
            duration="2000"
            source={require("../assets/atom.png")}
            style={{
              width: 100,
              height: 100,
              borderRadius: 30,
              backgroundColor: "#fafaff",
              opacity: 0.9,
            }}
          />
          <Text style={{ color: "white" }}>Loading...</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 22,
    backgroundColor: "#008BEF",
    alignItems: "center",
    justifyContent: "center",
  },
});