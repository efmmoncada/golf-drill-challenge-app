import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Pressable, Text, View, Image, TextInput, SafeAreaView } from 'react-native';
import { useState } from 'react';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from 'expo-font';
import * as ImagePicker from 'expo-image-picker';

import Buttons from '../src/components/Buttons'

const bennyProfilePic = require('../assets/images/bennyprofpic.png')

export default function Profile() {
  const [loaded] = useFonts({
    Karma: require('../assets/fonts/Karma-Regular.ttf')
  })

  if(!loaded)
  {
    return null;
  }

  return (
    <View style={styles.container}>
        <View style={styles.profileContainer}>
          <Buttons theme="backOrange" style={styles.backButton}/>
          <Buttons theme= "editButton"/>
              <View style={styles.pictureContainer}>
                <Image source={bennyProfilePic} style={styles.profileImage}/>
                <Text style={styles.title}>Benny Beaver</Text>
                <Text style={styles.subtitle}>Player</Text>
              </View>
        </View>
        <View style={styles.mainContainer}>
          <Text style={styles.subtitleWhite}>Email</Text>
          <View style={styles.textContainer}>
            <Text style={styles.textGrey}>bennythebeaver@oregonstate.edu</Text>
          </View>
          <Pressable style={styles.whiteButton} onPress={()=> alert("You pressed the reset password button")}>
            <Text style={styles.subtitleGrey}>Reset your password</Text>
          </Pressable>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D73F09',
  },
  profileContainer:{
    paddingTop: 50,
    backgroundColor: '#F0E8E8',
    height: 300
  },
  normalText:{
    color: '#767170',
    marginLeft: 34,
    marginBottom: 12,
    fontSize: 25,
    fontFamily: 'Karma'
  },
  title:{
    color: '#767170',
    fontSize: 30,
    paddingTop: 10,
    fontFamily: 'Karma'
  },
  subtitle:{
    color: '#767170',
    fontSize: 20,
    paddingBottom: 10,
    fontFamily: 'Karma'
  },
  subtitleWhite:{
    color: 'white',
    fontSize: 20,
    fontFamily: 'Karma'
  },
  textContainer:{
    width: 360,
    height: 35,
    backgroundColor: '#F0E8E8',
    borderRadius: 10,
    paddingLeft: 15,
    paddingTop: 4
  },
  textGrey:{
    color: '#767170',
    fontSize: 20,
    fontFamily: 'Karma',
  },
  profileImage:{
      borderRadius: 60,
      width: 125,
      height: 125,
  },
  pictureContainer:{
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    paddingBottom: 30,
    paddingRight: 1
  },
  mainContainer:{
    paddingLeft: 30,
    paddingTop: 20,
    paddingBottom: 40,
    paddingRight: 30
  },
  whiteButton:{
    width: 370,
    backgroundColor: "#F0E8E8",
    alignItems: 'center',
    height: 40,
    borderRadius: 10,
    paddingTop: 7,
    marginTop: 460
  },
  subtitleGrey:{
    color: '#767170',
    fontSize: 20,
    fontFamily: 'Karma'
  }
});