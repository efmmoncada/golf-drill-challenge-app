import { React, useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import DropDownPicker from "react-native-dropdown-picker";
import Banner from "../src/components/Banner";
import TeamList from "../src/components/TeamList";
import TeamInfoPhoto from "../assets/teamInfo.jpg";
import Header from "../src/components/Headers";

export default function TeamInfo() {
  const [teamInfo, setTeamInfo] = useState([]);

  // Create drop down values
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("Players");
  const [items, setItems] = useState([
    { label: "Players", value: "Players" },
    { label: "Coaches", value: "Coaches" },
  ]);

  const queryCollection = async (value) => {
    const response = await getDocs(collection(db, value));

    const formattedData = [];
    response.forEach((info) => {
      formattedData.push({
        id: info.id,
        name: `${info.data().firstName}`,
        email: info.data().email,
      });
    });
    if (!response) throw new Error("Could not fetch team data");
    setTeamInfo(formattedData);
    return response;
  };

  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["teamInfo", value],
    queryFn: () => queryCollection(value.toLowerCase()),
  });

  // Set Error values

  useEffect(() => {
    refetch();
  }, [value]);

  return (
    <View style={styles.container}>
      <Header />
      <Banner text="Team Info" image={TeamInfoPhoto} themeOne="back" />

      <View style={styles.drills}>
        <Text style={styles.header}>{value}</Text>
        <DropDownPicker
          open={open}
          placeholder={value}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          style={{ borderWidth: 0 }}
          containerStyle={styles.dropDownContainer}
          textStyle={{ color: "#767170", fontFamily: "Karma" }}
        />
        <TeamList listData={teamInfo} />
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
    fontFamily: "Karma"
  },
  dropDownContainer: {
    width: "30%",
    marginLeft: 25,
    marginTop: 15,
  },
});
