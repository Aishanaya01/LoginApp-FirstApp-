import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

function ProfileScreen(props, { route, navigation }) {
  const [img, setImg] = useState("");
  const [data, setData] = useState("");
  const { colors } = useTheme();

  const receivedData = (receivedValue, editedData) => {
    setImg({ receivedValue });
    setData({ editedData });
    console.warn(img.receivedValue);
  };
  const handleData = () => {
    props.navigation.navigate("EditProfile", {
      onSuccess: receivedData,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          {img !== "" ? (
            <Image
              source={{ uri: img.receivedValue }}
              size={20}
              style={{ width: 120, height: 120 }}
              imageStyle={{ borderRadius: 60 }}
            />
          ) : (
            <Image
              source={{ uri: "https://source.unsplash.com/daily" }}
              size={20}
              style={{ width: 120, height: 120 }}
              imageStyle={{ borderRadius: 60 }}
            />
          )}

          <View style={{ marginLeft: 20 }}>
            {img !== "" ? (
              <Text style={({ color: colors.text }, styles.title)}>
                {img.receivedValue.Name}{" "}
              </Text>
            ) : (
              <Text style={({ color: colors.text }, styles.title)}>
                User-Name
              </Text>
            )}
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Ionicons name={"location-outline"} size={18} color="#777777" />
          {img !== "" ? (
            <Text style={{ color: "#777777", marginLeft: 20 }}>
              {img.receivedValue.Country}
            </Text>
          ) : (
            <Text style={{ color: "#777777", marginLeft: 20 }}>
              Default-country name
            </Text>
          )}
        </View>
        <View style={styles.row}>
          <Ionicons name={"call-outline"} size={18} color="#777777" />
          {img !== "" ? (
            <Text style={{ color: "#777777", marginLeft: 20 }}>
              {img.receivedValue.Phone}
            </Text>
          ) : (
            <Text style={{ color: "#777777", marginLeft: 20 }}>
              Default-Phone no
            </Text>
          )}
        </View>
        <View style={styles.row}>
          <Ionicons name={"mail-outline"} size={18} color="#777777" />
          {img !== "" ? (
            <Text style={{ color: "#777777", marginLeft: 20 }}>
              {img.receivedValue.Email}
            </Text>
          ) : (
            <Text style={{ color: "#777777", marginLeft: 20 }}>
              Default-Email
            </Text>
          )}
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
        <View style={styles.infoBox}>
          <Text style={styles.subtitle}>3</Text>
          <Text style={styles.caption}>Your Courses</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.subtitle}>6</Text>
          <Text style={styles.caption}>Wishlist</Text>
        </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableOpacity onPress={handleData}>
          <View style={styles.menuItem}>
            <Ionicons name={"md-person-outline"} size={20} color={"black"} />
            <Text style={styles.menuItemText}>Edit Profile</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.menuItem}>
            <Ionicons name={"md-bulb-outline"} size={20} color={"black"} />
            <Text style={styles.menuItemText}>Our Plans</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.menuItem}>
            <Ionicons name={"md-card-outline"} size={20} color={"black"} />
            <Text style={styles.menuItemText}>Payment History</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.menuItem}>
            <Ionicons
              name={"md-person-add-outline"}
              size={20}
              color={"black"}
            />
            <Text style={styles.menuItemText}>Refer a friend</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.menuItem}>
            <Ionicons name={"md-star-half-outline"} size={20} color={"black"} />
            <Text style={styles.menuItemText}>Give us feedback</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 45,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 15,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: "#dddddddd",
    borderBottomWidth: 1,
    borderTopColor: "#dddddddd",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 100,
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderRightColor: "#dddddddd",
    borderRightWidth: 1,
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: "#777777",
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
});
export default ProfileScreen;