import { React, useState } from "react";
import { View, StyleSheet } from "react-native";
import Banner from "../src/components/Banner";
import DrillList from "../src/components/DrillList";
import TeamData from "../data/teamData.json";

export default function DrillsCoach() {
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
