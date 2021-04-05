import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Dimensions,
  Animated,
  Image,
  FlatList,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import styles from "./ExploreStyle";
const CheckOut = () => {
  return (
    <View style={styles.viewsize}>
      <Text>$5.6</Text>
      <TouchableOpacity>
        <Text>Check Out</Text>
      </TouchableOpacity>
    </View>
  );
};
export default CheckOut;