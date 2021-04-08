import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons as Icon } from "@expo/vector-icons";
import styles from "../ExploreStyle";

const AddtoCart = () => {
  return (
    <View style={styles.addtocart}>
      <TouchableOpacity onPress={() => {}}>
        <Icon name="heart" size={42} color="#fd2d59" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.addtocartbtn}>
        <Text style={styles.addcartbtntext}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};
export default AddtoCart;