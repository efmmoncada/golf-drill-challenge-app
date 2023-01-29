import React from "react";
import { StyleSheet, Text, View } from "react-native";

const DrillList = () => {
  return (
    <View style={drills.listContainer}>
      <Text>Content</Text>
    </View>
  );
};

const drills = StyleSheet.create({
  listContainer: {
    flex: 6,
  },
});

export default DrillList;
