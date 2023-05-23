//import { StatusBar } from 'expo-status-bar';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native";
import { moderateScale } from "../src/components/scaling_utilities";
//import assets from "./assets/images";
import { StatusBar } from "react-native";
import {
  DrillProgressIcon,
  LeaderboardIcon,
  OSUBeaverLogo,
  OSUBlockLetters,
  PracticeDrillIcon,
  TeamInfoIcon,
} from "../assets/Icons";
import Icons, { IconOptions } from "../src/components/Icons";
import { useNavigation } from "@react-navigation/native";

export default function Coaches_HomeScreen() {
  const navigation = useNavigation();
  return (
    //osu logo
    <SafeAreaView style={styles.container}>
      <ImageBackground source={OSUBeaverLogo} style={styles.OSU_image}>
        <Icons theme={IconOptions.OsuBlockLetters} />

        <View style={styles.button_icons}>
          <Pressable
            style={styles.buttonStyle}
            onPress={() => navigation.navigate("DrillsCoach")}
          >
            <Icons theme={IconOptions.PracticeDrill} />
            <Text allowFontScaling={false} style={styles.buttonTextStyle}>
              Drills
            </Text>
          </Pressable>

          <Pressable
            style={styles.buttonStyle}
            onPress={() => navigation.navigate("PlayerProgress")}
          >
            <Icons theme={IconOptions.DrillProgress} />

            <Text allowFontScaling={false} style={styles.buttonTextStyle}>
              Team Progress
            </Text>
          </Pressable>

          <Pressable
            style={styles.buttonStyle}
            onPress={() => navigation.navigate("TeamProgress")}
          >
            <Icons theme={IconOptions.TeamInfoIcon} />

            <Text allowFontScaling={false} style={styles.buttonTextStyle}>
              Team Info
            </Text>
          </Pressable>

          <Pressable
            style={styles.buttonStyle}
            onPress={() => navigation.navigate("Leaderboard")}
          >
            <Icons theme={IconOptions.Leaderboard} />

            <Text allowFontScaling={false} style={styles.buttonTextStyle}>
              Leaderboard
            </Text>
          </Pressable>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e6e6e6",
  },
  OSU_image: {
    flex: 1,
    width: moderateScale(160),
    height: moderateScale(150),
    marginTop: moderateScale(80),
    marginLeft: moderateScale(25),
    marginRight: moderateScale(25),
  },

  //the group of buttons arrangment
  button_icons: {
    flex: 1,
    margin: 0,
    marginTop: -moderateScale(24),
    padding: moderateScale(33),
  },

  buttonStyle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 0.5,
    borderColor: "#fff",
    height: moderateScale(65),
    borderRadius: 10,
    margin: moderateScale(10),
    width: moderateScale(288),
    marginLeft: -moderateScale(90),
  },
  buttonTextStyle: {
    color: "#767170",
    marginBottom: 4,
    marginLeft: moderateScale(12),
    marginTop: moderateScale(8),
    fontFamily: "Karma",
    fontSize: moderateScale(20),
  },
});
