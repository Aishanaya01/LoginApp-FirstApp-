import React, { useState, useEffect } from "react";
import { TouchableOpacity, View, Image } from "react-native";
import * as data from "../Apis/Food.json";

const FoodItem = (props, { item }) => {
  return (
    <View style={styles.cardView}>
      <TouchableOpacity onPress={() => {}}>
        <Image
          source={require("../Images/Login.jpg")}
          style={{ width: 100, height: 100 }}
          resizeMode="contain"
        />
        <View style={{ flex: 1 }}>
          <Text style={{ color: "red" }}> {data.Name1} </Text>
          <Text style={{ color: "blue" }}>{data.Name2} </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#a8dfd2",
  },
  header: {
    flex: 1 / 1.5,
    justifyContent: "center",
    alignContent: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 30,
  },
  image: {
    flex: 1,
    margin: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  dotView: {
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  dot: {
    height: 10,
    width: 10,
    backgroundColor: "#fff",
    margin: 8,
    borderRadius: 5,
  },

  title: {
    color: "#04011f",
    fontSize: 28,
    fontWeight: "bold",
  },
  priceContainer: {
    flexDirection: "row",
  },
  price: {
    color: "#3ea806",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    margin: 8,
  },
  canceledprice: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    color: "#8899b1",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
    margin: 12,
  },
  btncontainer: {
    marginLeft: 100,
    backgroundColor: "#0095ff",
    width: 130,
    height: 40,
    padding: 8,
    borderRadius: 10,
  },
  btntext: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  infoBoxWrapper: {
    borderBottomColor: "transparent",
    borderBottomWidth: 12,
    borderTopColor: "transparent",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 100,
  },
  infoBox: {
    margin: -10,
    width: "35%",
    marginRight: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRightColor: "transparent",
    flexDirection: "row",
    borderRightWidth: 1,
  },
  caption: {
    fontSize: 20,
    color: "black",
    fontWeight: "normal",
    marginLeft: 10,
  },
  description: {
    color: "#888c97",
    fontSize: 18,
  },
  //   viewmore: {
  //     flexDirection: "row",
  //   },
  addtocart: {
    margin: 10,
    marginTop: 16,
    marginRight: 10,
    flexDirection: "row",
    marginBottom: 30,
  },
  addtocartbtn: {
    backgroundColor: "#64b903",
    width: WIDTH - 140,
    marginLeft: 30,
    borderRadius: 10,
  },
  addcartbtntext: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
  },
  subtitle: {
    color: "#04011f",
    fontSize: 24,
    fontWeight: "bold",
  },
  Checkoutbtn: {
    backgroundColor: "#64b903",
    height: 60,
    width: "100%",
    borderRadius: 15,
    marginTop: 130,
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowRadius: 3,
    flexDirection: "row",
  },
  checkoutbtntext1: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
    padding: 15,
  },
  checkoutbtntext2: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "right",
    padding: 15,
    marginLeft: 150,
  },
  checkouticon: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "right",
    paddingTop: 15,
  },
  cardView: {
    flex: 1,
    width: WIDTH - 20,
    height: HEIGHT / 3,
    backgroundColor: "white",
    margin: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
});
export default FoodItem;