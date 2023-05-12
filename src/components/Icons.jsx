import { StyleSheet, View, Image, Dimensions } from "react-native";
import {
  CoachIcon,
  DrillProgressIcon,
  LeaderboardIcon,
  NotificationIcon,
  OSUBlockLetters,
  OSUBeaverLogo,
  PlayerIcon,
  PracticeDrillIcon,
  TeamInfoIcon,
} from "../../assets/Icons";
import { moderateScale } from "./scaling_utilities";

/**
 *
 * @param {string} props.theme
 *
 */
export default function Icons({ theme }) {
  return (
    <View>
      <Image
        source={IconMap[theme].uri}
        resizeMode="contain"
        style={IconMap[theme].style}
      />
    </View>
  );
}

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  OSU_logo: {
    width: moderateScale(200),
    height: moderateScale(190),
    marginTop: moderateScale(85),
    marginLeft: -moderateScale(4),
  },
  OSU_image: {
    flex: 1,
    width: moderateScale(250),
    height: moderateScale(150),
    marginTop: moderateScale(80),
    marginLeft: moderateScale(25),
    marginRight: moderateScale(25),
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
    marginTop: moderateScale(13),
  },
  userTypeIcons: {
    width: width * 0.3,
    height: height * 0.1,
  },
});

export const IconOptions = {
  Notification: "notification",
  BeaverLogo: "beaver-logo",
  OsuBlockLetters: "osu-block-letters",
  PracticeDrill: "practice-drill",
  DrillProgress: "drill-progress",
  Leaderboard: "leaderboard",
  TeamInfoIcon: "team-info",
  Player: "player",
  Coach: "coach",
};

const IconMap = {
  [IconOptions.Notification]: {
    uri: NotificationIcon,
    style: styles.buttonImageIconStyle2,
  },
  [IconOptions.BeaverLogo]: { uri: OSUBeaverLogo, style: styles.OSU_image },
  [IconOptions.OsuBlockLetters]: {
    uri: OSUBlockLetters,
    style: styles.OSU_logo,
  },
  [IconOptions.PracticeDrill]: {
    uri: PracticeDrillIcon,
    style: styles.buttonImageIconStyle,
  },
  [IconOptions.DrillProgress]: {
    uri: DrillProgressIcon,
    style: styles.buttonImageIconStyle,
  },
  [IconOptions.Leaderboard]: {
    uri: LeaderboardIcon,
    style: styles.buttonImageIconStyle,
  },
  [IconOptions.TeamInfoIcon]: {
    uri: TeamInfoIcon,
    style: styles.buttonImageIconStyle,
  },
  [IconOptions.Player]: { uri: PlayerIcon, style: styles.userTypeIcons },
  [IconOptions.Coach]: { uri: CoachIcon, style: styles.userTypeIcons },
};
