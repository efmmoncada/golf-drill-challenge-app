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
import { useNavigation } from "@react-navigation/native";
import Buttons from "../src/components/Buttons";
import Icons from "../src/components/Icons"
const { width, height } = Dimensions.get("window");

//for players home screen

export default function Notification({ navigation }) {
  return (
    //osu logo
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.ScreenTitle}>Notifications</Text>
      </View>

      <View style={styles.button_icons}>
        <Pressable style={styles.buttonStyle}>
          <Icons theme="notification" />
          <Text style={styles.buttonTextStyle}>
            A new Drill has been assigned
          </Text>
          <Text style={styles.text_day}>Feb 17, 2022</Text>
        </Pressable>

        <Pressable style={styles.buttonStyle}>
          <Icons theme="notification" />
          <Text style={styles.buttonTextStyle}>
            A new Drill has been assigned
          </Text>
          <Text style={styles.text_day}>Nov 2, 2022</Text>
        </Pressable>

        <Pressable style={styles.buttonStyle}>
          <Icons theme="notification" />
          <Text style={styles.buttonTextStyle}>
            A new Drill has been assigned
          </Text>
          <Text style={styles.text_day}>Dec 5, 2022</Text>
        </Pressable>

        <Pressable style={styles.buttonStyle}>
          <Icons theme="notification" />
          <Text style={styles.buttonTextStyle}>
            A new Drill has been assigned
          </Text>
          <Text style={styles.text_day}>Jan 10, 2022</Text>
        </Pressable>
      </View>
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

  back_button: {
    marginLeft: -(width * 0.75),
    marginTop: height * 0.01,
  },

  ScreenTitle: {
    color: "white",
    marginBottom: height * 0.010,
    marginTop: height * 0.050,
    marginLeft: -(width * 0.35),
    fontSize: 40,
    fontStyle: "normal",
    fontFamily: 'Karma',
  },

  //the group of buttons arrangment
  button_icons: {
    flex: 1,
    margin: 0,
    marginTop: height * 0.01,
    marginLeft: width * 0.21
  },

  buttonStyle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 0.5,
    borderColor: "#fff",
    height: (height * 0.08),
    borderRadius: 10,
    margin: 15,
    width: (width * 0.85),
    marginLeft: -(width * 0.19),
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
    marginLeft: (width * 0.09),
    marginTop: -(height * 0.015),
    fontFamily: 'Karma',
    fontSize: 16
  },

  text_day: {
    marginTop: (height * 0.022),
    marginLeft: -(width * 0.05),
    fontFamily: 'Karma',
    color: '#767170'
  },
});
