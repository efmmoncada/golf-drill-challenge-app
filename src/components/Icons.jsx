import { StyleSheet, View, Image, Dimensions } from "react-native";
import { moderateScale } from "./scaling_utilities";
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
          source={require("../../assets/Icons/Notification.png")}
          style={styles.buttonImageIconStyle2}
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
          source={require("../../assets/Icons/PracticeDrill_Icon.png")}
          style={styles.buttonImageIconStyle}
        />
      </View>
    );
  }
  if (theme === "drillProgress") {
    return (
      <View>
        <Image
          source={require("../../assets/Icons/DrillProgress_Icon.png")}
          style={styles.buttonImageIconStyle}
        />
      </View>
    );
  }
  if (theme === "leaderboard") {
    return (
      <View>
        <Image
          source={require("../../assets/Icons/Leaderboard_Icon.png")}
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
  OSU_logo: {
    width: moderateScale(200),
    height: moderateScale(190),
    marginTop: moderateScale(85),
    marginLeft: -moderateScale(4),
  },

  buttonImageIconStyle: {
    padding: moderateScale(10),
    margin: moderateScale(30),
    height: moderateScale(35),
    width: moderateScale(35),
    resizeMode: "stretch",
  },

  buttonImageIconStyle2: {
    padding: moderateScale(10),
    margin: moderateScale(30),
    height: moderateScale(35),
    width: moderateScale(35),
    resizeMode: "stretch",
    marginTop: moderateScale(13)
  },
});
