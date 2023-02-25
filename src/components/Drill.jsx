import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  Dimensions,
  ScrollView,
} from "react-native";
import { doc, getDoc } from "firebase/firestore";
import { useQuery } from "@tanstack/react-query";
import { db } from "../../firebaseConfig";
import Banner from "./Banner";
import ImageCarrousel from "./ImageCarrousel";
import Fuenmayor from "../../assets/MateoFuenmayor.jpeg";

/**
 *
 * @param {object} props
 * @param {string} props.id
 *
 */
export default function Drill({ id = "BTCRzmKJWOuPMMUdIz8K" }) {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["drill", id],
    queryFn: async () => {
      const data = await getDoc(doc(db, "drills", id));
      if (!data.exists()) throw new Error("Could not fetch data");
      return data.data();
    },
  });

  const { height, width } = Dimensions.get("window");

  if (isLoading) return <Text>Data is Loading...</Text>;

  if (isError) return <Text>{error.message}</Text>;

  return (
    <View style={styles.container}>
      <Banner text={data.name} image={Fuenmayor} />

      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <View style={styles.media}>
          <ImageCarrousel images={data.media} width={width * 0.9} />
        </View>

        <Text style={styles.description}>{data.longDesc}</Text>

        <Pressable
          style={styles.button}
          onPress={() => console.log("input score button pressed")}
        >
          <Text>Input Score</Text>
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
    marginTop: 20,
    height: height * 0.35,
    width: width * 0.9,
  },
  description: {
    textAlign: "center",
    margin: 30,
  },
  button: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    marginBottom: 80,
  },
});
