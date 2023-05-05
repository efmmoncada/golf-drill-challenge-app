import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { db } from "../firebaseConfig";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useQuery } from "@tanstack/react-query";
import { moderateScale } from "../src/components/scaling_utilities";

export default function HomeScreen({ navigation }) {
  const [drillData, setDrillData] = useState([]);
  const id = "P9dkd0kpWFDmYbuY8sCR";
  const value = "";

  const getCompleted = async () => {
    const playerRef = doc(db, "players", id);
    const q = query(
      collection(db, "player-drills"),
      where("player", "==", playerRef)
    );
    const refs = [];
    (await getDocs(q)).forEach((item) => refs.push(item.data().drill)); // can store other information here
    const drillDocs = await Promise.all(
      refs.map((drill) => getDoc(doc(db, drill.path)))
    );
    const drillData = drillDocs.map((ref) => {
      return { id: ref.id, ...ref.data() };
    });
    setDrillData(drillData);
    return drillData;
  };

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["drills", id, value],
    queryFn: value == "drills" ? () => getAssigned() : () => getCompleted(),
  });

  return (
    //osu logo
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          source={require("../assets/images/ProgressScreenImg.png")}
          style={styles.page_image}
        />
      </View>

      <View>
        <Image
          source={require("../assets/images/progressGraph.png")}
          style={styles.progress_graphImg}
        />
      </View>

      <View>
        <TouchableOpacity activeOpacity={0.5}>
          <Image
            source={require("../assets/Icons/BackArrow_icon.png")}
            style={styles.back_button}
          />
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity activeOpacity={0.5}>
          <Image
            source={require("../assets/Icons/Menu_Icon.png")}
            style={styles.Menu_button}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.button_icons}>
        <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5}>
          <Text allowFontScaling={false} style={styles.buttonTextStyle}>
            Drill name 1
          </Text>
          <Text allowFontScaling={false} style={styles.buttonTextStyle_day}>
            Score: 2 Duration: 1hr. Date: 11/15/22
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5}>
          <Text allowFontScaling={false} style={styles.buttonTextStyle}>
            Drill name 2
          </Text>
          <Text allowFontScaling={false} style={styles.buttonTextStyle_day}>
            Score: 5 Duration: 2hr. Date: 11/15/22
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5}>
          <Text allowFontScaling={false} style={styles.buttonTextStyle}>
            Drill name 3
          </Text>
          <Text allowFontScaling={false} style={styles.buttonTextStyle_day}>
            Score: 5 Duration: 2hr. Date: 11/15/22
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5}>
          <Text allowFontScaling={false} style={styles.buttonTextStyle}>
            Drill name 4
          </Text>
          <Text allowFontScaling={false} style={styles.buttonTextStyle_day}>
            Score: 5 Duration: 2hr. Date: 11/15/22
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DB5525",
  },

  backButton: {
    width: moderateScale(0.15),
    height: moderateScale(0.043),
    bottom: moderateScale(33),
    right: moderateScale(200),
    zIndex: 2,
  },
  Menu_button: {
    width: moderateScale(43),
    height: moderateScale(43),
    bottom: moderateScale(395),
    left: moderateScale(245),
  },

  // TODO: adapt to responsive
  ScreenTitle: {
    color: "white",
    // marginBottom: 4,
    marginRight: 50,
    marginTop: -100,
    fontSize: 24,
    fontStyle: "normal",
  },

  //the group of buttons arrangment
  button_icons: {
    flex: 1,
    marginTop: moderateScale(60),
    padding: moderateScale(10),
    marginLeft: moderateScale(110),
  },

  buttonStyle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 0.5,
    borderColor: "#fff",
    height: moderateScale(65),
    borderRadius: 10,
    margin: moderateScale(10),
    width: moderateScale(300),
    right: moderateScale(50),
    top: moderateScale(-140),
  },

  buttonImageIconStyle: {
    padding: 10,
    margin: 30,
    height: 35,
    width: 35,
    resizeMode: "stretch",
  },
  buttonTextStyle: {
    color: "black",
    marginBottom: moderateScale(20),
    marginLeft: moderateScale(35),
    left: -moderateScale(10),
    fontFamily: "Karma",
    color: "#767170",
  },

  buttonTextStyle_day: {
    //marginTop: 40,
    top: moderateScale(10),
    right: moderateScale(90),
    left: -moderateScale(86),
    fontFamily: "Karma",
    color: "#767170",
  },

  page_image: {
    height: moderateScale(165),
    width: moderateScale(450),
    bottom: moderateScale(40),
    marginTop: moderateScale(-3),
  },
  progress_graphImg: {
    height: moderateScale(200),
    width: moderateScale(450),
    bottom: moderateScale(41),
  },
});
