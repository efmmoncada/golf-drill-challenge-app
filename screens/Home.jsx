//import { StatusBar } from 'expo-status-bar';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native";
//import assets from "./assets/images";
import { StatusBar } from "react-native";
import Buttons from "../src/components/Buttons";
import { useNavigation } from "@react-navigation/native";

//for players home screen

export default function HomeScreen() {
  const navigation = useNavigation();

  function navigateToDrills() {
    navigation.navigate("Drills");
  }
  function navigateToProgress() {
    navigation.navigate("PlayerProgress");
  }
  function navigateToLeader() {
    navigation.navigate("Leaderboard");
  }

  return (
    //osu logo
    <SafeAreaView style={styles.container}>
      <Buttons theme="backHome" style={styles.backHome} />
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
          <Pressable
            style={styles.buttonStyle}
            onPress={() => {
              navigateToDrills();
            }}
          >
            <Image
              source={require("../assets/Icons/Practice_Drill_icon.png")}
              style={styles.buttonImageIconStyle}
            />
            <Text style={styles.buttonTextStyle}>Practice Drill</Text>
          </Pressable>

          <Pressable
            style={styles.buttonStyle}
            onPress={() => {
              navigateToProgress();
            }}
          >
            <Image
              source={require("../assets/Icons/Drill_Progress_icon.png")}
              style={styles.buttonImageIconStyle}
            />

            <Text style={styles.buttonTextStyle}>Drill Progress</Text>
          </Pressable>

          {/* <Pressable style={styles.buttonStyle} activeOpacity={0.5}>
          <Image
            source={require(  '../assets/Icons/Course_Map_icon.png')}
            style={styles.buttonImageIconStyle}
          />

          <Text style={styles.buttonTextStyle}>Course Map</Text>
          </Pressable> */}

          <Pressable
            style={styles.buttonStyle}
            onPress={() => {
              navigateToLeader();
            }}
          >
            <Image
              source={require("../assets/Icons/Leaderboard_icon.png")}
              style={styles.buttonImageIconStyle}
            />

            <Text style={styles.buttonTextStyle}>Leaderboard</Text>
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
    backgroundColor: "#DB5525",
  },
  OSU_image: {
    flex: 1,
    width: 160,
    height: 160,
    marginTop: 13,
    marginLeft: 25,
    marginRight: 25,
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
    marginTop: -60,
    padding: 30,
  },

  buttonStyle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 0.5,
    borderColor: "#fff",
    height: 65,
    borderRadius: 10,
    margin: 15,
    width: 300,
    marginLeft: -100,
  },

  buttonImageIconStyle: {
    padding: 10,
    margin: 30,
    height: 35,
    width: 35,
    resizeMode: "stretch",
  },
  buttonTextStyle: {
    color: "black",
    marginBottom: 4,
    marginLeft: 10,
  },
});
