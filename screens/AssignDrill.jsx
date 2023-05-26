import { React, useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import Banner from "../src/components/Banner";
import TeamInfo from "../assets/teamInfo.jpg";
import { useRoute } from "@react-navigation/native";
import AssignList from "../src/components/AssignList";

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

  // Set Error values

  useEffect(() => {
    refetch();
  });

  return (
    <View style={styles.container}>
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
    backgroundColor: "#D73F09F5",
  },
  drills: {
    flex: 6,
    paddingTop: 15,
  },
  header: {
    fontSize: 24,
    textAlign: "center",
    color: "#F6F3F3",
  },
  dropDownContainer: {
    width: "30%",
    marginLeft: 25,
    marginTop: 15,
  },
});
