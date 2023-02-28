import { StatusBar } from "expo-status-bar";
import { StyleSheet, Pressable, Text, View, Dimensions} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

import Buttons from "../src/components/Buttons";
const { width, height } = Dimensions.get("window");

export default function Settings() {
  const [loaded] = useFonts({
    Karma: require("../assets/fonts/Karma-Regular.ttf"),
  });
  const navigation = useNavigation();

  function navigateToSignIn() {
    navigation.navigate("SignIn");
    ``;
  }

  return (
    loaded && (
      <View style={styles.container}>
        <Buttons theme="close" />
        <Text style={styles.title}>Settings</Text>
        <Pressable onPress={() => alert("You pressed General.")}>
          <Text style={styles.normalText}>General</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.normalText}>Account Info</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.normalText}>Notifications</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.normalText}>History & privacy</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.normalText}>Updates</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.normalText}>About</Text>
        </Pressable>
        <Pressable onPress={() => navigateToSignIn()}>
          <Text style={styles.normalText}>Log Out</Text>
        </Pressable>
        <StatusBar style="auto" />
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D73F09",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  normalText: {
    color: "#F6F3F3",
    marginLeft: (width * 0.08),
    marginBottom: 12,
    fontSize: 25,
    fontFamily: "Karma",
  },
  title: {
    color: "#F6F3F3",
    marginBottom: height * 0.03,
    marginTop: height * 0.1,
    marginLeft: width * 0.06,
    fontSize: 45,
    fontFamily: "Karma",
  },
});
