import React from "react";
import { SafeAreaView } from "react-native";

import Carousel from "../component/Carousel";
import { dummyData } from "../Apis/Data";

export function ProfileScreen({ navigation }) {
  return (
    <SafeAreaView>
      <Carousel data={dummyData} />
    </SafeAreaView>
  );
}

export default ProfileScreen;