import { React, useState } from "react";
import { View, StyleSheet, Dimensions, Pressable, Image, SafeAreaView} from "react-native";
import Banner from "../src/components/Banner";
import DrillList from "../src/components/DrillList"
import TeamData from "../data/teamData.json";
import Fuenmayor from "../assets/MateoFuenmayor.jpeg";


const {height, width} = Dimensions.get("window");

export default function Drills() {


    const [drillData, setDrillData] = useState(TeamData.drills);

    return (
         
        <SafeAreaView style={styles.container}>
            <Banner text="Drills" image={Fuenmayor} />
            <DrillList listData={drillData} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#D73F09F5",
    },
    drills: {
        flex: 6,
    },
});