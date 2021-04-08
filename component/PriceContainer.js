import React from "react";
import { View, Text } from "react-native";

import styles from "./ExploreStyles";

export default PriceContainer = (props, { data }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Text style={styles.price}>{props.data.OfferPrice}</Text>
      <Text style={styles.canceledprice}>{props.data.Price} </Text>
    </View>
  );
};