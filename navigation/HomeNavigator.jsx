import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PlayerProgress from "../screens/PlayerProgress";
import Leaderboard from "../screens/Leaderboard";
import HomeScreen from "../screens/Home";
import Coaches_HomeScreen from "../screens/Coaches_HomeScreen";
import DrillsPlayer from "../screens/DrillsPlayer";

const AppStack = createStackNavigator();
export default function HomeNavigator() {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="Home" component={HomeScreen} />
      <AppStack.Screen name="Coaches_HomeScreen" component={Coaches_HomeScreen} />
      <AppStack.Screen name="Drills" component={DrillsPlayer} />
      <AppStack.Screen name="PlayerProgress" component={PlayerProgress} />
      <AppStack.Screen name="Leaderboard" component={Leaderboard} />
    </AppStack.Navigator>
  );
}
