//import { StatusBar } from 'expo-status-bar';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native";
import { moderateScale } from "../src/components/scaling_utilities";
//import assets from "./assets/images";
import { StatusBar } from "react-native";

export default function Coaches_HomeScreen({ navigation }) {
  return (
    //osu logo
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/images/OSU_img_logo.png")}
        style={styles.OSU_image}
      >
        <View>
          <Image
            source={require("../assets/images/OSU_logo.png")}
            style={styles.OSU_logo}
          />
        </View>

        <View style={styles.button_icons}>
          <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5}>
            <Image
              source={require("../assets/Icons/Practice_Drill_icon.png")}
              style={styles.buttonImageIconStyle}
            />
            <Text allowFontScaling={false} style={styles.buttonTextStyle}>
              Drills
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5}>
            <Image
              source={require("../assets/Icons/Drill_Progress_icon.png")}
              style={styles.buttonImageIconStyle}
            />

            <Text allowFontScaling={false} style={styles.buttonTextStyle}>
              Team Progress
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5}>
            <Image
              source={require("../assets/Icons/Team_info_icon.png")}
              style={styles.buttonImageIconStyle}
            />

            <Text allowFontScaling={false} style={styles.buttonTextStyle}>
              Team Info
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5}>
            <Image
              source={require("../assets/Icons/Leaderboard_icon.png")}
              style={styles.buttonImageIconStyle}
            />

            <Text allowFontScaling={false} style={styles.buttonTextStyle}>
              Leaderboard
            </Text>
          </TouchableOpacity>
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
    backgroundColor: "#D73F09",
  },
  OSU_image: {
    flex: 1,
    width: moderateScale(160),
    height: moderateScale(150),
    marginTop: moderateScale(20),
    marginLeft: moderateScale(25),
    marginRight: moderateScale(25),
  },

  OSU_logo: {
    width: 183,
    height: 183,
    marginTop: 93,
    marginLeft: -4,
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

  buttonImageIconStyle: {
    padding: 10,
    margin: 30,
    height: 35,
    width: 35,
    resizeMode: "stretch",
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
