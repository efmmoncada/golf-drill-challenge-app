import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { moderateScale } from "./scaling_utilities";

const BoardItem = ({ index, name, score }) => {
  return (
    <TouchableOpacity style={item.itemContainer}>
      <Text style={item.index}>{index}.</Text>
      <Text style={item.name}>{name}</Text>
      <Text style={item.score}>{score}</Text>
    </TouchableOpacity>
  );
};

const item = StyleSheet.create({
  itemContainer: {
    flex: 1,
    borderRadius: moderateScale(10),
    backgroundColor: "#F6F3F3",
    padding: moderateScale(15),
    marginVertical: moderateScale(10),
    marginHorizontal:moderateScale( 25),
    color: "#767170",
    flexDirection: "row",
    alignItems: "flex-start",
  },
  index: {
    fontSize:moderateScale( 24),
    color: "#767170",
  },
  name: {
    marginLeft: "2%",
    fontSize: moderateScale(23),
    color: "#767170",
  },
  score: {
    flex: 1,
    marginLeft: "10%",
    fontSize: moderateScale(20),
    color: "#006A8E",
  textAlign: "right",
  width: moderateScale(20), // set a fixed width

   },
});

export default BoardItem;
