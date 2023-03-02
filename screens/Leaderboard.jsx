import { React, useState } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { useFonts } from "expo-font";

import Banner from "../src/components/Banner";
import BoardList from "../src/components/BoardList";
import TeamData from "../data/teamData.json";
import BoardImage from "../assets/leaderboard.png";
import Buttons from "../src/components/Buttons";
import Headers from "../src/components/Headers";


const { width, height } = Dimensions.get("window");



export default function LeaderBoard() {
  const [boardData, setBoardData] = useState(TeamData.players);
  const [loaded] = useFonts({
    Karma: require("../assets/fonts/Karma-Regular.ttf"),
  });

  return (
    loaded && (
      
     <View style={styles.container}>
      <View>
       <Headers/>
     </View>
     
        <View style={styles.backButton}>
          <Buttons theme="back" />
          </View>
          
          


          <View style={styles.banner}>

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

  backButton: {
   position: 'absolute',
   top: height * 0.03,
   width: width * 0.85,
   zIndex: 1,
  },

  banner: {
    backgroundColor: "#D73F09F5",
    top: height * 0.02,
    marginTop: -20,
     
  },
  drills: {
    flex: 6,
  },
  label: {
    flexDirection: "row",
    alignItems: "center",
   // width: width

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
