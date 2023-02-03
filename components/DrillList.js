import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "./ListItem";

const DrillList = ({ listData }) => {
  return (
    <View style={drills.listContainer}>
      <FlatList
        data={listData}
        renderItem={({ item }) => (
          <ListItem title={item.name} subtext={item.description} />
        )}
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
