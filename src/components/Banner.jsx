import React from "react";
import Fuenmayor from "../../assets/MateoFuenmayor.jpeg";
import { StyleSheet, ImageBackground, Text, View } from "react-native";

/**
 *
 * @param {object} props
 * @param {string} props.text
 */
const Banner = ({ text }) => {
  return (
    <View style={banner.container}>
      <ImageBackground style={banner.image} source={Fuenmayor}>
        <Text style={banner.heading}>{text}</Text>
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
