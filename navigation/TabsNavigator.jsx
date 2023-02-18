import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import Profile from "../screens/Profile";
import Settings from "../screens/Settings";
import DevTest from "../screens/DevTest";
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from "../screens/Home";
import createDrillTest from "../screens/CreateDrill"
import Notification from "../screens/Notification"; 
import { NavigationContainer } from "@react-navigation/native";
 

//Screen names
const homeName = 'Home';
const settingsName = 'Settings';
const profileName = 'Profile';
const notifcationName = 'Notification'



const Tabs = createBottomTabNavigator();

export default function TabsNavigator() {
    return (
       
 <Tabs.Navigator
  initialRouteName={homeName} // correct spelling
  screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;
      let rn = route.name;
      if (rn === homeName) {
        iconName = focused ? 'home' : 'home-outline';
    
    } else if (rn === notifcationName) {
        iconName = focused ? 'notifications' : 'notifications-outline';
      
      } else if (rn === profileName) {
        iconName = focused ? 'person' : "person-circle-outline";
       
       } else if (rn === settingsName) {
        iconName = focused ? 'settings' : "settings-outline";
      }

    //  <ion-icon name="settings-outline"></ion-icon>
      return <Ionicons name={iconName} size={size} color={color} />;
    },
  })}
>

<Tabs.Screen name="Profile" component={Profile} />

<Tabs.Screen name = {homeName} component={HomeScreen}  options={{
          headerShown: false}}/>
 
   <Tabs.Screen name="Notification" component={Notification} />
 
  <Tabs.Screen name="Settings" component={Settings} />

</Tabs.Navigator>


     
);
}

  