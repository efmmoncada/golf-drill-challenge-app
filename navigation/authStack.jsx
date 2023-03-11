import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "../screens/SignIn";
import Player from "../screens/Player";
import Coach from "../screens/Coach";
import SignUp from "../screens/SignUp";
import TabsNavigator from "./TabsNavigator";

const AuthStack = createStackNavigator();

export default function Navigator(){
    return(
    <NavigationContainer>
        <AuthStack.Navigator screenOptions={{ headerShown: false }}>
            <AuthStack.Screen name="SignIn" component={SignIn} />
            <AuthStack.Screen name="SignUp" component={SignUp} />
            <AuthStack.Screen name="Player" component={Player} />
            <AuthStack.Screen name="Coach" component={Coach} />
            <AuthStack.Screen name="Home" component={TabsNavigator} />
            <AuthStack.Screen name="Coaches_HomeScreen" component={TabsNavigator} />
        </AuthStack.Navigator>
    </NavigationContainer>
    )
}