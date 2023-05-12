import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Profile from "../screens/Profile";
import Settings from "../screens/Settings";
import DevTest from "../screens/DevTest";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "../screens/Home";
import createDrillTest from "../screens/CreateDrill";
import Notification from "../screens/Notification";
import Coaches_Homescreen from "../screens/Coaches_HomeScreen";
import CreateDrill from "../screens/CreateDrill";
import Contact from "../screens/Contact";
import LeaderBoard from "../screens/Leaderboard";
import Drill from "../src/components/Drill";

//Screen names
const homeName = "Home2";
const settingsName = "Settings";
const profileName = "Profile";
const notifcationName = "Notification";

const Tabs = createBottomTabNavigator();

const iconMap = {
  [homeName]: {
    focused: "home",
    default: "home-outline",
  },
  [notifcationName]: {
    focused: "notifications",
    default: "notifications-outline",
  },
  [profileName]: {
    focused: "person",
    default: "person-circle-outline",
  },
  [settingsName]: {
    focused: "settings",
    default: "settings-outline",
  },
};

export default function TabsNavigator() {
  return (
    <Tabs.Navigator
      initialRouteName={homeName} // correct spelling
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const iconName =
            iconMap[route.name]?.[focused ? "focused" : "default"] ||
            "bug-outline";
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen
        name={homeName}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tabs.Screen name={profileName} component={Profile} />

      <Tabs.Screen
        name={notifcationName}
        component={Notification}
        options={{
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name={settingsName}
        component={Settings}
        options={{
          headerShown: false,
        }}
      />
      {/* <Tabs.Screen name="Create" component={CreateDrill} /> */}
      {/* <Tabs.Screen name="Contact" component={Contact} /> */}
      {/* <Tabs.Screen name="Dev" component={DevTest} /> */}
    </Tabs.Navigator>
  );
}
