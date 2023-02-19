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
import * as ImagePicker from "expo-image-picker";

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
            <Text style={styles.title}>{teamData.players[9].name}</Text>
            <Text style={styles.subtitle}>Player</Text>
          </View>
        </View>
        <View style={styles.mainContainer}>
          <Text style={styles.subtitleWhite}>Email Address</Text>
          <View style={styles.textContainer2}>
            <Text styles={styles.textGrey}>{teamData.players[9].email}</Text>
          </View>
          <Text style={styles.subtitleWhite}>Phone Number</Text>
          <View style={styles.textContainer}>
            <Text style={styles.textGrey}>123-456-7890</Text>
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
    paddingTop: 50,
    backgroundColor: "#F0E8E8",
    height: 300,
  },
  normalText: {
    color: "#767170",
    marginLeft: 34,
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
    paddingBottom: 8,
    fontFamily: "Karma",
  },
  subtitleWhite: {
    paddingTop: 30,
    color: "white",
    fontSize: 20,
    fontFamily: "Karma",
  },
  textContainer: {
    width: 360,
    height: 45,
    backgroundColor: "#F0E8E8",
    borderRadius: 10,
    paddingLeft: 15,
    paddingTop: 9,
  },
  textContainer2: {
    width: 360,
    height: 45,
    backgroundColor: "#F0E8E8",
    borderRadius: 10,
    paddingLeft: 15,
    paddingTop: 13,
  },
  textGrey: {
    color: "black",
    fontSize: 20,
    fontFamily: "Karma",
  },
  profileImage: {
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 60,
    marginBottom: 10,
    width: 115,
    height: 115,
  },
  pictureContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20,
    paddingRight: 1,
  },
  mainContainer: {
    paddingLeft: 30,
    paddingTop: 20,
    paddingBottom: 40,
    paddingRight: 30,
  },
  whiteButton: {
    width: 360,
    backgroundColor: "#F0E8E8",
    alignItems: "center",
    height: 40,
    borderRadius: 10,
    paddingTop: 7,
    marginTop: 460,
  },
  subtitleGrey: {
    color: "#767170",
    fontSize: 20,
    fontFamily: "Karma",
  },
});
