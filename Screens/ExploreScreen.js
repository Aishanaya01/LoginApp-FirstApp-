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
import { Ionicons as Icon } from "@expo/vector-icons";
import styles from "../component/ExploreStyle";
import * as data from "../Apis/Food.json";
import Food from "../component/Food";
import CheckOut from "../component/CheckOut";

const URL = JSON.stringify(data.Url);
const ExploreScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.header}>
        <View style={styles.image}>
          <Image source={require("../Images/cherry.png")} size={100} />
        </View>
        <View style={styles.dotView}>
          <Animated.View style={styles.dot} />
          <Animated.View style={styles.dot} />
          <Animated.View style={styles.dot} />
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.title}>{data.Title}</Text>
        <View style={styles.priceContainer}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.price}>{data.OfferPrice}</Text>
            <Text style={styles.canceledprice}>{data.Price} </Text>
          </View>
          <TouchableOpacity style={styles.btncontainer}>
            <Text style={styles.btntext}>FREE SHIP</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.infoBoxWrapper}>
          <View style={styles.infoBox}>
            <Icon name="happy-outline" size={32} color={"#3ea806"} />
            <Text style={styles.caption}>Safe</Text>
          </View>
          <View style={styles.infoBox}>
            <Icon name="duplicate-outline" size={32} color={"#3ea806"} />
            <Text style={styles.caption}>Quality</Text>
          </View>
          <View style={styles.infoBox}>
            <Icon name="eyedrop-outline" size={32} color={"#3ea806"} />
            <Text style={styles.caption}>Fresh</Text>
          </View>
        </View>
        <View>
          <Text
            style={styles.description}
            numberOfLines={3}
            ellipsizeMode="tail"
          >
            {data.Body}
          </Text>
          {/* <Text style={styles.viewmore}>View more</Text> */}
        </View>
        <View style={styles.addtocart}>
          <Icon name="heart" size={42} color="#fd2d59" />
          <TouchableOpacity style={styles.addtocartbtn}>
            <Text style={styles.addcartbtntext}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.subtitle}>Similar Products</Text>
          <Food />
        </View>
        <View>
          <TouchableOpacity style={styles.Checkoutbtn}>
            <Text style={styles.checkoutbtntext1}>{data.Price}</Text>
            <Text style={styles.checkoutbtntext2}>Check Out</Text>
            <Icon
              name="arrow-forward-outline"
              color="white"
              style={styles.checkouticon}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* <View styles={styles.Checkoutcontainer}>
        <CheckOut />
      </View> */}
    </View>
  );
};

export default ExploreScreen;