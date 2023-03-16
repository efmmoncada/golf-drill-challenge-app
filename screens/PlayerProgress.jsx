import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView
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

export default function HomeScreen({ navigation }) {
  const [drillData, setDrillData] = useState([]);
  const id = "P9dkd0kpWFDmYbuY8sCR";
  const value = '';

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

      {/*

<View>
<Text style={styles.ScreenTitle}>Benny Beaver’s Drill Progress</Text>
</View>


*/}

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
          <Text style={styles.buttonTextStyle}>Drill name 1</Text>
          <Text style={styles.buttonTextStyle_day}>
            Score: 2 Duration: 1hr. Date: 11/15/22
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5}>
          <Text style={styles.buttonTextStyle}>Drill name 2</Text>
          <Text style={styles.buttonTextStyle_day}>
            Score: 5 Duration: 2hr. Date: 11/15/22
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5}>
          <Text style={styles.buttonTextStyle}>Drill name 3</Text>
          <Text style={styles.buttonTextStyle_day}>
            Score: 5 Duration: 2hr. Date: 11/15/22
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5}>
          <Text style={styles.buttonTextStyle}>Drill name 4</Text>
          <Text style={styles.buttonTextStyle_day}>
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
    backgroundColor: "red",
  },

  back_button: {
    width: 43,
    height: 43,
    marginLeft: -170,
    marginTop: -345,
    padding: 10,
  },

  Menu_button: {
    width: 43,
    height: 43,
    marginLeft: 300,
    marginTop: -345,
    padding: 10,
  },

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
    margin: 0,
    marginTop: 80,
    padding: 10,
    marginLeft: 100,
  },

  buttonStyle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 0.5,
    borderColor: "#fff",
    height: 65,
    borderRadius: 10,
    margin: 15,
    width: 300,
    marginLeft: -100,
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
    marginBottom: 4,
    marginLeft: 50,
  },

  buttonTextStyle_day: {
    marginTop: 40,
    marginLeft: -90,
  },

  page_image: {
    height: 165,
    width: 430,
    marginTop: -50,
  },
  progress_graphImg: {
    height: 200,
    width: 450,
  },
});
