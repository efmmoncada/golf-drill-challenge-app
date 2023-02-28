import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  Dimensions,
  ScrollView,
} from "react-native";
import Banner from "./Banner";
import ImageCarrousel from "./ImageCarrousel";
import Fuenmayor from "../../assets/MateoFuenmayor.jpeg";

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
export default function Drill({
  id,
  name,
  description,
  media,
  headerImg,
  dueDate,
  type,
}) {
  const { height, width } = Dimensions.get("window");

  return (
    <View style={styles.container}>
      <Banner text={name} image={Fuenmayor} />

      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <View style={styles.media}>
          <ImageCarrousel images={media} width={width * 0.8} />
        </View>

        <Text style={styles.description}>{description}</Text>

        <Pressable
          style={styles.button}
          onPress={() => console.log("input score button pressed")}
        >
          <Text style={styles.inputText}>Input Score</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const { height, width } = Dimensions.get("screen");
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D73F09",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  media: {
    marginTop: height * 0.04,
    height: height * 0.30,
    width: width * 0.8,
    borderRadius: 10,
  },
  description: {
    textAlign: "center",
    margin: 30,
    fontFamily: "Karma",
    color: "white",
    fontSize: 15
  },
  button: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    marginBottom: height * 0.04,
  },
  inputText: {
    fontFamily: "Karma"
  }
});
