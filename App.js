import { React, useState } from "react";
import { StyleSheet, View } from "react-native";
import TeamData from "./data/teamData.json";
import Banner from "./components/Banner";
import DrillList from "./components/DrillList";

export default function App() {
  const [drillData, setDrillData] = useState(TeamData.drills);
  return (
    <View style={styles.container}>
      <Banner />
      <DrillList listData={drillData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D73F09F5",
  },
  drills: {
    flex: 6,
  },
});
