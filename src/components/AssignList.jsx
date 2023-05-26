import React from "react";
import { FlatList } from "react-native";
import AssignItem from "./AssignItem";

const AssignList = ({ listData }) => {
  return (
    <>
      <FlatList
        data={listData}
        renderItem={({ item }) => (
          <AssignItem
            title={item.name}
            subtext={item.email}
            playerId={item.id}
            playerRef={item.playerRef}
            drillRef={item.drillRef}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};

export default AssignList;
