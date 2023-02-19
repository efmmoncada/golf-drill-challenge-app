import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

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
    borderRadius: 10,
    backgroundColor: "#F6F3F3",
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 25,
    color: "#767170",
    flexDirection: "row",
    alignItems: "flex-start",
  },
  index: {
    fontSize: 24,
    color: "#767170",
  },
  name: {
    marginLeft: "2%",
    fontSize: 24,
    color: "#767170",
  },
  score: {
    marginLeft: "10%",
    fontSize: 24,
    color: "#006A8E",
  },
});

export default BoardItem;
