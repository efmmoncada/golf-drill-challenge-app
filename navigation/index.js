import { useAuthentication } from "../hook/useAuthentication";
import AppStack from "./appStack";
import AuthStack from "./authStack";

export default function RootNavigation() {
  const { user } = useAuthentication();
  return user ? <AppStack /> : <AuthStack />;
}
