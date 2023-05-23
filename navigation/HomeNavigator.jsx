import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PlayerProgress from "../screens/PlayerProgress";
import Leaderboard from "../screens/Leaderboard";
import HomeScreen from "../screens/Home";
import Coaches_HomeScreen from "../screens/Coaches_HomeScreen";
import DrillsPlayer from "../screens/DrillsPlayer";
import AuthContext from "../context/AuthContext";
import TeamInfo from "../screens/TeamInfo";
import Drill from "../src/components/Drill";
import DrillsCoach from "../screens/DrillsCoach";
import CreateDrill from "../screens/CreateDrill";

const AppStack = createStackNavigator();
export default function HomeNavigator() {
  const [user, setUser] = useContext(AuthContext);
  return (
    <AppStack.Navigator
      initialRouteName={user.isCoach ? "Coaches_HomeScreen" : "Home"}
      screenOptions={{ headerShown: false }}
    >
      <AppStack.Screen name="Home" component={HomeScreen} />
      <AppStack.Screen
        name="Coaches_HomeScreen"
        component={Coaches_HomeScreen}
      />
      <AppStack.Screen name="Drills" component={DrillsPlayer} />
      <AppStack.Screen name="DrillsCoach" component={DrillsCoach} />
      <AppStack.Screen name="PlayerProgress" component={PlayerProgress} />
      <AppStack.Screen name="TeamProgress" component={TeamInfo} />
      <AppStack.Screen name="Leaderboard" component={Leaderboard} />
      <AppStack.Screen name="Drill" component={Drill} />
      <AppStack.Screen name="CreateDrill" component={CreateDrill} />

    </AppStack.Navigator>
  );
}
