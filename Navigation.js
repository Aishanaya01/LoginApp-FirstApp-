import "react-native-gesture-handler";
import React from "react";
import { View, Icon, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

//importing Screens
import Login1 from "./Screens/Login";
import ProfileScreen from "./Screens/ProfileScreen";
import SettingScreen from "./Screens/SettingsScreen";
import CoachScreen from "./Screens/CoachScreen";
import ExploreScreen from "./Screens/ExploreScreen";
import HomeScreen from "./Screens/HomeScreen";
import EditProfileScreen from "./Screens/EditProfileScreen";
/*import BottomPopUp from "./Screens/BottomPopUp";*/

import EditProfile from "./Screens/DrawerScreens/EditProfile";
import Feedback from "./Screens/DrawerScreens/Feedback";
import Logout from "./Screens/DrawerScreens/Logout";
import Notification from "./Screens/DrawerScreens/Notification";
import PaymentHistory from "./Screens/DrawerScreens/PaymentHistory";
import Plans from "./Screens/DrawerScreens/Plans";
import ReferFriend from "./Screens/DrawerScreens/ReferFriend";
import TalkTrainer from "./Screens/DrawerScreens/TalkTrainer";
import ManageSub from "./Screens/DrawerScreens/ManageSub";
import Screen from "./component/Screen";

const LoginStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      tabBarLabel: "Login Page",
      color: "#1A5CAD",
      //tabBarActiveTintColor
    },
  },
});

//profile-stack
const ProfileStack = createStackNavigator({
  ProfileScreen: {
    screen: ProfileScreen,
    navigationOptions: (props) => ({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            props.navigation.toggleDrawer();
          }}
        >
          <Ionicons name={"md-menu"} size={30} color={"black"} />
        </TouchableOpacity>
      ),
    }),
  },
  Screen: {
    screen: Screen,
  },
});

//bottomTab
const BottomTabPage = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: () => {
          return <Ionicons name={"md-home"} size={22} color={"white"} />;
        },
        tabBarColor: "#526F35",
      },
    },
    Explore: {
      screen: ExploreScreen,
      navigationOptions: {
        tabBarIcon: () => {
          return <Ionicons name={"md-search"} size={22} color={"white"} />;
        },
        headerTitle: "Explore",
        tabBarColor: "#4A7023",
      },
    },
    Coach: {
      screen: CoachScreen,
      navigationOptions: {
        tabBarIcon: () => {
          return <Ionicons name={"md-book"} size={22} color={"white"} />;
        },
        tabBarColor: "#3B5323",
      },
    },

    Profile: {
      screen: ProfileStack,
      navigationOptions: {
        tabBarIcon: () => {
          return <Ionicons name={"md-person"} size={22} color={"white"} />;
        },
        tabBarColor: "#636F57",
      },
    },
  },
  {
    initialRouteName: "Profile",
    activeColor: "white",
    inactiveColor: "black",
    barStyle: { backgroundColor: "black" },
  }
);

//Drawer-navigation
const DrawerNavigator = createDrawerNavigator(
  {
    Settings: {
      screen: BottomTabPage,
      navigationOptions: {
        drawerLabel: "Settings",
      },
    },
    EditProfile: {
      screen: EditProfile,
      navigationOptions: {
        drawerLabel: "Edit profile",
        fontWeight: "bold",
        contentOptions: {
          activeTintColor: "#e91e63",
          itemsContainerStyle: {
            marginVertical: 0,
          },
        },
        drawerIcon: () => {
          return (
            <Ionicons name={"md-pencil-outline"} size={20} color={"black"} />
          );
        },
        //tabBarActiveTintColor
      },
    },
    PaymentHistory: {
      screen: PaymentHistory,
      navigationOptions: {
        drawerLabel: "Payment History",
        drawerStyle: {
          fontsize: 20,
        },
        drawerIcon: () => {
          return (
            <Ionicons name={"md-card-outline"} size={20} color={"black"} />
          );
        },
        //tabBarActiveTintColor
      },
    },
    OurPlans: {
      screen: Plans,
      navigationOptions: {
        drawerLabel: "Our Plans",
        drawerIcon: () => {
          return (
            <Ionicons name={"md-bulb-outline"} size={20} color={"black"} />
          );
        },
        //tabBarActiveTintColor
      },
    },
    Notification: {
      screen: Notification,
      navigationOptions: {
        drawerLabel: "Notifications",
        drawerIcon: () => {
          return (
            <Ionicons
              name={"md-notifications-outline"}
              size={20}
              color={"black"}
            />
          );
        },
        //tabBarActiveTintColor
      },
    },
    ReferAFriend: {
      screen: ReferFriend,
      navigationOptions: {
        drawerLabel: "Refer a friend",
        drawerIcon: () => {
          return (
            <Ionicons
              name={"md-person-add-outline"}
              size={20}
              color={"black"}
            />
          );
        },
        //tabBarActiveTintColor
      },
    },
    ManageSubscription: {
      screen: ManageSub,
      navigationOptions: {
        drawerLabel: "Manage subscription",
        drawerIcon: () => {
          return (
            <Ionicons name={"md-cash-outline"} size={20} color={"black"} />
          );
        },
        //tabBarActiveTintColor
      },
    },
    GiveUsFeedBack: {
      screen: Feedback,
      navigationOptions: {
        drawerLabel: "Give us feedback",
        drawerIcon: () => {
          return (
            <Ionicons name={"md-star-half-outline"} size={20} color={"black"} />
          );
        },
        //tabBarActiveTintColor
      },
    },
    TalkToTrainer: {
      screen: TalkTrainer,
      navigationOptions: {
        drawerLabel: "Talk to a Trainer",
        drawerIcon: () => {
          return (
            <Ionicons
              name={"md-chatbubbles-outline"}
              size={20}
              color={"black"}
            />
          );
        },
        //tabBarActiveTintColor
      },
    },
    LogOut: {
      screen: Logout,
      navigationOptions: {
        drawerLabel: "Log out",
        drawerIcon: () => {
          return (
            <Ionicons name={"md-log-out-outline"} size={20} color={"red"} />
          );
        },
        //tabBarActiveTintColor
      },
    },
  },
  {
    drawerWidth: 300,
    drawerBackgroundColor: "#fff",
    drawerPosition: "left",
  }
);

const AppNavigator = createSwitchNavigator({
  Login: { screen: LoginStack },
  Tabs: { screen: DrawerNavigator },
});

export default createAppContainer(AppNavigator);