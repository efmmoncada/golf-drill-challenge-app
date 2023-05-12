import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "../screens/SignIn";
import Player from "../screens/Player";
import Coach from "../screens/Coach";
import SignUp from "../screens/SignUp";

const AuthStack = createStackNavigator();

export default function Navigator() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="SignIn" component={SignIn} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
      <AuthStack.Screen name="Player" component={Player} />
      <AuthStack.Screen name="Coach" component={Coach} />
    </AuthStack.Navigator>
  );
}
