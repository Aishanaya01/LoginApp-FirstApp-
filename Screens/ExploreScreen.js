import React from "react";
import { View, StatusBar } from "react-native";

import styles from "../component/ExploreStyle";

import { FoodData as data } from "../Apis/FoodData.js";
import CheckOut from "../component/CheckOut";

import FoodHeader from "../component/FoodHeader";
import FoodFooter from "../component/FoodFooter";

const ExploreScreen = ({ navigation }) => {
  console.log(data)
  return (
     <View style={styles.container}>
     <FoodHeader data={data}/>
     <FoodFooter data={data}/>

    
     {/* <View style={styles.leftContainer}>
                </View>
                 <View style={styles.rightContainer}>
                 </View>  */}
      <StatusBar hidden />

      
      {/* <CheckOut data={data} /> */}
    </View>
  );
};
export default ExploreScreen;
