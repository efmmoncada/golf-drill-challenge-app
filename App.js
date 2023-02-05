import { React, useState } from "react";
import { View, StyleSheet } from "react-native";
import Profile from './screens/Profile';
import TeamData from "./data/teamData.json";
import Banner from "./src/components/Banner";
import DrillList from "./src/components/DrillList";

export default function App() {
  const [drillData, setDrillData] = useState(TeamData.drills);
  return (
    <View style={styles.container}>
        <Profile />
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
