import React from "react";
import { TouchableOpacity, StyleSheet, Text, Pressable } from "react-native";

const ListItem = ({ title, subtext }) => {
  return (
    <Pressable
      style={item.itemContainer}
      onPress={() => {
        //   // Code for email button press goes here
      }}
    >
      <Text style={item.title}>{title}</Text>
      <Text style={item.subtext}>{`${subtext.substring(0, 25)}...`}</Text>
    </Pressable>
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
