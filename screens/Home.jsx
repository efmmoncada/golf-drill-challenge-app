//import { StatusBar } from 'expo-status-bar';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  Pressable,
  Dimensions
} from "react-native";
import { SafeAreaView } from "react-native";
//import assets from "./assets/images";
import { StatusBar } from "react-native";
import Buttons from "../src/components/Buttons";
import { useNavigation } from "@react-navigation/native";
import Icons from "../src/components/Icons"
const { width, height } = Dimensions.get("window");

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
        <Icons theme="OSUlogo"/>
        <View style={styles.button_icons}>
          <Pressable
            style={styles.buttonStyle}
            onPress={() => {
              navigateToDrills();
            }}
          >
            <Icons theme="practiceDrill"/>
            <Text style={styles.buttonTextStyle}>Practice Drill</Text>
          </Pressable>

          <Pressable
            style={styles.buttonStyle}
            onPress={() => {
              navigateToProgress();
            }}
          >
            <Icons theme="drillProgress"/>
            <Text style={styles.buttonTextStyle}>Drill Progress</Text>
          </Pressable>

          <Pressable
            style={styles.buttonStyle}
            onPress={() => {
              navigateToLeader();
            }}
          >
            <Icons theme="leaderboard"/>
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
    backgroundColor: "#D73F09",
  },
  OSU_image: {
    flex: 1,
    width: (width * 0.4),
    height: (height * 0.19),
    marginTop: 13,
    marginLeft: 25,
    marginRight: 25,
  },

  //the group of buttons arrangment
  button_icons: {
    flex: 1,
    margin: 0,
    marginTop: -(height * 0.05),
    padding: width * 0.07,
  },

  buttonStyle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 0.5,
    borderColor: "#fff",
    height: height * 0.07,
    borderRadius: 10,
    margin: width * 0.02,
    width: (width * 0.70),
    marginLeft: -(width * 0.23),
  },
  buttonTextStyle: {
    color: "#767170",
    marginBottom: 4,
    marginLeft: (width * 0.05),
    marginTop: (height * 0.01),
    fontFamily: "Karma",
    fontSize: 22,
  },
});
