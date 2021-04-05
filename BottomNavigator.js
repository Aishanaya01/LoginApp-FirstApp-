import * as React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

import HomeStackScreen from "./Stack/HomeStack";

import ExploreScreen from "./Screens/ExploreScreen";
import CoachScreen from "./Screens/CoachScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import ProfileStackScreen from "./Stack/ProfileStack";

const Tab = createMaterialBottomTabNavigator();

const BottomNavigator = ({ navigation }) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="white"
      barStyle={{ backgroundColor: "white" }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name={"md-home"} size={22} color={"white"} />
          ),
          tabBarColor: "#526F35",
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({ color }) => (
            <Ionicons name={"md-search"} size={22} color={"white"} />
          ),
          tabBarColor: "#4A7023",
        }}
      />
      <Tab.Screen
        name="Coach"
        component={CoachScreen}
        options={{
          tabBarLabel: "Coach",
          tabBarIcon: ({ color }) => (
            <Ionicons name={"md-book"} size={22} color={"white"} />
          ),
          tabBarColor: "#3B5323",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <Ionicons name={"md-person"} size={22} color={"white"} />
          ),
          tabBarColor: "#636F57",
        }}
      />
    </Tab.Navigator>
  );
};