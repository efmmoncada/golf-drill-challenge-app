import React from "react";
import { StyleSheet, View } from "react-native";
import { moderateScale } from "./scaling_utilities";

export default function Header({ height = 100 }) {
  const header = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "white",
      borderWidth: 0.5,
      borderColor: "#fff",
      height: moderateScale(height),
      margin: 0,
      width: moderateScale(700),
      marginTop: -moderateScale(50),
      marginLeft: -moderateScale(10),
    },
  });

  return <View style={header.container}></View>;
}
