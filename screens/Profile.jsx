import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Pressable,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";
import { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import * as ImagePicker from "expo-image-picker";

const { width, height } = Dimensions.get("window");

import Buttons from "../src/components/Buttons";

const bennyProfilePic = require("../assets/images/bennyprofpic.png");

export default function Profile() {
  const [loaded] = useFonts({
    Karma: require("../assets/fonts/Karma-Regular.ttf"),
  });

  return (
    loaded && (
      <View style={styles.container}>
        <Text style={styles.title}> </Text>
        <View style={styles.profileContainer}>
          <Buttons theme="backOrange" style={styles.backButton} />
          <Buttons theme="editButton" />
          <View style={styles.pictureContainer}>
            <Image source={bennyProfilePic} style={styles.profileImage} />
            <Text style={styles.title}>Benny Beaver</Text>
            <Text style={styles.subtitle}>Player</Text>
          </View>
        </View>
        <View style={styles.mainContainer}>
          <Text style={styles.subtitleWhite}>Email</Text>
          <View style={styles.textContainer}>
            <Text style={styles.textGrey}>bennythebeaver@oregonstate.edu</Text>
          </View>
          <Pressable
            style={styles.whiteButton}
            onPress={() => alert("You pressed the reset password button")}
          >
            <Text style={styles.subtitleGrey}>Reset your password</Text>
          </Pressable>
        </View>
        <StatusBar style="auto" />
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D73F09",
  },


  profileContainer: {
    paddingTop: height * 0.06,
    backgroundColor: "#F0E8E8",
    height: height * 0.31,
  },
  normalText: {
    color: "#767170",
    marginLeft: width * 0.01,
    marginBottom: 12,
    fontSize: 25,
    fontFamily: "Karma",
  },
  title: {
    color: "#767170",
    fontSize: 30,
    paddingTop: 10,
    fontFamily: "Karma",
  },
  subtitle: {
    color: "#767170",
    fontSize: 20,
    paddingBottom: 10,
    fontFamily: "Karma",
  },
  subtitleWhite: {
    color: "white",
    fontSize: 20,
    fontFamily: "Karma",
  },
  textContainer: {
    width: width * 0.83,
    height: height * 0.04,
    backgroundColor: "#F0E8E8",
    borderRadius: 10,
    paddingLeft: 15,
    paddingTop: 4,
  },
  textGrey: {
    color: "#767170",
    fontSize: 20,
    fontFamily: "Karma",
  },
  profileImage: {
    borderRadius: 60,
    width: width * 0.28,
    height: height * 0.13,
  },
  pictureContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 30,
    paddingRight: 1,
  },
  mainContainer: {
    paddingLeft: width * 0.07,
    paddingTop: height * 0.02,
    paddingBottom: height * 0.04,
    paddingRight: width * 0.07,
  },
  whiteButton: {
    width: width * 0.8,
    marginLeft: width * 0.02,
    backgroundColor: "#F0E8E8",
    alignItems: "center",
    height: 40,
    borderRadius: 10,
    marginTop: height * 0.43,
    marginBottom: height * 0.2,
    paddingTop: height * 0.008
  },
  subtitleGrey: {
    color: "#767170",
    fontSize: 20,
    fontFamily: "Karma",
  },
});
