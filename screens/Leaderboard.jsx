import { React, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useFonts } from "expo-font";

import Banner from "../src/components/Banner";
import BoardList from "../src/components/BoardList";
import TeamData from "../data/teamData.json";
import BoardImage from "../assets/leaderboard.png";
import Buttons from "../src/components/Buttons";

export default function LeaderBoard() {
  const [boardData, setBoardData] = useState(TeamData.players);
  const [loaded] = useFonts({
    Karma: require("../assets/fonts/Karma-Regular.ttf"),
  });

  return (
    loaded && (
      <View style={styles.container}>
        <View style={styles.banner}>
          <Buttons theme="back" />
          <Buttons theme="filter" />
          <Banner text="Leaderboard" image={BoardImage} />
        </View>
        <View style={styles.label}>
          <Text style={styles.leftText}>Name</Text>
          <Text style={styles.rightText}>Score</Text>
        </View>
        <BoardList listData={boardData} />
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D73F09F5",
  },
  banner: {
    backgroundColor: "#D73F09F5",
  },
  drills: {
    flex: 6,
  },
  label: {
    flexDirection: "row",
    alignItems: "center",
  },
  leftText: {
    backgroundColor: "#D73F09F5",
    color: "white",
    fontSize: 15,
    fontFamily: "Karma",
    marginTop: 20,
    marginLeft: 50,
  },
  rightText: {
    backgroundColor: "#D73F09F5",
    color: "white",
    fontSize: 15,
    fontFamily: "Karma",
    marginTop: 20,
    marginLeft: 225,
  },
});
