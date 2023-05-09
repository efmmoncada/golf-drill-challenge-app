//import { StatusBar } from 'expo-status-bar';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Dimensions,
  PixelRatio,
} from "react-native";
import Buttons from "../src/components/Buttons";
import Icons from "../src/components/Icons";
import React from "react";
import { moderateScale } from "../src/components/scaling_utilities";

const scaleFactor = PixelRatio.getFontScale();
const fontSize = 16 * scaleFactor;

const buttonHeight = 55 * scaleFactor;
//const buttonWidth = 360 * scaleFactor;

const screenWidth = Dimensions.get("window").width;
const buttonWidth = screenWidth * 0.87; //90%

export default function Notification({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Text allowFontScaling={false} style={styles.ScreenTitle}>
          Notifications
        </Text>
      </View>
      <View style={styles.button_icons}>
        <Pressable style={styles.buttonStyle}>
          <Icons theme="notification"/>
          <Text allowFontScaling={false} style={styles.buttonTextStyle}>
              A new Drill has been assigned
            </Text>
            <Text allowFontScaling={false} style={styles.text_day}>
              Feb 17, 2022
            </Text>
        </Pressable>
      </View>
      <View style={styles.button_icons}>
        <Pressable style={styles.buttonStyle}>
          <Icons theme="notification" />
          <Text allowFontScaling={false} style={styles.buttonTextStyle}>
              A new Drill has been assigned
            </Text>
            <Text allowFontScaling={false} style={styles.text_day}>
              {" "}
              Feb 17, 2022
            </Text>
        </Pressable>
      </View>

      <View style={styles.button_icons}>
        <Pressable style={styles.buttonStyle}>
          <Icons theme="notification" />
          <Text allowFontScaling={false} style={styles.buttonTextStyle}>
              A new Drill has been assigned
            </Text>
            <Text allowFontScaling={false} style={styles.text_day}>
              {" "}
              Feb 17, 2022
            </Text>
        </Pressable>
      </View>

      <View style={styles.button_icons}>
        <Pressable style={styles.buttonStyle}>
          <Icons theme="notification" />
          <Text allowFontScaling={false} style={styles.buttonTextStyle}>
              A new Drill has been assigned
            </Text>
            <Text allowFontScaling={false} style={styles.text_day}>
              {" "}
              Feb 17, 2022
            </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //take up the whole screen
    backgroundColor: "#D73F09",
    alignItems: "center",
    justifyContent: "center",
  },
  ScreenTitle: {
    color: "white",
    fontSize: moderateScale(40),
    fontStyle: "normal",
    fontFamily: "Karma",
    right: moderateScale(60, 1.2),
    marginTop: -moderateScale(100)
  },

  button_icons: {
    width: moderateScale(350, 0.03), //this is % because size was off for iphone 12 min this fixed it.
    height: moderateScale(100),
    marginRight: moderateScale(15, 14),
  },
  buttonStyle: {
    backgroundColor: "white",
    height: moderateScale(65),
    width: moderateScale(370, 0.8),
    borderRadius: moderateScale(10),
    top: moderateScale(50),
  },
  buttonTextStyle: {
    fontSize: moderateScale(13),
    left: moderateScale(180, 0.9),
    fontFamily: "Karma",
    color: "#767170",
    marginTop: -moderateScale(65, 0.2),
  },
  text_day: {
    fontSize: moderateScale(13),
    left: moderateScale(280, 0.8),
    fontFamily: "Karma",
    color: "#767170"
  }
});
