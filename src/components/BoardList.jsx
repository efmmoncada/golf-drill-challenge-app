import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import BoardItem from "./BoardItem";

const BoardList = ({ listData }) => {
    return (
        <View style={scores.listContainer}>
            <FlatList
                data={listData}
                renderItem={({ item }) => (
                    <BoardItem index={item.id} name={item.name} score={item.completedDrills[0].score} />
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const scores = StyleSheet.create({
    listContainer: {
        flex: 6,
        paddingTop: 20,
    },
});

export default BoardList;
