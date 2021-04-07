import React from "react";
import { SafeAreaView } from "react-native";

/*import Carousel from "../component/Carousel";*/
import { dummyData } from "../Apis/MusicData";

export function HomeScreen({ navigation }) {
  return (
    <SafeAreaView>
      <Carousel data={dummyData} />
    </SafeAreaView>
  );
}

export default HomeScreen;