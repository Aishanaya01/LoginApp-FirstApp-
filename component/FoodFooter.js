import React, { useState, useEffect, useCallback } from "react";
import { View, Text, TouchableOpacity, Image, Animated } from "react-native";

import styles from "./ExploreStyle";
import Description from "./Description";
import PriceContainer from "./PriceContainer";


import Cart from "./Cart";
import BuyNow from "./BuyNow";
import Food from "./Food";

const FoodFooter = (props, { data }) => {
  return (
    <View style={styles.footer}>
    <Description data={props.data} />
      <Text style={styles.title}>{props.data.title}</Text>
      
      <View style={styles.priceContainer}>
        <PriceContainer data={props.data} />
    
      </View>
      <View style={styles.cart}>
        <Cart data={props.data} />
        <BuyNow data={props.data} />
        
      </View>
      </View>
   

    

    
     
  )
   };
export default FoodFooter;