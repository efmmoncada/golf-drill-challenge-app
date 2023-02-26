import { React, useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Pressable,
  Image,
  SafeAreaView,
} from "react-native";
import Banner from "../src/components/Banner";
import DrillList from "../src/components/DrillList";
import TeamData from "../data/teamData.json";
import Fuenmayor from "../assets/MateoFuenmayor.jpeg";
import Headers from "../src/components/Headers";

const { height, width } = Dimensions.get("window");

export default function Drills() {
  const [drillData, setDrillData] = useState(TeamData.drills);

  return (
    <SafeAreaView style={styles.container}>
     <Headers/>   
     <View style={styles.ImageStyle}>
      <Banner text="Drills" image={Fuenmayor} />
      </View>

      <DrillList listData={drillData} />

      

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D73F09F5",
    
  },

  ImageStyle: {
    bottom: 45,

  },
  drills: {
    flex: 6,
  },
   

});
