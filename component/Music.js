/*import React, { useState, useEffect, useMemo } from "react";
import { Alert, FlatList, SafeAreaView, ActivityIndicator } from "react-native";

import { MusicData } from "../apis/MusicData";
import MusicItem from "./MusicItem";

const Music = ({ navigation }) => {
  const [music, setMusic] = useState([]);
  //const [loading, setLoading] = useState(true);

  function getMusicFromAPI() {
    MusicData.get("search?term=Michael+jackson")
      .then(async function (response) {
        setMusic(response.data);
        //setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        //Alert.alert("Error", "Invalid Search:" + error);
      });
  }
  useEffect(() => {
    getMusicFromAPI();
  }, []);

  {
    /*const getMusicFromAPI = async () => {
    try {
      const response = await MusicData.get("search?term=Michael+jackson");
      setMusic(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      //Alert.alert("Error", "Invalid Search:" + error);
    }
  };
  }

  if (!music) {
    return null;
  }

  if (loading) {
    return (
      <SafeAreaView>
        <ActivityIndicator
          size="large"
          justifyCotent="center"
          alignItem="center"
          loading={loading}
          color="black"
        />
      </SafeAreaView>
    );
  } else {
    <SafeAreaView>
      <FlatList
        data={music.results}
        keyExtractor={keyExtractor}
        renderItem={render}
        //onRefresh={() => void}
      />
    </SafeAreaView>;
  }

  const functiontoRender = ({ item }) => {
    return <MusicItem item={item} />;
  };
  const render = useMemo(() => functiontoRender, []);

  const keyExtractor = (item, index) => index.toString();
  return (
    <SafeAreaView>
      <FlatList
        data={music.results}
        keyExtractor={keyExtractor}
        renderItem={render}
        //onRefresh={() => void}
      />
    </SafeAreaView>
  );
};

export default Music;*/