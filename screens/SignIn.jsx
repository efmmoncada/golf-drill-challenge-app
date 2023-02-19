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
import { useNavigation } from "@react-navigation/native";

import Buttons from "../src/components/Buttons";

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
    paddingTop: 50,
    backgroundColor: "#F0E8E8",
  },
  titleContainer: {
    paddingTop: 10,
    backgroundColor: "#F0E8E8",
    height: 170,
    alignItems: "center",
  },
  titleFont: {
    color: "#D73F09",
    fontSize: 40,
    fontFamily: "Karma",
  },
  selectContainer: {
    flexDirection: "row",
    paddingLeft: 40,
    paddingTop: 200,
    paddingBottom: 0,
    paddingRight: 40,
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
    marginLeft: 100,
    marginRight: 80,
    alignItems: "center",
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 24,
    paddingTop: 10,
    paddingBottom: 40,
    paddingRight: 30,
  },
  regButton: {
    width: 180,
    backgroundColor: "#F0E8E8",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 12,
    paddingTop: 8,
    marginTop: 10,
  },
  buttonFont: {
    color: "#D73F09",
    fontSize: 28,
    fontFamily: "Karma",
  },
  buttonFont2: {
    marginLeft: -140,
    paddingTop: 20,
    color: "#767170",
    fontSize: 14,
    fontFamily: "Karma",
  },
  buttonFont3: {
    marginLeft: -210,
    paddingTop: 20,
    color: "#D73F09",
    fontSize: 22,
    fontFamily: "Karma",
  },
});
