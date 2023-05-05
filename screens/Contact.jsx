import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Pressable,
  Text,
  View,
  Image,
  TextInput,
  SafeAreaView,
} from "react-native";
import { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import teamData from "../data/teamData.json";
import { moderateScale } from "../src/components/scaling_utilities";

import Buttons from "../src/components/Buttons";

export default function Contact() {
  //let teamData = require('../data/teamData.json');
  const [loaded] = useFonts({
    Karma: require("../assets/fonts/Karma-Regular.ttf"),
  });

  return (
    loaded && (
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <Buttons theme="backOrange" style={styles.backButton} />
          <Image
            source={require("../assets/images/profile_example.jpg")}
            style={styles.profileImage}
          />
          <View style={styles.pictureContainer}>
            <Text allowFontScaling={false} style={styles.title}>
              {teamData.players[9].name}
            </Text>
            <Text allowFontScaling={false} style={styles.subtitle}>
              Player
            </Text>
          </View>
        </View>
        <View style={styles.mainContainer}>
          <Text allowFontScaling={false} style={styles.subtitleWhite}>
            Email Address
          </Text>
          <View style={styles.textContainer2}>
            <Text allowFontScaling={false} styles={styles.textGrey}>
              {teamData.players[9].email}
            </Text>
          </View>
          <Text allowFontScaling={false} style={styles.subtitleWhite}>
            Phone Number
          </Text>
          <View style={styles.textContainer}>
            <Text allowFontScaling={false} style={styles.textGrey}>
              123-456-7890
            </Text>
          </View>
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
    paddingTop: moderateScale(50),
    backgroundColor: "#F0E8E8",
    height: moderateScale(320, 0.3),
  },
  normalText: {
    color: "#767170",
    marginLeft: moderateScale(34),
    marginBottom: moderateScale(20),
    fontSize: 25,
    fontFamily: "Karma",
  },
  title: {
    color: "#767170",
    fontSize: moderateScale(30),
    paddingTop: moderateScale(10),
    fontFamily: "Karma",
  },
  subtitle: {
    color: "#767170",
    fontSize: moderateScale(20),
    paddingBottom: moderateScale(8),
    fontFamily: "Karma",
  },
  subtitleWhite: {
    paddingTop: moderateScale(15),
    color: "white",
    fontSize: moderateScale(20),
    fontFamily: "Karma",
  },
  textContainer: {
    width: moderateScale(360, 0.9),
    height: moderateScale(45),
    backgroundColor: "#F0E8E8",
    borderRadius: 10,
    paddingLeft: moderateScale(15),
    paddingTop: moderateScale(9),
  },
  textContainer2: {
    width: moderateScale(360, 0.9),
    height: moderateScale(45),
    backgroundColor: "#F0E8E8",
    borderRadius: 10,
    paddingLeft: moderateScale(15),
    paddingTop: moderateScale(13),
  },
  textGrey: {
    color: "black",
    fontSize: moderateScale(18),
    color: "#767170",
    fontFamily: "Karma",
  },
  profileImage: {
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 60,
    marginBottom: moderateScale(10),
    width: moderateScale(115),
    height: moderateScale(115),
  },
  pictureContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20,
    paddingRight: 1,
  },
  mainContainer: {
    paddingLeft: moderateScale(30),
    paddingTop: moderateScale(20),
    paddingBottom: moderateScale(40),
    paddingRight: moderateScale(30),
  },
  whiteButton: {
    width: moderateScale(360, 0.9),
    backgroundColor: "#F0E8E8",
    alignItems: "center",
    height: moderateScale(40),
    borderRadius: 10,
    paddingTop: 7,
    marginTop: moderateScale(460),
  },
  subtitleGrey: {
    color: "#767170",
    fontSize: moderateScale(20),
    fontFamily: "Karma",
  },
});
