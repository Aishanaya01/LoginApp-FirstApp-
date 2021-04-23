import React, { useState, useEffect } from "react";
import {View} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
const CoachScreen = () => {
  return (
    <View>
     <AntDesign name="back" size={24} color="black" />
     <View>
     <AntDesign name="search1" size={24} color="black" />
     <AntDesign name="cart" size={24} color="black" />
     </View>
</View>
  );
}
 export default CoachScreen;