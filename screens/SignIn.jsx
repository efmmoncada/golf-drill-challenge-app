import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  Button,
  StyleSheet,
  View,
  Image,
  Pressable,
  Dimensions,
} from "react-native";
import { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import { moderateScale } from "../src/components/scaling_utilities";

const { width, height } = Dimensions.get("window");

export default function SignIn() {
  const [loaded] = useFonts({
    Karma: require("../assets/fonts/Karma-Regular.ttf"),
  });
  const navigation = useNavigation();

  function navigateToSignUp() {
    navigation.navigate("SignUp");
  }
  function navigateToPlayer() {
    navigation.navigate("Player");
  }
  function navigateToCoach() {
    navigation.navigate("Coach");
    ``;
  }
  return (
    loaded && (
      <View style={styles.container}>
        <View style={styles.selectContainer}>
          <View style={styles.imageco}>
            <Image
              source={require("../assets/images/main.png")}
              resizeMode="contain"
              style={{ width: 80, height: 80 }}
            />
          </View>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleFont}>Oregon State Golf</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonFont3}>Log in as</Text>
          <Pressable
            style={styles.regButton}
            onPress={() => {
              navigateToPlayer();
            }}
          >
            <Text style={styles.buttonFont}>Player</Text>
          </Pressable>
          <Pressable
            style={styles.regButton}
            onPress={() => {
              navigateToCoach();
            }}
          >
            <Text style={styles.buttonFont}>Coach</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              navigateToSignUp();
            }}
          >
            <Text style={styles.buttonFont2}>Create an Account</Text>
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
    paddingTop: height * 0.05,
    backgroundColor: "#F0E8E8",
  },
  titleContainer: {
    paddingTop: 10,
    backgroundColor: "#F0E8E8",
    height: moderateScale(170),
    alignItems: "center",
  },
  titleFont: {
    color: "#D73F09",
    fontSize: moderateScale(40),
    fontFamily: "Karma",
  },
  selectContainer: {
    flexDirection: "row",
    paddingLeft: moderateScale(30),
    paddingTop: moderateScale(180),
    paddingRight: moderateScale(15),
    alignItems: "center",
  },
  imageco: {
    flex: 1,
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: moderateScale(40),
    paddingTop: moderateScale(10),
    paddingBottom: moderateScale(20),
    paddingRight: moderateScale(30),
  },
  regButton: {
    width: moderateScale(300),
    backgroundColor: "#E9E2E2",
    alignItems: "center",
    justifyContent: "center",
    height: moderateScale(60),
    borderRadius: 12,
    paddingTop: moderateScale(5),
    marginTop: moderateScale(10),
  },
  buttonFont: {
    color: "#D73F09",
    fontSize: moderateScale(28),
    fontFamily: "Karma",
  },
  buttonFont2: {
    marginLeft: -moderateScale(145),
    paddingTop: moderateScale(15),
    color: "#767170",
    fontSize: moderateScale(14),
    fontFamily: "Karma",
  },
  buttonFont3: {
    marginLeft: -moderateScale(200),
    paddingTop: moderateScale(30),
    color: "#D73F09",
    fontSize: moderateScale(22),
    fontFamily: "Karma",
  },
});
