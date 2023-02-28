import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

const DrillItem = ({ title, subtext }) => {
  return (
    <TouchableOpacity style={item.itemContainer}>
      <Text style={item.title}>{title}</Text>
      <Text style={item.subtext}>{subtext}</Text>
    </TouchableOpacity>
  );
};

const item = StyleSheet.create({
  itemContainer: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: "#F6F3F3",
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 25,
    color: "#767170",
  },
  title: {
    fontSize: 24,
    color: "#767170",
    fontFamily: "Karma"
  },
  subtext: {
    fontSize: 16,
    color: "#767170",
    fontFamily: "Karma"
  },
});

export default DrillItem;
