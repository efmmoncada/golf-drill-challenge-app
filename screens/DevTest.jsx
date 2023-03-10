import React from "react";
import { View, StyleSheet, Text } from "react-native";
import DrillsCoach from "./DrillsCoach";
import DrillsPlayer from "./DrillsPlayer";
import TeamInfo from "./TeamInfo";
import Drill from "../src/components/Drill";
import * as team from "../data/teamData.json";

export default function DevTest() {
  return <DrillsPlayer />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
