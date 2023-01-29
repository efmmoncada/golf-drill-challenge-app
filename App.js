import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Banner from "./components/Banner";
import DrillList from "./components/DrillList";

export default function App() {
  return (
    <View style={styles.container}>
      <Banner />
      <DrillList />
      <StatusBar style="auto" />
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
  },
});
