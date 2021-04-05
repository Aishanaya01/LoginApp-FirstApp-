import React, { useState, useEffect, useMemo, useContext } from "react";
import { View, ActivityIndicator } from "react-native";
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import HomeStackScreen from "./HomeStack";
import DrawerNavigator from "../DrawerNavigator";
import BottomNavigator from "../BottomNavigator";
import Logout from "../screens/Logout";
import { AuthContext } from "../component/Context";

const LoginStack = createStackNavigator();
const LoginStackScreen = ({ navigation }) => {
  const [userToken, setUserToken] = useState("");
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      backgroundColor: "#fff",
      text: "#333333",
    },
  };
  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      backgroundColor: "#333333",
      text: "#fff",
    },
  };
  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;
  const authContext = useMemo(() => ({
    signIn: () => {
      setUserToken("abc");
    },
    signOut: () => {
      setUserToken(null);
    },
    signUp: () => {
      setUserToken("abc");
    },
    toggleTheme: () => {
      setIsDarkTheme((isDarkTheme) => !isDarkTheme);
    },
  }));

  return (
    <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={theme}>
          {userToken == null ? (
            <Logout />
          ) : (
            <LoginStack.Navigator>
              <LoginStack.Screen name="Login" component={LoginScreen} />
              <LoginStack.Screen
                name="Home"
                component={DrawerNavigator}
                options={{ headerShown: false }}
              />
            </LoginStack.Navigator>
          )}
        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
  );
};

export default LoginStackScreen;