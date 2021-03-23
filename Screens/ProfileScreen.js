import React from "react";
import { SafeAreaView } from "react-native";


import { dummyData } from "../Apis/MusicData";

export function ProfileScreen({ navigation }) {
  return (
    <SafeAreaView>
      <Carousel data={dummyData} />
    </SafeAreaView>
  );
}

export default ProfileScreen;