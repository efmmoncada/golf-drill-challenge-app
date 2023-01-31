import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ListItem from "./ListItem";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  }
];

const DrillList = () => {
  return (
    <View style={drills.listContainer}>
      <FlatList
        style={drills.list}
        data={DATA}
        renderItem={() => <ListItem />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const drills = StyleSheet.create({
  listContainer: {
    flex: 6,
    paddingTop: 20,
  },
});

export default DrillList;
