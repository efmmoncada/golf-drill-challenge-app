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
import { moderateScale } from "../src/components/scaling_utilities";

const { height, width } = Dimensions.get("window");

export default function Drills() {
  const [drillData, setDrillData] = useState(TeamData.drills);

  return (
    <SafeAreaView style={styles.container}>
      <Banner text="Drills" image={Fuenmayor} />
      <View style={styles.containerMargin}>
        <DrillList listData={drillData} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerMargin: {
    marginTop: moderateScale(15),
  },
  container: {
    flex: 1,
    backgroundColor: "#D73F09F5",
  },
  drills: {
    flex: 6,
  },
});
