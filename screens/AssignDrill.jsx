import { React, useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import Banner from "../src/components/Banner";
import TeamInfo from "../assets/teamInfo.jpg";
import { useRoute } from "@react-navigation/native";
import AssignList from "../src/components/AssignList";
import Header from "../src/components/Headers";

/**
 *
 * @param {object} props
 * @param {string} props.id
 *
 */
// Drill ID will be passed in
export default function AssignDrill() {
  const route = useRoute();
  const drillRef = route.params.drillRef || "YLHvka5gK5wHtP9NQWTZ";

  const [players, setPlayers] = useState([]);

  // grab list of players
  const queryCollection = async () => {
    const response = await getDocs(collection(db, "players"));

    const formattedData = [];
    response.forEach((info) => {
      formattedData.push({
        id: info.id,
        playerRef: info.ref,
        drillRef: drillRef,
        name: `${info.data().firstName}`,
        email: info.data().email,
      });
    });
    if (!response) throw new Error("Could not fetch team data");
    setPlayers(formattedData);
    return response;
  };

  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["players"],
    queryFn: () => queryCollection(),
  });

  return (
    <View style={styles.container}>
      <Header />
      <Banner text="Assign" image={TeamInfo} themeOne="back" />
      <View style={styles.drills}>
        <AssignList listData={players} />
      </View>
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
    paddingTop: 15,
  },
  header: {
    fontSize: 24,
    textAlign: "center",
    color: "#767170",
  },
  dropDownContainer: {
    width: "30%",
    marginLeft: 25,
    marginTop: 15,
  },
});
