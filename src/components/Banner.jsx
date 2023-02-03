import React from "react";
import Fuenmayor from "../assets/MateoFuenmayor.jpeg";
import { StyleSheet, ImageBackground, Text, View } from "react-native";

const Banner = () => {
  return (
    <View style={banner.container}>
      <ImageBackground style={banner.image} source={Fuenmayor}>
        <Text style={banner.heading}>Drills</Text>
      </ImageBackground>
    </View>
  );
};

const banner = StyleSheet.create({
  container: {
    flex: 2,
    width: "100%",
  },
  image: {
    flex: 1,
  },
  heading: {
    position: "absolute",
    bottom: 0,
    fontSize: 36,
    color: "#F6F3F3",
    marginLeft: 20,
  },
});

export default Banner;
