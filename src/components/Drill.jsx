import React from "react";
import { View, StyleSheet, Text, ImageBackground, Pressable } from "react-native";
import Banner from "./Banner";

/**
 *
 * @param {object} props
 * @param {number} props.id
 * @param {string} props.name
 * @param {string} props.description
 * @param {string[]} props.media
 * @param {string} props.headerImg
 * @param {Date} props.dueDate
 * @param {string} props.type
 *
 */
export default function Drill({ id, name, description, media, headerImg, dueDate, type }) {


    return (
        <View style={styles.container}>
            <Banner text={name} />

            <View style={styles.media}></View>

            <Text style={styles.description}>{description}</Text>

            <Pressable style={styles.button} onPress={() => console.log("input score button pressed")}>
                <Text>Input Score</Text>
            </Pressable>

        </View>
   )
}




const styles = StyleSheet.create({
    container: {
        backgroundColor: "#D73F09",
        flex: 1,
    },
    headerImg: {
        height: 100,
        borderColor: "#000",
        borderWidth: 3,
        flex: 1,
    },
    headerText: {
        color: '#fff',
        marginStart: "auto",
        flex: 1,
        position: "absolute",
    },
    title: {
        fontSize: 30,
        marginTop: "auto"
    },
    subtitle: {
        fontSize: 15,
    },
    media: {
        width: "auto",
        margin: 30,
        height: 200,
        borderColor: "#000",
        borderWidth: 5,
    },
    description: {
        textAlign: "center",
        margin: 30,
    },
    button: {
        backgroundColor: "#fff",
        alignSelf: "center",
        padding: 20,
        borderRadius: 10,
        marginTop: "auto",
        marginBottom: 80

    }

});