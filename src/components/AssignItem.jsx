import React from "react";
import { View } from "react-native";
import { StyleSheet, Text } from "react-native";
import { db } from "../../firebaseConfig";
import { doc } from "firebase/firestore";
import { moderateScale } from "./scaling_utilities";
import { TouchableOpacity } from "react-native-gesture-handler";

const AssignItem = ({ title, subtext, playerId, drillId }) => {
  const assignDrill = async () => {
    console.log("player ID", playerId);
    console.log("drill ID", drillId);
    const playerRef = doc(db, "players", playerId);
    const drillRef = doc(db, "players", drillId);
    // add drill ref to player field 'assignedDrills'
  };

  return (
    <View style={item.itemContainer}>
      <View style={item.leftContainer}>
        <Text allowFontScaling={false} style={item.title}>
          {title}
        </Text>
        <Text allowFontScaling={false} style={item.subtext}>
          {subtext}
        </Text>
      </View>
      <View style={item.rightContainer}>
        <TouchableOpacity style={item.assignBtn} onPress={assignDrill}>
          <Text style={item.assignText}>Assign</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const item = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    borderRadius: 10,
    backgroundColor: "#F6F3F3",
    padding: moderateScale(15),
    marginVertical: moderateScale(10),
    marginHorizontal: moderateScale(25),
    color: "#767170",
  },
  leftContainer: {
    width: "70%",
  },
  rightContainer: {
    width: "30%",
    justifyContent: "center",
    marginRight: 0,
  },
  title: {
    fontSize: moderateScale(24),
    color: "#767170",
    fontFamily: "Karma",
  },
  subtext: {
    fontSize: moderateScale(16),
    color: "#767170",
    fontFamily: "Karma",
  },
  assignBtn: {
    width: "90%",
    padding: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 5,
    borderColor: "#767170",
  },
  assignText: {
    fontSize: moderateScale(16),
  },
});

export default AssignItem;
