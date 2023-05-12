import { NavigationContainer } from "@react-navigation/native";
import { useAuthentication } from "../hook/useAuthentication";
import AppNavigator from "./AppNavigator";
import AuthStack from "./authStack";

export default function RootNavigation() {
  const { user } = useAuthentication();
  return (
    <NavigationContainer>
      {user ? <AppNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
}
