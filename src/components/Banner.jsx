import React from "react";
import { StyleSheet, ImageBackground, Text, View, Dimensions} from "react-native";

const {height, width} = Dimensions.get("window");

const Banner = ({text, image}) => {
  return (
    <View style={banner.container}>
      <ImageBackground style={banner.image} source={image}>
        <Text style={banner.heading}>{text}</Text>
      </ImageBackground>
    </View>
  );
};

const banner = StyleSheet.create({
    container: {
        width: "100%",
        height: height * 0.25,
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
