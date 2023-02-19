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
//import assets from "./assets/images";
import { StatusBar } from "react-native";

//for players home screen

export default function HomeScreen({ navigation }) {
  return (
    //osu logo
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          source={require("../assets/images/ProgressScreenImg.png")}
          style={styles.page_image}
        />
      </View>

      {/*

<View>
<Text style={styles.ScreenTitle}>Benny Beaver’s Drill Progress</Text>
</View>


*/}

      <View>
        <Image
          source={require("../assets/images/progressGraph.png")}
          style={styles.progress_graphImg}
        />
      </View>

      <View>
        <TouchableOpacity activeOpacity={0.5}>
          <Image
            source={require("../assets/Icons/BackArrow_icon.png")}
            style={styles.back_button}
          />
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity activeOpacity={0.5}>
          <Image
            source={require("../assets/Icons/Menu_Icon.png")}
            style={styles.Menu_button}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.button_icons}>
        <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5}>
          <Text style={styles.buttonTextStyle}>Drill name 1</Text>
          <Text style={styles.buttonTextStyle_day}>
            Score: 2 Duration: 1hr. Date: 11/15/22
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5}>
          <Text style={styles.buttonTextStyle}>Drill name 2</Text>
          <Text style={styles.buttonTextStyle_day}>
            Score: 5 Duration: 2hr. Date: 11/15/22
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5}>
          <Text style={styles.buttonTextStyle}>Drill name 3</Text>
          <Text style={styles.buttonTextStyle_day}>
            Score: 5 Duration: 2hr. Date: 11/15/22
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5}>
          <Text style={styles.buttonTextStyle}>Drill name 4</Text>
          <Text style={styles.buttonTextStyle_day}>
            Score: 5 Duration: 2hr. Date: 11/15/22
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },

  back_button: {
    width: 43,
    height: 43,
    marginLeft: -170,
    marginTop: -345,
    padding: 10,
  },

  Menu_button: {
    width: 43,
    height: 43,
    marginLeft: 300,
    marginTop: -345,
    padding: 10,
  },

  ScreenTitle: {
    color: "white",
    // marginBottom: 4,
    marginRight: 50,
    marginTop: -100,
    fontSize: 24,
    fontStyle: "normal",
  },

  //the group of buttons arrangment
  button_icons: {
    flex: 1,
    margin: 0,
    marginTop: 80,
    padding: 10,
    marginLeft: 100,
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
    marginLeft: 50,
  },

  buttonTextStyle_day: {
    marginTop: 40,
    marginLeft: -90,
  },

  page_image: {
    height: 165,
    width: 430,
    marginTop: -50,
  },
  progress_graphImg: {
    height: 200,
    width: 450,
  },
});
