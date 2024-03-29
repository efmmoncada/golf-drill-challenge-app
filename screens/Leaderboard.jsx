import { React, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useFonts } from "expo-font";
import Banner from "../src/components/Banner";
import BoardList from "../src/components/BoardList";
import TeamData from "../data/teamData.json";
import BoardImage from "../assets/leaderboard.png";
import Buttons from "../src/components/Buttons";
import { moderateScale } from "../src/components/scaling_utilities";
import Headers from "../src/components/Headers";

export default function LeaderBoard() {
  const [boardData, setBoardData] = useState(TeamData.players);
  const [loaded] = useFonts({
    Karma: require("../assets/fonts/Karma-Regular.ttf"),
  });

  return (
    <View style={styles.container}>
      <Headers />

      <Banner
        text="Leaderboard"
        themeOne="back"
        themeTwo="filter"
        image={BoardImage}
      />
      <View style={styles.label}>
        <Text allowFontScaling={false} style={styles.leftText}>
          Name
        </Text>
        <Text allowFontScaling={false} style={styles.rightText}>
          Score
        </Text>
      </View>
      <BoardList listData={boardData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6e6e6",
  },

  banner: {
    backgroundColor: "#D73F09F5",
    top: moderateScale(0.02),
    marginTop: moderateScale(-20),
  },
  drills: {
    flex: 6,
  },
  label: {
    flexDirection: "row",
    alignItems: "center",
  },
  leftText: {
    color: "#767170",
    fontSize: moderateScale(15),
    fontFamily: "Karma",
    marginTop: moderateScale(20),
    marginLeft: moderateScale(50),
  },
  rightText: {
    color: "#767170",
    fontSize: moderateScale(15),
    fontFamily: "Karma",
    marginTop: moderateScale(20),
    marginLeft: moderateScale(230),
  },
});
