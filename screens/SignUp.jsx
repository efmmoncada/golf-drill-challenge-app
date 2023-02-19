import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  Button,
  StyleSheet,
  View,
  Image,
  Pressable,
  SafeAreaView,
} from "react-native";
import { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import * as ImagePicker from "expo-image-picker";

import Buttons from "../src/components/Buttons";

export default function SignUp() {
  const [loaded] = useFonts({
    Karma: require("../assets/fonts/Karma-Regular.ttf"),
  });

  return (
    loaded && (
      <View style={styles.container}>
        <View style={styles.backButton}>
          <Buttons theme="backOrange" style={styles.backButton} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleFont}>Sign Up</Text>
          <Text style={styles.selectFont}>I am a..</Text>
        </View>
        <View style={styles.selectContainer}>
          <View style={styles.imagepl}>
            <Image
              source={require("../assets/images/coach.png")}
              resizeMode="contain"
              style={{ width: 90, height: 90 }}
            />
          </View>
          <View style={styles.imageco}>
            <Image
              source={require("../assets/images/player.png")}
              resizeMode="contain"
              style={{ width: 90, height: 90 }}
            />
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.playerText}>Player</Text>
          <Text style={styles.coachText}>Coach</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.regButton}
            onPress={() => {
              // Code for first name button press goes here
            }}
          >
            <Text style={styles.buttonFont}>First Name</Text>
          </Pressable>
          <Pressable
            style={styles.regButton}
            onPress={() => {
              // Code for first name button press goes here
            }}
          >
            <Text style={styles.buttonFont}>Last Name</Text>
          </Pressable>
          <Pressable
            style={styles.regButton}
            onPress={() => {
              // Code for first name button press goes here
            }}
          >
            <Text style={styles.buttonFont}>Email</Text>
          </Pressable>
          <Pressable
            style={styles.regButton}
            onPress={() => {
              // Code for first name button press goes here
            }}
          >
            <Text style={styles.buttonFont}>Password</Text>
          </Pressable>
          <Pressable
            style={styles.createButton}
            onPress={() => {
              // Code for first name button press goes here
            }}
          >
            <Text style={styles.buttonFont2}>Create an account</Text>
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
    paddingTop: 50,
    backgroundColor: "#F0E8E8",
  },
  titleContainer: {
    paddingTop: 50,
    backgroundColor: "#F0E8E8",
    height: 220,
    alignItems: "center",
  },
  titleFont: {
    color: "#D73F09",
    fontSize: 40,
    fontFamily: "Karma",
  },
  selectFont: {
    color: "#D73F09",
    fontSize: 20,
    paddingTop: 60,
    fontFamily: "Karma",
  },
  selectContainer: {
    flexDirection: "row",
    paddingLeft: 40,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 40,
    alignItems: "center",
  },
  imagepl: {
    flex: 1,
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  imageco: {
    flex: 1,
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    flexDirection: "row",
    marginLeft: 100,
    marginRight: 80,
    alignItems: "center",
  },
  playerText: {
    flex: 1,
    fontSize: 20,
    fontFamily: "Karma",
    color: "#D73F09",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 120,
  },
  coachText: {
    flex: 1,
    fontSize: 20,
    fontFamily: "Karma",
    color: "#D73F09",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    paddingLeft: 30,
    paddingTop: 20,
    paddingBottom: 40,
    paddingRight: 30,
  },
  regButton: {
    width: 370,
    backgroundColor: "#E9E2E2",
    alignItems: "left",
    height: 50,
    borderRadius: 12,
    paddingTop: 13,
    marginTop: 10,
  },
  createButton: {
    marginLeft: 50,
    width: 270,
    backgroundColor: "#D73F09",
    alignItems: "center",
    height: 50,
    borderRadius: 12,
    paddingTop: 10,
    marginTop: 50,
  },
  buttonFont: {
    marginLeft: 20,
    color: "#767170",
    fontSize: 18,
    fontFamily: "Karma",
  },
  buttonFont2: {
    color: "white",
    fontSize: 22,
    fontFamily: "Karma",
  },
});
