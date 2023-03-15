import { StyleSheet, View, Pressable, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
export default function Buttons({ theme, onPress }) {
  const navigation = useNavigation();
  // if button is "back", then output a back button.
  // position: on the top left corner of the screen.
  if (theme === "back") {
    return (
      <View style>
        <Pressable
          style={styles.backButtonContainer}
          onPress={() => navigation.goBack()}
        >
          <FontAwesome
            name="arrow-left"
            size={30}
            color="#D73F09"
            style={styles.buttonIcon}
          />
        </Pressable>
      </View>
    );
  }

  //Home Screen Button
  if (theme === "backHome") {
    return (
      <View style>
        <Pressable
          style={styles.backButtonContainer}
          onPress={() => navigation.goBack()}
        >
          <FontAwesome
            name="arrow-left"
            size={30}
            color="black"
            style={styles.buttonIcon}
          />
        </Pressable>
      </View>
    );
  }
  // if button is "close", then output an X button.
  // position: positioned on the top right corner of the screen.
  if (theme === "close") {
    return (
      <View style>
        <Pressable onPress={() => alert("You pressed the close button")}>
          <Ionicons
            name="close-sharp"
            size={40}
            color="white"
            style={styles.generalButton}
          />
        </Pressable>
      </View>
    );
  }
  // back button in orange,
  // position: positioned on the top left corner of the screen.
  if (theme === "backOrange") {
    return (
      <View style>
        <Pressable
          style={styles.orangeContainer}
          onPress={() => navigation.goBack()}
        >
          <FontAwesome
            name="arrow-left"
            size={30}
            color="white"
            style={styles.buttonIcon}
          />
        </Pressable>
      </View>
    );
  }
  // Edit button in white with orange container
  // Position: on the top right corner of the screen.
  if (theme === "editButton") {
    return (
      <View style>
        <Pressable
          style={styles.topLeftPosition}
          onPress={() => alert("You pressed the edit button")}
        >
          <FontAwesome
            name="pencil"
            size={30}
            color="white"
            style={styles.adjustment}
          />
        </Pressable>
      </View>
    );
  }
  // add media button for the createDrill page.
  // Position is underneath the "Upload Media" title.
  if (theme == "addMedia") {
    return (
      <View style>
        <Pressable
          style={styles.whiteContainer}
          onPress={onPress}
        >
          <Ionicons
            name="images-outline"
            size={40}
            color="#767170"
            style={styles.adjustmentWhiteContainer}
          />
        </Pressable>
      </View>
    );
  }
  // Done button (text in white and black container)
  // Position in the middle of the screen.
  if (theme == "Done") {
    return (
      <View style>
        <Pressable
          style={styles.blackMiddleContainer}
          onPress={onPress}
        >
          <Text style={styles.whiteText}>Done</Text>
        </Pressable>
      </View>
    );
  }
  // Cancel button (just a text in white)
  // position: on the top right corner of the screen.
  if (theme == "Cancel") {
    return (
      <View style>
        <Pressable
          style={styles.topLeftNeutral}
          onPress={() => alert("You pressed Cancel.")}
        >
          <Text style={styles.whiteText}>Cancel</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // position the back button on the left top corner.
  backButtonContainer: {
    backgroundColor: "white",
    padding: 4,
    width: 40,
    height: 40,
    borderRadius: 20,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 10,
  },
  // makes sure the icon is placed in the middle.
  buttonIcon: {
    marginLeft: 2,
  },
  // places the button on the top right corner of the screen.
  generalButton: {
    marginTop: -79,
    marginLeft: 260,
  },
  topLeftPosition: {
    backgroundColor: "#D73F09",
    padding: 4,
    width: 40,
    height: 40,
    borderRadius: 30,
    marginLeft: 350,
    marginTop: -39,
  },
  orangeContainer: {
    backgroundColor: "#D73F09",
    padding: 4,
    width: 40,
    height: 40,
    borderRadius: 30,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 25,
  },
  whiteContainer: {
    backgroundColor: "white",
    padding: 4,
    width: 75,
    height: 75,
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 0,
    marginLeft: 35,
  },
  adjustment: {
    marginLeft: 4,
  },
  adjustmentWhiteContainer: {
    marginTop: 10,
    marginLeft: 12,
  },
  blackMiddleContainer: {
    alignItems: "center",
    backgroundColor: "black",
    padding: 6,
    marginLeft: 175,
    marginTop: 20,
    width: 80,
    borderRadius: 4,
  },
  whiteText: {
    color: "white",
    fontSize: 20,
    fontFamily: "Karma",
  },
  cornerText: {
    color: "#F6F3F3",
    fontSize: 23,
    fontFamily: "Karma",
  },
  topLeftNeutral: {
    marginTop: -30,
    padding: 4,
    width: 65,
    marginLeft: 350,
  },
  topRight: {
    marginTop: -60,
    padding: 4,
    width: 65,
    marginLeft: 330,
  },
});
