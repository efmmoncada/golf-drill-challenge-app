import React from "react";
<<<<<<< Updated upstream
import { FlatList, StyleSheet, View, Text } from "react-native";
import ListItem from "./ListItem";
=======
import { FlatList, StyleSheet, View } from "react-native";
import DrillItem from "./DrillItem";
>>>>>>> Stashed changes

const DrillList = ({ listData }) => {
  return (
    <>
      <FlatList
        data={listData}
        renderItem={({ item }) => (
          <DrillItem title={item.name} subtext={item.description} />
        )}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};

const drills = StyleSheet.create({

});

export default DrillList;
