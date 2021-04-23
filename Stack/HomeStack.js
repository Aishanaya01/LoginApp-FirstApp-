import * as React from "react";
import {
  View,
  Icon,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerNavigator from "./DrawerNavigator";

import HomeScreen from "../Screens/HomeScreen";

const HomeStack = createStackNavigator();

const HomeStack = ({ navigation }) => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.toggleDrawer();
              }}
            >
              <Ionicons name={"md-menu"} size={30} color={"black"} />
            </TouchableOpacity>
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};
export default HomeStack;