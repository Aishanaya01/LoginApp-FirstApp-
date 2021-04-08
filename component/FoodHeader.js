import React from "react";
import { View, Image, Animated } from "react-native";

import styles from "./ExploreStyle";

const FoodHeader = (props, { data }) => {
  return (
    <View style={styles.header}>
      <View style={styles.image}>
        <Image source={props.data.image} />
      </View>
      <View style={styles.dotView}>
        <Animated.View style={styles.dot} />
        <Animated.View style={styles.dot} />
        <Animated.View style={styles.dot} />
      </View>
    </View>
  );
};
export default FoodHeader;
