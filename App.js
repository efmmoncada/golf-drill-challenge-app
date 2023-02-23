import { React, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NavigationContainer } from "@react-navigation/native";
import TabsNavigator from "./navigation/TabsNavigator";
import MainNavigator from "./navigation/MainNavigator";
import TeamData from "./data/teamData.json";
import * as team from "./data/teamData.json";

const queryClient = new QueryClient();

export default function App() {
  const [drillData, setDrillData] = useState(TeamData.drills);
  return (
    <QueryClientProvider client={queryClient}>
      <MainNavigator />
    </QueryClientProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D73F09F5",
  },
});
