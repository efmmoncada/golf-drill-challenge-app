import { StatusBar } from 'expo-status-bar';
import { React, useState } from "react";
import { StyleSheet, Pressable, Text, View } from 'react-native';
import Buttons from '../src/components/Buttons'
import Banner from "../src/components/Banner";
import { useFonts } from 'expo-font';
import createDrill from "../assets/createDrill.jpg";

export default function CreateDrill() {
  const [loaded] = useFonts({
    Karma: require('../assets/fonts/Karma-Regular.ttf')
  })

  if(!loaded)
  { 
    return null;
  }

  return (
    <View style={styles.container}>
      <Banner image={createDrill} text="Create Drills" themeOne="back" themeTwo="Cancel"/>
      <View style={styles.textContainer}>
            <Text style={styles.textGrey}>Type</Text>
      </View>
      <View style={styles.textContainer}>
            <Text style={styles.textGrey}>Name</Text>
      </View>
      <View style={styles.textContainer}>
            <Text style={styles.textGrey}>Duration</Text>
      </View>
      <View style={styles.textContainer2}>
            <Text style={styles.textGrey}>Description</Text>
      </View>
      <Text style={styles.normalText}>Upload Media</Text>
      <Buttons theme="addMedia"/>
      <Buttons theme="Done"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  banner:{
    marginTop: 0,
    marginLeft: 10
  },
  container: {
    flex: 1,
    backgroundColor: '#D73F09',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
    textContainer:{
    width: 360,
    height: 40,
    backgroundColor: '#F0E8E8',
    borderRadius: 10,
    paddingLeft: 15,
    paddingTop: 4,
    marginLeft: 30,
    marginTop: 20
    },
    textContainer2:{
        width: 360,
        height: 130,
        backgroundColor: '#F0E8E8',
        borderRadius: 10,
        paddingLeft: 15,
        paddingTop: 4,
        marginLeft: 30,
        marginTop: 20
        },
  textGrey:{
    color: '#767170',
    fontSize: 20,
    fontFamily: 'Karma',
    paddingTop: 3
  },
  normalText:{
    color: '#F6F3F3',
    marginLeft: 34,
    marginBottom: 12,
    marginTop: 10,
    fontSize: 20,
    fontFamily: 'Karma'
  },
  cornerText:{
    color: '#F6F3F3',
    marginLeft: 340,
    marginTop: 20,
    fontSize: 23,
    fontFamily: 'Karma'
  },
  title:{
    color: '#F6F3F3',
    marginBottom: 30,
    marginTop: 80,
    marginLeft: 25,
    fontSize: 45,
    fontFamily: 'Karma'
  }
});