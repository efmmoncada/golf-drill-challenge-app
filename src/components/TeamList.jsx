import React from "react";
import { FlatList } from "react-native";
import DrillItem from "./DrillItem";

const TeamList = ({ listData }) => {
  return (
    <>
      <FlatList
        data={listData}
        renderItem={({ item }) => (
          <DrillItem title={item.name} subtext={item.email} />
        )}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};

export default TeamList;
