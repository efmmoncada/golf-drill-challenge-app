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
import { moderateScale } from "./scaling_utilities";
import { useRoute } from "@react-navigation/native";
import Header from "./Headers";


export default function Drill() {
  const [showPopup, setShowPopup] = useState(false);

  const route = useRoute();
  const id = route.params.id || "YLHvka5gK5wHtP9NQWTZ"

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

  const { name, media, longDesc, type, scoreUnits } = data;

  return (
    <View style={styles.container}>
      <Header />
      <Banner text={name} image={Fuenmayor} />

      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <View style={styles.media}>
          <ImageCarrousel images={media} width={moderateScale(330)} />
        </View>

        <Text allowFontScaling={false} style={styles.description}>
          {longDesc}
        </Text>

        <Pressable
          style={styles.button}
          onPress={() => setShowPopup(true)}
        >
          <Text allowFontScaling={false} style={styles.inputText}>
            Input Score
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e6e6e6",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  media: {
    marginTop: moderateScale(40),
    height: moderateScale(250),
    width: moderateScale(330),
    borderRadius: 10,
  },
  description: {
    textAlign: "center",
    margin: moderateScale(30),
    fontFamily: "Karma",
    color: "#767170",
    fontSize: moderateScale(15),
  },
  button: {
    flex: 1,
    backgroundColor: "#fff",
    padding: moderateScale(20),
    borderRadius: 10,
    marginBottom: moderateScale(40),
  },
  inputText: {
    fontFamily: "Karma",
    color: "#767170"
  },
});
