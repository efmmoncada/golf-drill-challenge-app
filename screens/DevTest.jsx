import React from "react";
import { View, StyleSheet, Text } from "react-native";
import DrillsCoach from "./DrillsCoach";
import DrillsPlayer from "./DrillsPlayer";
import TeamInfo from "./TeamInfo";


export default function DevTest() {

    return (
       <DrillsPlayer/>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})