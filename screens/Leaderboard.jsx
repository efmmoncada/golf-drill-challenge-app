import { React, useState } from "react";
import { View, StyleSheet, Text, Dimensions,Pressable } from "react-native";
import { useFonts } from "expo-font";

import Banner from "../src/components/Banner";
import BoardList from "../src/components/BoardList";
import TeamData from "../data/teamData.json";
import BoardImage from "../assets/leaderboard.png";
import Buttons from "../src/components/Buttons";
import Headers from "../src/components/Headers";
import { moderateScale } from "../src/components/scaling_utilities";


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
          <Banner  allowFontScaling= {false} text="Leaderboard" image={BoardImage} />
        </View>
        <View style={styles.label}>
          <Text allowFontScaling= {false} style={styles.leftText}>Name</Text>
          <Text allowFontScaling= {false} style={styles.rightText}>Score</Text>
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
   top: moderateScale(75),
   width:moderateScale(0.85),
   zIndex: 1,
  },

  banner: {
    backgroundColor: "#D73F09F5",
    top: moderateScale( 0.02),
    marginTop: moderateScale( -20),
     
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
    fontSize: moderateScale(15),
    fontFamily: "Karma",
    marginTop: moderateScale(20),
    marginLeft:moderateScale(50),
  },
  rightText: {
    backgroundColor: "#D73F09F5",
    color: "white",
    fontSize:moderateScale(15),
    fontFamily: "Karma",
    marginTop: moderateScale( 20),
    marginLeft:moderateScale(230),
  },
});
