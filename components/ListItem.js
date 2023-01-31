import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

const ListItem = () => {
  return (
    <TouchableOpacity style={item.itemContainer}>
      <Text style={item.title}>Drill name 1</Text>
      <Text style={item.subtext}>Duration: 1hr, location: xxx</Text>
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
  },
  subtext: {
    fontSize: 14,
    color: "#767170",
  },
});

export default ListItem;
