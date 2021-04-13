import React from "react";
import { View, Text } from "react-native";

import styles from "./ExploreStyle";

const  PriceContainer = (props, { data }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Text style={styles.price}>{props.data.price}</Text>
     
    </View>
  );
};
export default PriceContainer;
