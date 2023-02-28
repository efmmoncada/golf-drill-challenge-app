import React from "react";
import { View, StyleSheet, Text } from "react-native";
import DrillsCoach from "./DrillsCoach";
import DrillsPlayer from "./DrillsPlayer";
import TeamInfo from "./TeamInfo";
import Drill from "../src/components/Drill";
import * as team from "../data/teamData.json";
import Headers from "../src/components/Headers";

export default function DevTest() {
  return (
    <View style={styles.container}>
      <Headers />
      <Drill {...team.drills[0]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
