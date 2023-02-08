import { React, useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Banner from "../src/components/Banner";
import DrillList from "../src/components/DrillList"
import TeamData from "../data/teamData.json";
import Fuenmayor from "../assets/MateoFuenmayor.jpeg";


const {height, width} = Dimensions.get("window");

export default function Drills() {

    const [drillData, setDrillData] = useState(TeamData.drills);

    return (
        <View style={styles.container}>
            <Banner text="Drills" image={Fuenmayor} style={styles.banner} />
            <DrillList listData={drillData} />
        </View>
    );
}

const styles = StyleSheet.create({
    banner: {
        height: height * 0.25,
    },
    container: {
        flex: 1,
        backgroundColor: "#D73F09F5",
    },
    drills: {
        flex: 6,
    },
});