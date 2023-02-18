import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabsNavigator from './TabsNavigator';
import  SignUp from '../screens/SignUp'
import  SignIn from '../screens/SignIn'
import  Player from '../screens/Player'
import Coach from '../screens/Coach'
import Home from '../screens/Home'
import Drills  from '../screens/Drills'

const AppStack = createStackNavigator();
export default function Navigator(){

    return (
    <NavigationContainer>
    <AppStack.Navigator screenOptions={{ headerShown: false }} >
    <AppStack.Screen name="SignIn" component={SignIn} />
    <AppStack.Screen name="SignUp" component={SignUp} />
    <AppStack.Screen name="Player" component={Player} />
    <AppStack.Screen name="Coach" component={Coach} />
    <AppStack.Screen name="Home" component={TabsNavigator} />
    <AppStack.Screen name="Drills" component={Drills} />
    </AppStack.Navigator>

    </NavigationContainer>
    );
}