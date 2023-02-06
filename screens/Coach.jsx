import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {Text, Button, StyleSheet, View, Image, Pressable, SafeAreaView} from 'react-native'
import { useState } from 'react';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from 'expo-font';
import * as ImagePicker from 'expo-image-picker';

import Buttons from '../src/components/Buttons'

export default function Coach() {
  const [loaded] = useFonts({
    Karma: require('../assets/fonts/Karma-Regular.ttf')
  })

  if(!loaded)
  {
    return null;
  }
  
return (

<View style={styles.container}>
  <View style={styles.backButton}>
    <Buttons theme="backOrange" style={styles.backButton}/>
  </View>
  <View style={styles.titleContainer}>
    <Text style={styles.titleFont}>Welcome</Text>
  </View>
  <View style={styles.selectContainer}>
    <View style={styles.imageco}>
      <Image source={require('../assets/images/coach.png')} 
        resizeMode='contain' 
        style={{width: 150, height: 150}} 
      />
    </View>
  </View>
    
    <View style={styles.buttonContainer}>
      <Pressable style = {styles.regButton} onPress={() => {
        // Code for email button press goes here 
        }}>
      <Text style={styles.buttonFont}>Email</Text>
      </Pressable>
      <Pressable style = {styles.regButton} onPress={() => {
        // Code for password button press goes here 
        }}>
      <Text style={styles.buttonFont}>Password</Text>
      </Pressable>
      <Pressable onPress={() => {
        // Code for account button press goes here 
        }}>
      <Text style={styles.buttonFont2}>Forgot your password?</Text>
      </Pressable>
      <Pressable style = {styles.loginButton} onPress={() => {
        // Code for password button press goes here 
        }}>
      <Text style={styles.buttonFont3}>Login</Text>
      </Pressable>
    </View>
  <StatusBar style="auto" />
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#F0E8E8',
  },
  titleContainer:{
    paddingTop: 100,
    backgroundColor: '#F0E8E8',
    height: 170,
    alignItems: 'center',
  },
  titleFont:{
    color: '#D73F09',
    fontSize: 40,
    fontFamily: 'Karma'
  },
  selectContainer:{
    flexDirection: 'row',
    paddingLeft: 40,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 40,
    alignItems: 'center',
  },
  imageco: {
    flex: 1,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer:{
    flexDirection: 'row',
    marginLeft: 100,
    marginRight: 80,
    alignItems: 'center',
  },
  buttonContainer:{
    paddingLeft: 30,
    paddingTop: 60,
    paddingBottom: 40,
    paddingRight: 30
  },
  regButton:{
    width: 370,
    backgroundColor: "#E9E2E2",
    alignItems: 'left',
    height: 50,
    borderRadius: 12,
    paddingTop: 13,
    marginTop: 10
  },
  loginButton:{
    marginLeft: 80,
    width: 200,
    backgroundColor: "#D73F09",
    alignItems: 'center',
    height: 60,
    borderRadius: 16,
    paddingTop: 10,
    marginTop: 80
  },
  buttonFont:{
    marginLeft: 20,
    color: '#767170',
    fontSize: 18,
    fontFamily: 'Karma'
  },
  buttonFont2:{
    paddingTop: 10,
    color: '#767170',
    fontSize: 14,
    fontFamily: 'Karma'
  },
  buttonFont3:{
    color: 'white',
    fontSize: 28,
    fontFamily: 'Karma'
  },
    
  })