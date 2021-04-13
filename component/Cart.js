import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons as Icon } from "@expo/vector-icons";
import styles from "./ExploreStyle";

const Cart = () => {
  return (
    <View style={styles.cart}>
     

      <TouchableOpacity style={styles.cartbtn}>
        <Text style={styles.cartbtntext}>Cart</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Cart;