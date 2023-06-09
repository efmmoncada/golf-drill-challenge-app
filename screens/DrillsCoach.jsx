import { React, useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import Banner from "../src/components/Banner";
import DrillList from "../src/components/DrillList";
import Fuenmayor from "../assets/MateoFuenmayor.jpeg";
import { useQuery } from "@tanstack/react-query";

export default function DrillsCoach() {
  const [drillData, setDrillData] = useState([]);

  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["coachDrills"],
    queryFn: async () => {
      const response = await getDocs(collection(db, "drills"));

      const formattedData = [];

      response.forEach((info) => {
        formattedData.push({
          id: info.id,
          drillRef: info.ref,
          ...info.data(),
        });
      });
      if (!response) throw new Error("Could not fetch team data");
      setDrillData(formattedData);
      return response;
    },
  });

  return (
    <View style={styles.container}>
      <Banner text="Drills" image={Fuenmayor} themeOne="back" themeTwo="createDrill"/>
      <DrillList listData={drillData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6e6e6",
  },
  drills: {
    flex: 6,
  },
});
