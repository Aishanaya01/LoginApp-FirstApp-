import React, { useState, useEffect, useCallback } from "react";
import { View, Text } from "react-native";
import styles from "./ExploreStyle";

const  Description = (props, { data }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Text style={styles.description}>{props.data.description}</Text>
     
    </View>
  );
};
export default Description;
