import { StyleSheet, View, Pressable, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { moderateScale } from "./scaling_utilities";

/**
 *
 * @param {string} props.theme
 * 
 */
export default function Buttons({ theme }) {
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
          onPress={() => alert("You pressed the add media button")}
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
          onPress={() => alert("You pressed Done.")}
        >
          <Text allowFontScaling={false} style={styles.whiteText}>Done</Text>
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
          <Text allowFontScaling={false} style={styles.whiteText}>Cancel</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // position the back button on the left top corner.
  backButtonContainer: {
    backgroundColor: "white",
    padding: moderateScale(4),
    width: moderateScale(40,0.2),
    height: moderateScale(40,0.2),
    borderRadius: 20,
    flexDirection: "row",
    marginTop: moderateScale(15),
    marginLeft: moderateScale(25),
    top: moderateScale(8)
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
    padding: moderateScale(4),
    width: moderateScale(40,0.2),
    height: moderateScale(40, 0.2),
    borderRadius: 30,
    marginLeft: moderateScale(350,1.05),
    marginTop: -moderateScale(39),
  },
  orangeContainer: {
    backgroundColor: "#D73F09",
    padding: moderateScale(4),
    width: moderateScale(40,0.2),
    height: moderateScale(40,0.2),
    borderRadius: 30,
    flexDirection: "row",
    marginTop: moderateScale(10),
    marginLeft: moderateScale(30),
  },
  whiteContainer: {
    backgroundColor: "white",
    padding: moderateScale(4),
    width: moderateScale(75),
    height: moderateScale(75),
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 0,
    marginLeft: moderateScale(35),
  },
  adjustment: {
    marginLeft: 4,
  },
  adjustmentWhiteContainer: {
    marginTop: moderateScale(10),
    marginLeft: moderateScale(12),
  },
  blackMiddleContainer: {
    alignItems: "center",
    backgroundColor: "black",
    padding: moderateScale(6),
    marginLeft: moderateScale(175),
    marginTop: moderateScale(20),
    width: moderateScale(80,0.2),
    borderRadius: 4,
  },
  whiteText: {
    color: "white",
    fontSize: moderateScale(20),
    fontFamily: "Karma",
  },
  cornerText: {
    color: "#F6F3F3",
    fontSize: moderateScale(23),
    fontFamily: "Karma",
  },
  topLeftNeutral: {
    marginTop: -moderateScale(30),
    padding: moderateScale(4),
    width: moderateScale(80),
    marginLeft: moderateScale(350),
  },
  topRight: {
    marginTop: -60,
    padding: moderateScale(4),
    width: moderateScale(65),
    marginLeft: moderateScale(330),
  },
});
