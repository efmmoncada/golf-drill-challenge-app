import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import Profile from "../screens/Profile";
import Settings from "../screens/Settings";
import DevTest from "../screens/DevTest";

import HomeScreen from "../screens/Home";
import createDrillTest from "../screens/CreateDrill"


const Tabs = createBottomTabNavigator();

export default function TabsNavigator() {
    return (
        <Tabs.Navigator>
           <Tabs.Screen name= "Home" component = {HomeScreen}/>
            <Tabs.Screen name="Dev Test" component={createDrillTest} />
            <Tabs.Screen name="Profile" component={Profile} />
            <Tabs.Screen name="Settings" component={Settings} />
       
       
        </Tabs.Navigator>
    )
}