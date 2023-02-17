import React from "react";
import { FlatList } from "react-native";
import ListItem from "./ListItem";

const TeamList = ({ listData }) => {
  return (
    <>
      <FlatList
        data={listData}
        renderItem={({ item }) => (
          <ListItem title={item.name} subtext={item.email} />
        )}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};

export default TeamList;
