//import { StatusBar } from 'expo-status-bar';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { SafeAreaView } from "react-native";
//import assets from "./assets/images";
import { StatusBar } from "react-native";
import { color } from "react-native-reanimated";
import Buttons from "../src/components/Buttons";
import Banner from "../src/components/Banner";
import Headers from "../src/components/Headers";


const { width, height } = Dimensions.get("window");

//for players home screen

export default function PlayerProgress({ navigation }) {
  return (
    //osu logo
    <View style={styles.container}>
      <Headers/>   
      
      <View style={styles.backButton}>
          <Buttons theme="back" />
          </View>
          
        <Image
          source={require("../assets/images/ProgressScreenImg.png")}
          style={styles.page_image}
        />
       
  
<View>
<Text style={styles.ScreenTitle}>Benny Beaver’s Drill Progress</Text>
</View>
 

      <View>
        <Image
          source={require("../assets/images/progressGraph.png")}
          style={styles.progress_graphImg}
        />
      </View>
{/** 
      <View>
        <TouchableOpacity activeOpacity={0.5}>
          <Image
            source={require("../assets/Icons/BackArrow_icon.png")}
            style={styles.back_button}
          />
        </TouchableOpacity>
      </View>
  */}
      <View>
        <TouchableOpacity activeOpacity={0.5}>
          <Image
            source={require("../assets/Icons/Menu_Icon.png")}
            style={styles.Menu_button}
          />
        </TouchableOpacity>

      <View> 

      <Text style={styles.ProgressLog}>Progress Log</Text>
          <Text style={styles.CompletedDrills}>
            Completed Drills: 
          </Text>

      </View>


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

        <TouchableOpacity style={styles.buttonStyle_More} activeOpacity={0.5}>
          <Text style={styles.buttonTextStyle}>               Show more</Text>
           
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"#DB5525",
  },
 
  backButton: {
    width: width * 0.15,
    height: height * 0.043,
    bottom: -5,
    right: 170,
    zIndex: 2,
  },

  Menu_button: {
    width: 43,
    height: 43,  
    bottom: 400,
    left: 195,
  },

  ProgressLog:{
     //top: 4,
    bottom: 80,
    color: "white",

  },

  CompletedDrills:{


  },

  ScreenTitle: {
    color: "white",
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
    margin: 10,
    width: 300,
    right: 50,
    top: -120,
  },

  buttonStyle_More: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 0.5,
    borderColor: "#fff",
    borderRadius: 10,
    height: 45,
    width: 300,
    bottom: 130,
    margin: 15,
    right: 54,
  },
  buttonTextStyle: {
    color: "black",
    marginBottom: 4,
    marginLeft: 50,
  },

  buttonTextStyle_day: {
    //marginTop: 40,
    top: 20,
    right: 90,
  },

  page_image: {
    height: 165,
    width:  630,
    bottom: 40,
    marginTop: -3,
  },
  progress_graphImg: {
    height: 200,
    width: 450,
    bottom: 41, 
  },
});
