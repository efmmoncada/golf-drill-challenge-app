import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import DrillItem from "./DrillItem";


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
