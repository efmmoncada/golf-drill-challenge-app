import { React, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import Banner from "../src/components/Banner";
import TeamList from "../src/components/TeamList";
import TeamData from "../data/teamData.json";
import TeamInfo from "../assets/teamInfo.jpg";

export default function DrillsPlayer() {
  const [playersInfo, setPlayersInfo] = useState(TeamData.players);
  const [coachesInfo, setCoachesInfo] = useState(TeamData.coaches);

  // Create drop down values
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("Players");
  const [items, setItems] = useState([
    { label: "Players", value: "Players" },
    { label: "Coaches", value: "Coaches" },
  ]);

  return (
    <View style={styles.container}>
      <Banner text="Team Info" image={TeamInfo} themeOne="back" />

      <View style={styles.drills}>
        <Text style={styles.header}>{value}</Text>
        <DropDownPicker
          open={open}
          placeholder={value}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          style={{ borderWidth: 0 }}
          containerStyle={{
            width: "30%",
            marginLeft: 25,
            marginTop: 15,
          }}
          textStyle={{
            color: "#767170",
          }}
        />
        {value === "Players" ? (
          <TeamList listData={playersInfo} />
        ) : (
          <TeamList listData={coachesInfo} />
        )}
      </View>
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
    paddingTop: 15,
  },
  header: {
    fontSize: 24,
    textAlign: "center",
    color: "#F6F3F3",
  },
});
