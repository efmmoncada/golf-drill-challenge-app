import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import DrillItem from "./DrillItem";

const DrillList = ({ listData }) => {
  return (
    <>
      <FlatList
        data={listData}
        renderItem={({ item }) => (
          <DrillItem title={item.name} subtext={item.shortDesc} />
        )}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};

export default DrillList;
