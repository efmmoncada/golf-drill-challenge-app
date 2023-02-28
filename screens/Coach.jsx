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
  Dimensions
} from "react-native";
import { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";

import Buttons from "../src/components/Buttons";
const { width, height } = Dimensions.get("window");

export default function Coach() {
  const [loaded] = useFonts({
    Karma: require("../assets/fonts/Karma-Regular.ttf"),
  });
  const navigation = useNavigation();

  function navigateToHome() {
    navigation.navigate("Home");
  }
  return (
    loaded && (
      <View style={styles.container}>
        <View style={styles.backButton}>
          <Buttons theme="backOrange" style={styles.backButton} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleFont}>Welcome</Text>
        </View>
        <View style={styles.selectContainer}>
          <View style={styles.imageco}>
            <Image
              source={require("../assets/images/coach.png")}
              resizeMode="contain"
              style={{ width: width * 0.4, height: height * 0.16 }}
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.regButton}
            onPress={() => {
              // Code for email button press goes here
            }}
          >
            <Text style={styles.buttonFont}>Email</Text>
          </Pressable>
          <Pressable
            style={styles.regButton}
            onPress={() => {
              // Code for password button press goes here
            }}
          >
            <Text style={styles.buttonFont}>Password</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              // Code for account button press goes here
            }}
          >
            <Text style={styles.buttonFont2}>Forgot your password?</Text>
          </Pressable>
          <Pressable
            style={styles.loginButton}
            onPress={() => {
              navigateToHome();
            }}
          >
            <Text style={styles.buttonFont3}>Login</Text>
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
    paddingTop: height * 0.07,
    backgroundColor: "#F0E8E8",
  },
  titleContainer: {
    paddingTop: height * 0.093,
    backgroundColor: "#F0E8E8",
    height: height * 0.155,
    alignItems: "center",
  },
  titleFont: {
    color: "#D73F09",
    fontSize: 40,
    fontFamily: "Karma",
  },
  selectContainer: {
    flexDirection: "row",
    paddingLeft: width * 0.07,
    paddingTop: height * 0.01,
    paddingBottom: height * 0.01,
    paddingRight: width * 0.07,
    alignItems: "center",
  },
  imageco: {
    flex: 1,
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    flexDirection: "row",
    marginLeft: width * 0.3,
    marginRight: width * 0.3,
    alignItems: "center",
  },
  buttonContainer: {
    paddingLeft: width * 0.07,
    paddingTop: height * 0.04,
    paddingBottom: height * 0.05,
    paddingRight: width * 0.07,
  },
  regButton: {
    width: width * 0.85,
    backgroundColor: "#E9E2E2",
    alignItems: "left",
    height: height * 0.05,
    borderRadius: 12,
    paddingTop: 13,
    marginTop: 10,
  },
  loginButton: {
    marginLeft: width * 0.19,
    width: width * 0.48,
    backgroundColor: "#D73F09",
    alignItems: "center",
    height: height * 0.06,
    borderRadius: 16,
    paddingTop: 10,
    marginTop: height * 0.1,
  },
  buttonFont: {
    marginLeft: width * 0.05,
    color: "#767170",
    fontSize: 18,
    fontFamily: "Karma",
  },
  buttonFont2: {
    paddingTop: 10,
    color: "#767170",
    fontSize: 14,
    fontFamily: "Karma",
  },
  buttonFont3: {
    color: "white",
    fontSize: 28,
    fontFamily: "Karma",
  },
});
