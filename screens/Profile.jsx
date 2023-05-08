import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Pressable,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";
import { useQuery } from "@tanstack/react-query";
import { db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { moderateScale } from "../src/components/scaling_utilities";

import { useFonts } from "expo-font";

import Buttons from "../src/components/Buttons";

const bennyProfilePic = require("../assets/images/bennyprofpic.png");

/**
 *
 * @param {object} props
 * @param {string} props.userID
 */
export default function Profile({ userID = "7lWe1aJgQ7O8ptsEVRrC" }) {
  const [loaded] = useFonts({
    Karma: require("../assets/fonts/Karma-Regular.ttf"),
  });

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["userData", userID],
    queryFn: async () => {
      const data = await getDoc(doc(db, "players", userID));
      if (!data.exists()) throw new Error("Could not fetch player data");
      return data.data();
    },
  });

  if (isLoading) return <Text>Player Data is Loading...</Text>;

  if (isError)
    return (
      <Text>Error occured while fetching player data: {error.message}</Text>
    );

  const { firstName, lastName, email, assignedDrills } = data;

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Buttons theme="backOrange" style={styles.backButton} />
        <Buttons theme="editButton" />
        <View style={styles.pictureContainer}>
          <Image source={bennyProfilePic} style={styles.profileImage} />
          <Text allowFontScaling={false} style={styles.title}>
            {firstName} {lastName}
          </Text>
          <Text allowFontScaling={false} style={styles.subtitle}>
            Player
          </Text>
        </View>
      </View>
      <View style={styles.mainContainer}>
        <Text allowFontScaling={false} style={styles.subtitleWhite}>
          Email
        </Text>
        <View style={styles.textContainer}>
          <Text allowFontScaling={false} style={styles.textGrey}>
            {email}
          </Text>
        </View>
        <Pressable
          style={styles.whiteButton}
          onPress={() => alert("You pressed the reset password button")}
        >
          <Text allowFontScaling={false} style={styles.subtitleGrey}>
            Reset your password
          </Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D73F09",
  },

  profileContainer: {
    paddingTop: moderateScale(20),
    backgroundColor: "#F0E8E8",
    height: moderateScale(280),
  },

  normalText: {
    color: "#767170",
    marginLeft: moderateScale(15),
    marginBottom: 12,
    fontSize: moderateScale(20),
    fontFamily: "Karma",
  },
  title: {
    color: "#767170",
    fontSize: moderateScale(26),
    paddingTop: moderateScale(10),
    fontFamily: "Karma",
  },
  subtitle: {
    color: "#767170",
    fontSize: moderateScale(18),
    paddingBottom: moderateScale(10),
    fontFamily: "Karma",
  },
  subtitleWhite: {
    color: "white",
    fontSize: moderateScale(20),
    fontFamily: "Karma",
  },
  textContainer: {
    width: moderateScale(360),
    height: moderateScale(35),
    backgroundColor: "#F0E8E8",
    borderRadius: 10,
    paddingLeft: 15,
    paddingTop: 4,
  },
  textGrey: {
    color: "#767170",
    fontSize: moderateScale(18),
    fontFamily: "Karma",
  },
  profileImage: {
    borderRadius: 60,
    width: width * 0.28,
    height: height * 0.13,
  },
  pictureContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: moderateScale(30),
    paddingRight: 1,
  },
  mainContainer: {
    paddingLeft: moderateScale(32),
    paddingTop: moderateScale(20),
    paddingBottom: moderateScale(80),
    paddingRight: moderateScale(20),
    marginBottom: moderateScale(40),
  },
  whiteButton: {
    width: moderateScale(340),
    backgroundColor: "#F0E8E8",
    marginLeft: moderateScale(8, 0.6),
    alignItems: "center",
    justifyContent: "center",
    height: moderateScale(45),
    borderRadius: 10,
    marginTop: moderateScale(350, 1.7),
    marginBottom: moderateScale(30),
    paddingTop: moderateScale(0),
  },
  subtitleGrey: {
    color: "#767170",
    fontSize: moderateScale(20),
    fontFamily: "Karma",
  },
});
