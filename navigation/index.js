import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./AppNavigator";
import AuthStack from "./authStack";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

export default function RootNavigation() {
  const [user, _] = useContext(AuthContext);
  return (
    <NavigationContainer>
      {user ? <AppNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
}
