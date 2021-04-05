import React, { useContext } from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import BottomNavigator from "./BottomNavigator";

import DrawerContent from "./Screens/DrawerScreens/DrawerContent";
import Feedback from "./Screens/DrawerScreens/Feedback";

import ManageSub from "./Screens/DrawerScreens/ManageSub";
import Notification from "./Screens/DrawerScreens/Notification";
import PaymentHistory from "./Screens/DrawerScreens/PaymentHistory";
import Plans from "./Screens/DrawerScreens/Plans";
import ReferFriend from "./Screens/DrawerScreens/ReferFriend";
import TalkTrainer from "./Screens/DrawerScreens/TalkTrainer";

const Drawer = createDrawerNavigator();
const DrawerNavigator = (props, { navigation }) => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={BottomNavigator} />
      <Drawer.Screen name="Feedback" component={Feedback} />
      <Drawer.Screen name="ManageSub" component={ManageSub} />
      <Drawer.Screen name="PaymentHistory" component={PaymentHistory} />
      <Drawer.Screen name="Plans" component={Plans} />
      <Drawer.Screen name="ReferFriend" component={ReferFriend} />
      <Drawer.Screen name="TalkTrainer" component={TalkTrainer} />
      <Drawer.Screen name="Notification" component={Notification} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;