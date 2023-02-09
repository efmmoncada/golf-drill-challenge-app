import React from "react";
import { StyleSheet, ImageBackground, Text, View, Dimensions} from "react-native";
import Buttons from "./Buttons";

/**
 *
 * @param {object} props
 * @param {string} props.text
 * @param {string} props.image
 * @param {string} props.themeOne
 * @param {string} props.themeTwo
 *
 */
const Banner = ({text, image, themeOne, themeTwo}) => {
    return (
        <View style={banner.container}>
            <ImageBackground style={banner.image} source={image}>
                <Buttons theme={themeOne}/>
                <Buttons theme={themeTwo}/>
                <Text style={banner.heading}>{text}</Text>
            </ImageBackground>
        </View>
    );
};

const {height, width} = Dimensions.get("window");

const banner = StyleSheet.create({
    container: {
        width: "100%",
        height: height * 0.25,
    },
    image: {
        flex: 1,
    },
    heading: {
        fontFamily: 'Karma',
        position: "absolute",
        bottom: 0,
        fontSize: 36,
        color: "#F6F3F3",
        marginLeft: 20,
    },
});

export default Banner;