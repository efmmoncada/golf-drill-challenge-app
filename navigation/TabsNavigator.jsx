import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import Profile from "../screens/Profile";
import Settings from "../screens/Settings";
import DevTest from "../screens/DevTest";



const Tabs = createBottomTabNavigator();

export default function TabsNavigator() {
    return (
        <Tabs.Navigator>
            <Tabs.Screen name="Dev Test" component={DevTest} />
            <Tabs.Screen name="Profile" component={Profile} />
            <Tabs.Screen name="Settings" component={Settings} />
        </Tabs.Navigator>
    )
}