import { React, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import Banner from "../src/components/Banner";
import DrillList from "../src/components/DrillList";
import TeamData from "../data/teamData.json";

export default function DrillsPlayer() {
  const [assignedIds, setAssignedIds] = useState(
    TeamData.players[0].assignedDrills
  );
  const [drillData, setDrillData] = useState(TeamData.drills);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("Assigned");
  const [items, setItems] = useState([
    { label: "Assigned", value: "Assigned" },
    { label: "Available", value: "Available" },
  ]);

  const assignedDrills = assignedIds.map((id) => {
    return drillData.find((drill) => drill.id === id);
  });

  return (
    <View style={styles.container}>
      <Banner />

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
        {value === "Assigned" ? (
          <DrillList listData={assignedDrills} />
        ) : (
          <DrillList listData={assignedDrills} />
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
