import React from "react";
import { StyleSheet, ImageBackground, Text, View } from "react-native";

const Banner = ({text, image, style}) => {
  return (
    <View style={{ width: "100%", ...style} }>
      <ImageBackground style={banner.image} source={image}>
        <Text style={banner.heading}>{text}</Text>
      </ImageBackground>
    </View>
  );
};

const banner = StyleSheet.create({
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
