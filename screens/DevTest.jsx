import React from "react";
import { View, StyleSheet, Text } from "react-native";
import DrillsCoach from "./DrillsCoach";
import DrillsPlayer from "./DrillsPlayer";
import PlayerProgress from "./PlayerProgress";
import TeamInfo from "./TeamInfo";
import Drill from "../src/components/Drill";
import LeaderBoard from "./Leaderboard";

export default function DevTest() {
  // return <DrillsPlayer />
  return <LeaderBoard />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
