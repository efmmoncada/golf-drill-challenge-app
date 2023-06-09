import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Button,
  Pressable,
  ScrollView,
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
import Banner from "../src/components/Banner";
import {LineChart} from "react-native-chart-kit";
import DropDownPicker from "react-native-dropdown-picker";
import { FlatList } from 'react-native';
import { format, startOfWeek, endOfWeek } from 'date-fns';
import moment from 'moment';


export default function PlayerProgress({ navigation }) {
  const [drillData, setDrillData] = useState([]);
  const id = "P9dkd0kpWFDmYbuY8sCR";
  const value = "";
  const [selectedDatasetIndex, setSelectedDatasetIndex] = useState(0);

  const [selectedDrill, setSelectedDrill] = useState(null);
  const [drillNames, setDrillNames] = useState([]);
  const [open, setOpen] = useState(false);
  const [timePeriod, setTimePeriod] = useState("Week");
  const [selectedDataPointIndex, setSelectedDataPointIndex] = useState(null);


  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [{ data: [] }],
  });

// to get the recent 10 days data
const getRecentData = (data) => {
  return data.slice(Math.max(data.length - 10, 0));
};


 //for graphing based on user choice by week, month or year
 const filterDataByTimePeriod = (data, timePeriod) => {
  if (timePeriod === 'Recent') {
    return getRecentData(data);
  }

  const now = new Date();

  switch(timePeriod) {
    case 'Week':
      const oneWeekAgo = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);
      return data.filter(item => new Date(item.dateTime) >= oneWeekAgo);

    case 'Month':
      const oneMonthAgo = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
      return data.filter(item => new Date(item.dateTime) >= oneMonthAgo);

    case 'Year':
      const oneYearAgo = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
      return data.filter(item => new Date(item.dateTime) >= oneYearAgo);

    default:
      return data;
  }

};

  const getLabelByTimePeriod = (timePeriod, date) => {
    switch(timePeriod) {
      case 'Recent':
        return moment(date).format('MMM DD');
      case 'Week':
        // Format date as "May 07-13"
        const startOfWeekFormatted = format(startOfWeek(date), 'MMM dd');
        const endOfWeekFormatted = format(endOfWeek(date), 'dd');
        return `${startOfWeekFormatted}-${endOfWeekFormatted}`;

      case 'Month':
        // Format date as "Apr 2023"
        return format(date, 'MMM yyyy');

      case 'Year':
        // Format date as "2023"
        return format(date, 'yyyy');

      default:
        return '';
    }
  }

  //to fetch the drill data from the db
  const getDrillScores = async () => {
    if (selectedDrill) {
      const playerRef = doc(db, "players", id);
      const drillRef = doc(db, "drills", selectedDrill);

      const q = query(
        collection(db, "player-drills"),
        where("player", "==", playerRef),
        where("drill", "==", drillRef)
      );

      const scoreDocs = await getDocs(q);

      const drillScores = scoreDocs.docs.map((doc) => {
        const data = doc.data();
        return {
          drillName: drillNames.find((drill) => drill.value === selectedDrill)?.label || "",
          score: data.score,
          dateTime: data.dateTime.toDate(), // Store dateTime as a Date object
        };
      });

         // Update drillData for FlatList
        setDrillData(drillScores);

      let filteredDrillScores = filterDataByTimePeriod(drillScores, timePeriod);

      let finalScores;

      // Only calculate averages for week, month, and year
      if (timePeriod !== 'Recent') {
        // Calculate the average for each time period
        let averages = {};
        filteredDrillScores.forEach(score => {
          const label = getLabelByTimePeriod(timePeriod, score.dateTime);
          if (!averages[label]) {
            averages[label] = { sum: score.score, count: 1 };
          } else {
            averages[label].sum += score.score;
            averages[label].count++;
          }
        });

        finalScores = [];
        for (let label in averages) {
          finalScores.push({
            label: label,
            score: averages[label].sum / averages[label].count
          });
        }

        finalScores.sort((a, b) => new Date(a.label) - new Date(b.label)); // Sort by date

      } else {
        // For 'Recent', just use the original scores
        finalScores = filteredDrillScores.map(score => ({
          label: moment(score.dateTime).format('MMM DD'),
          score: score.score
        }));
      }

      // Create chart data
      const chartData = {
        labels: finalScores.map(score => score.label), // Get labels
        datasets: [
          {
            data: finalScores.map(score => score.score), // Get scores
          },
        ],
      };

      setChartData(chartData);
    }
  };



  useEffect(() => {
    const fetchDrillNames = async () => {
      const playerRef = doc(db, "players", id);
      const q = query(
        collection(db, "player-drills"),
        where("player", "==", playerRef)
      );
      const drillSnapshot = await getDocs(q);
      const drillPromises = drillSnapshot.docs.map((doc) => {
        const drillRef = doc.data().drill;
        return getDoc(drillRef);
      });
      const drillDocs = await Promise.all(drillPromises);
      const names = drillDocs.reduce((uniqueNames, doc) => {
        const drillInfo = {
          label: doc.data().name,
          value: doc.id,
        };

        if (!uniqueNames.some(name => name.value === drillInfo.value)) {
          uniqueNames.push(drillInfo);
        }

        return uniqueNames;
      }, []);

      setDrillNames(names);

      // Select the first drill by default
      if (names.length > 0) {
        setSelectedDrill(names[0].value);
      }
    }

    fetchDrillNames(); // Now fetchDrillNames function will be executed.
  }, []);


  useEffect(() => {
    getDrillScores().catch(error => {
      console.error(error);
    });
  }, [selectedDrill, timePeriod]);


  return (
    //osu logo

    <SafeAreaView style={styles.container}>

      <Banner
      text = "Player's Progress"
      themeOne="back" image={require("../assets/images/ProgressScreenImg.png")} />


      <View style={styles.drills}>
      <DropDownPicker
  open={open}
  placeholder="Select a drill"
  value={selectedDrill}
  items={drillNames}
  setOpen={setOpen}
  setValue={setSelectedDrill}
  setItems={setDrillNames}
  style={{ borderWidth: 0 }}
  containerStyle={{

    width: "100%",
    marginLeft: moderateScale(2),
    marginTop: 0,
  }}
  textStyle={{
    color: "#767170",
  }}
/>
<View style={styles.timePeriodContainer}>
  <Pressable onPress={() => setTimePeriod('Recent')}>
    <Text style={timePeriod === 'Recent' ? styles.selectedText : styles.time_text}>Recent</Text>
  </Pressable>
  <Pressable onPress={() => setTimePeriod('Week')}>
    <Text style={timePeriod === 'Week' ? styles.selectedText : styles.time_text}>Week</Text>
  </Pressable>
  <Pressable onPress={() => setTimePeriod('Month')}>
    <Text style={timePeriod === 'Month' ? styles.selectedText : styles.time_text}>Month</Text>
  </Pressable>
  <Pressable onPress={() => setTimePeriod('Year')}>
    <Text style={timePeriod === 'Year' ? styles.selectedText : styles.time_text}>Year</Text>
  </Pressable>
</View>

</View>

      {chartData.datasets[0].data.length > 0 ? (

<View style={styles.progress_graphImg}>

      <LineChart


        data={chartData}
        getDotColor={(dataPoint, dataPointIndex) =>
          dataPointIndex === selectedDataPointIndex ? "black" : "white"
        }
  height= {moderateScale(250)}
  width= {moderateScale(450) }
   chartConfig={{
     backgroundColor:  "red",
     backgroundGradientFrom: "white",
     backgroundGradientTo:  "white",
     decimalPlaces: 1, // optional, defaults to 2dp
     color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
     labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
     style: {
       borderRadius: 16
     },
     propsForDots: {
       r: "6",
       strokeWidth: "2",
       stroke: "black",

     },
     yAxisLabel: "0",
     yAxisInterval: 10 // optional, defaults to 1
   }}
   bezier
   style={styles.progress_graphImg}/>

</View>
) : (
  <Text> No data available </Text>
)}


<View style={styles.listContainer}>
<FlatList
  data={drillData}
  keyExtractor={(item, index) => index.toString()}
  renderItem={({ item, index }) => (
    <Pressable key={index} style={styles.buttonStyle}  onPress={() => setSelectedDataPointIndex(index)}>
      <View style={styles.buttonInnerContainer}>
        <View style={styles.drillNameContainer}>
          <Text allowFontScaling={false} style={styles.buttonTextStyle}>
            Drill name: {item.drillName}
          </Text>
        </View>
        <View style={styles.scoreDateContainer}>
          <Text allowFontScaling={false} style={styles.buttonTextStyle_day}>
            Score: {item.score} Date: {item.dateTime.toLocaleDateString("en-US", {
              month: "short",
              day: "2-digit",
            })}
          </Text>
        </View>
      </View>
    </Pressable>
  )}
/>
</View>


    </SafeAreaView>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e6e6e6",
  },

  backButton: {
    width: moderateScale(0.15),
    height: moderateScale(0.043),
    bottom: moderateScale(33),
    right: moderateScale(200),
    zIndex: 2,
  },
  progress_graphImg: {
    marginTop: -moderateScale(40),
  },

  drills: {
    flex: 0.5,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1, // Set lower zIndex for the drills container
  },

  listContainer: {
    flex: 0.5,
    width: '100%',  // Optional, based on your needs
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
    alignItems: 'center', // Add this

},
buttonStyle: {
  backgroundColor: "white",
  borderWidth: 0.5,
  borderColor: "#fff",
  borderRadius: 10,
  margin: moderateScale(10),
  padding: moderateScale(10),
  alignSelf: 'center',
},

buttonInnerContainer: {
  flexDirection: 'column',
  justifyContent: 'space-between',
},

drillNameContainer: {
  justifyContent: 'flex-start',
},

scoreDateContainer: {
  justifyContent: 'flex-start',
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
  fontFamily: "Karma",
  color: "#767170",
},

buttonTextStyle_day: {
  fontFamily: "Karma",
  color: "#767170",
},


  page_image: {
    height: moderateScale(165),
    width: moderateScale(450),
    bottom: moderateScale(40),
    marginTop: moderateScale(-3),
  },

  text: {

    width: moderateScale(0.15),
    height: moderateScale(0.043),
    bottom: moderateScale(90),
    right: 100,
    //zIndex: 2,
    backgroundColor: "white",
  },

  timePeriodContainer: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "space-between",
    marginRight: moderateScale(4),
    marginBottom: moderateScale(50),
  },
  time_text: {
    color: 'gray',
    paddingHorizontal: moderateScale(20),

  },
  selectedText: {
    color: 'black',
    paddingHorizontal: moderateScale(20),

  },
});