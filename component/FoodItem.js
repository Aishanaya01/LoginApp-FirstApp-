import React, { useState, useEffect } from "react";
import { TouchableOpacity, View, Image } from "react-native";
import * as data from "../Apis/FoodData";
import styles from "./ExploreStyle";
const FoodItem = (props, { item }) => {
  return (
    <View style={styles.cardView}>
      <TouchableOpacity onPress={() => {}}>
        {/* <Image
          source={require("../Images/Login.jpg")}
          style={{ width: 100, height: 100 }}
          resizeMode="contain"
        /> */}
        <View style={{ flex: 1 }}>
          <Text style={{ color: "orange" }}> {item.Name1} </Text>
          
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default FoodItem;
