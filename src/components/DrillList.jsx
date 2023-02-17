import React from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import ListItem from "./ListItem";

const DrillList = ({ listData }) => {
  return (
    <>
      <FlatList
        data={listData}
        renderItem={({ item }) => (
          <ListItem title={item.name} subtext={item.description} />
        )}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};

const drills = StyleSheet.create({

});

export default DrillList;
