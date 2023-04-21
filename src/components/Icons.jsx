import { StyleSheet, View, Image, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

/**
 *
 * @param {string} props.theme
 *
 */
export default function Icons({ theme }) {
  if (theme === "notification") {
    return (
      <View style>
        <Image
          source={require("../../assets/Icons/Notification_icon.png")}
          style={styles.buttonImageIconStyle}
        />
      </View>
    );
  }
  if (theme === "OSUlogo") {
    return (
      <View>
        <Image
          source={require("../../assets/images/OSU_logo.png")}
          style={styles.OSU_logo}
        />
      </View>
    );
  }
  if (theme === "practiceDrill") {
    return (
      <View>
        <Image
          source={require("../../assets/Icons/Practice_Drill_icon.png")}
          style={styles.buttonImageIconStyle}
        />
      </View>
    );
  }
  if (theme === "drillProgress") {
    return (
      <View>
        <Image
          source={require("../../assets/Icons/Drill_Progress_icon.png")}
          style={styles.buttonImageIconStyle}
        />
      </View>
    );
  }
  if (theme === "leaderboard") {
    return (
      <View>
        <Image
          source={require("../../assets/Icons/Leaderboard_icon.png")}
          style={styles.buttonImageIconStyle}
        />
      </View>
    );
  }
  if (theme === "player") {
    return (
      <View>
        <Image
          source={require("../../assets/images/player.png")}
          resizeMode="contain"
          style={{ width: width * 0.3, height: height * 0.1 }}
        />
      </View>
    );
  }
  if (theme === "coach") {
    return (
      <View>
        <Image
          source={require("../../assets/images/coach.png")}
          resizeMode="contain"
          style={{ width: width * 0.3, height: height * 0.1 }}
        />
      </View>
    );
  }
  {
  }
}

const styles = StyleSheet.create({
  // style for bell icon
  buttonImageIconStyle: {
    marginLeft: width * 0.03,
    marginRight: width * 0.16,
    height: 35,
    width: 35,
    resizeMode: "stretch",
  },

  OSU_logo: {
    width: width * 0.45,
    height: height * 0.21,
    marginTop: height * 0.09,
    marginLeft: -4,
  },

  buttonImageIconStyle: {
    padding: 10,
    margin: 30,
    height: 35,
    width: 35,
    resizeMode: "stretch",
  },
});
