import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons as Icon } from "@expo/vector-icons";
import styles from "./ExploreStyle";

const BuyNow = () => {
  return (
    <View style={styles.addtocart}>
      

      <TouchableOpacity style={styles.buynowbtn}>
        <Text style={styles.buynowbtntext}>BuyNow</Text>
      </TouchableOpacity>
    </View>
  );
};
    
export default BuyNow;