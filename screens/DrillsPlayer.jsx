import { React, useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { db } from "../firebaseConfig";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import Banner from "../src/components/Banner";
import DrillList from "../src/components/DrillList";
import Fuenmayor from "../assets/MateoFuenmayor.jpeg";
import { useQuery } from "@tanstack/react-query";

export default function DrillsPlayer({ id = "7lWe1aJgQ7O8ptsEVRrC" }) {
  const [drillData, setDrillData] = useState([]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("assigned");
  const [items, setItems] = useState([
    { label: "Assigned", value: "assigned" },
    { label: "Available", value: "available" },
  ]);

  const getAssigned = async () => {
    const assigned = (await getDoc(doc(db, "players", id))).data()
      .assignedDrills;
    const refs = await Promise.all(
      assigned.map((drill) => getDoc(doc(db, drill.path)))
    );
    const drillData = refs.map((ref) => {
      return { id: ref.id, ...ref.data() };
    });
    setDrillData(drillData);
    return drillData;
  };

  const getCompleted = async () => {
    const playerRef = doc(db, "players", id);
    const q = query(
      collection(db, "player-drills"),
      where("player", "==", playerRef)
    );
    const refs = [];
    (await getDocs(q)).forEach((item) => refs.push(item.data().drill));
    const drillDocs = await Promise.all(
      refs.map((drill) => getDoc(doc(db, drill.path)))
    );
    const drillData = drillDocs.map((ref) => {
      return { id: ref.id, ...ref.data() };
    });
    setDrillData(drillData);
    return data;
  };

  // NOTE: Need to dynamically set data to state and pass to list to render
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["assigned", id, value],
    queryFn: value == "assigned" ? () => getAssigned() : () => getCompleted(),
  });

  useEffect(() => {
    refetch();
  }, [value]);

  return (
    <View style={styles.container}>
      <Banner text="Drills" image={Fuenmayor} themeOne="back" />

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
          containerStyle={{
            width: "30%",
            marginLeft: 25,
            marginTop: 15,
          }}
          textStyle={{
            color: "#767170",
          }}
        />
        <DrillList listData={drillData} />
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
});
