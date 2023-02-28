import { StatusBar } from "expo-status-bar";
import { React, useState } from "react";
import {
  StyleSheet,
  Pressable,
  Text,
  View,
  Dimensions,
  Scrollview,
  TextInput,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import Buttons from "../src/components/Buttons";
import Banner from "../src/components/Banner";
import { useFonts } from "expo-font";
import createDrill from "../assets/createDrill.jpg";
import Headers from "../src/components/Headers";



const { width, height } = Dimensions.get("window");

export default function CreateDrill() {
  const [text, onChange] = useState("");
  const [selected, setSelected] = useState("");
  const [loaded] = useFonts({
    Karma: require("../assets/fonts/Karma-Regular.ttf"),
  });

  const data = [
    { key: "1", value: "18 putt drill" },
    { key: "2", value: "Stroke game putting" },
  ];

  // loading data for type dropdown menu.

  return (
    loaded && (
      <View style={styles.container}>
       
   <Headers>   
   </Headers>
   
       <Banner
          image={createDrill}
          text="Create Drills"
          themeOne="back"
          themeTwo="Cancel"
        />
        <SelectList
          setSelected={(val) => setSelected(val)}
          data={data}
          save="value"
          search={false}
          fontFamily="Karma"
          boxStyles={{
            width: width * 0.85,
            height: height * 0.04,
            backgroundColor: "#F0E8E8",
            borderRadius: 10,
            paddingLeft: width * 0.025,
            paddingRight: width * 0.025,
            paddingTop: height * 0.01,
            marginLeft: 30,
            marginTop: 20,
            fontFamily: "Karma",
            fontSize: 20,
            borderColor: "#F0E8E8",
          }}
          dropdownStyles={{
            width: width * 0.85,
            height: height * 0.1,
            backgroundColor: "#e6e9ed",
            borderRadius: 10,
            paddingLeft: width * 0.025,
            paddingRight: width * 0.025,
            marginLeft: 30,
            marginTop: 5,
            fontFamily: "Karma",
            fontSize: 20,
            borderColor: "#e6e9ed",
          }}
          label="Type"
        />
        <TextInput
          style={styles.textContainer}
          onChange={onChange}
          placeholder="Name"
          value={text}
        />
        <TextInput
          style={styles.textContainer}
          onChange={onChange}
          placeholder="Duration"
          value={text}
        />
        <TextInput
          style={styles.textContainer2}
          onChange={onChange}
          multiline
          placeholder="Description"
          value={text}
        />
        <Text style={styles.normalText}>Upload Media</Text>
        <Buttons theme="addMedia" />
        <Buttons theme="Done" />
        <StatusBar style="auto" />
      </View>
    
   )
  );
}

const styles = StyleSheet.create({
  banner: {
    marginTop: 0,
    marginLeft: 10,
    
  },
  container: {
    flex: 1,
    backgroundColor: "#D73F09",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  textContainer: {
    width: width * 0.85,
    height: height * 0.04,
    backgroundColor: "#F0E8E8",
    borderRadius: 10,
    paddingLeft: 15,
    paddingTop: 4,
    marginLeft: 30,
    marginTop: 20,
    fontFamily: "Karma",
    fontSize: 18,
  },
  textContainer2: {
    width: width * 0.85,
    height: height * 0.15,
    backgroundColor: "#F0E8E8",
    borderRadius: 10,
    paddingLeft: width * 0.025,
    paddingRight: width * 0.025,
    paddingTop: height * 0.01,
    marginLeft: 30,
    marginTop: 20,
    fontFamily: "Karma",
    fontSize: 20,
  },
  textGrey: {
    color: "#767170",
    fontSize: 20,
    fontFamily: "Karma",
    paddingTop: 3,
  },
  normalText: {
    color: "#F6F3F3",
    marginLeft: 34,
    marginBottom: 12,
    marginTop: 10,
    fontSize: 20,
    fontFamily: "Karma",
  },
  cornerText: {
    color: "#F6F3F3",
    marginLeft: 340,
    marginTop: 20,
    fontSize: 23,
    fontFamily: "Karma",
  },
  title: {
    color: "#F6F3F3",
    marginBottom: 30,
    marginTop: 80,
    marginLeft: 25,
    fontSize: 45,
    fontFamily: "Karma",
  },
});
