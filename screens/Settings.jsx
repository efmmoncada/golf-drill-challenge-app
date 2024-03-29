import { StatusBar } from "expo-status-bar";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { moderateScale } from "../src/components/scaling_utilities";

import Buttons from "../src/components/Buttons";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

export default function Settings() {
  const [_, setUser] = useContext(AuthContext);
  const [loaded] = useFonts({
    Karma: require("../assets/fonts/Karma-Regular.ttf"),
  });

  return (
    loaded && (
      <View style={styles.container}>
        <Buttons theme="close" />
        <Text allowFontScaling={false} style={styles.title}>
          Settings
        </Text>
        <Pressable onPress={() => alert("You pressed General.")}>
          <Text allowFontScaling={false} style={styles.normalText}>
            General
          </Text>
        </Pressable>
        <Pressable>
          <Text allowFontScaling={false} style={styles.normalText}>
            Account Info
          </Text>
        </Pressable>
        <Pressable>
          <Text allowFontScaling={false} style={styles.normalText}>
            Notifications
          </Text>
        </Pressable>
        <Pressable>
          <Text allowFontScaling={false} style={styles.normalText}>
            History & privacy
          </Text>
        </Pressable>
        <Pressable>
          <Text allowFontScaling={false} style={styles.normalText}>
            Updates
          </Text>
        </Pressable>
        <Pressable>
          <Text allowFontScaling={false} style={styles.normalText}>
            About
          </Text>
        </Pressable>
        <Pressable onPress={() => {
            signOut(auth);
            setUser(null);
          }}>
          <Text allowFontScaling={false} style={styles.normalText}>
            Log Out
          </Text>
        </Pressable>
        <StatusBar style="auto" />
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6e6e6",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  normalText: {
    color: "#767170",
    marginLeft: moderateScale(36),
    marginBottom: moderateScale(10),
    fontSize: moderateScale(27),
    fontFamily: "Karma",
  },
  title: {
    color: "#D73F09",
    marginBottom: moderateScale(35),
    marginTop: moderateScale(90),
    marginLeft: moderateScale(27),
    fontSize: moderateScale(45),
    fontFamily: "Karma",
  },
});
