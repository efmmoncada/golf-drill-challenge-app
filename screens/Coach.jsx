import React, { useState, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  Button,
  TextInput,
  StyleSheet,
  View,
  Image,
  Pressable,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import Buttons from "../src/components/Buttons";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();

export default function Coach() {
  const [loaded] = useFonts({
    Karma: require("../assets/fonts/Karma-Regular.ttf"),
  });
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const emailRef = useRef(null);
  const [password, setPassword] = useState("");
  const [validationMessage, setValidationMessage] = useState ('');
  const passwordRef = useRef(null);

  async function login(){
    if(email === '' || password === ''){
      setValidationMessage('Required field missing');
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigation.navigate('Coaches_HomeScreen');
    } catch (error){
      setValidationMessage(error.message);
    }
  }

 
  return (
    loaded && (
      <KeyboardAvoidingView style={styles.container} behavior="position">
        <View style={styles.backButton}>
          <Buttons theme="backOrange" style={styles.backButton} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleFont}>Welcome</Text>
        </View>
        <View style={styles.selectContainer}>
          <View style={styles.imageco}>
            <Image
              source={require("../assets/images/coach.png")}
              resizeMode="contain"
              style={{ width: 150, height: 150 }}
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.regButton}
            onPress={() => {
              emailRef.current.focus();
            }}
          >
            <TextInput
              ref={emailRef}
              style={styles.buttonFont}
              onChangeText={setEmail}
              value={email}
              placeholder="Email"
              placeholderTextColor="#767170"
            />
          </Pressable>
          <Pressable
            style={styles.regButton}
            onPress={() => {
              passwordRef.current.focus();
            }}
          >
            <TextInput
              ref={passwordRef}
              style={styles.buttonFont}
              onChangeText={setPassword}
              value={password}
              placeholder="Password"
              placeholderTextColor="#767170"
              secureTextEntry={true}
            />
          </Pressable>
          <Pressable
            onPress={() => {
              // Code for account button press goes here
            }}
          >
            <Text style={styles.buttonFont2}>Forgot your password?</Text>
          </Pressable>
          <Text style={{marginTop: 10, color: 'red'}}>{validationMessage}</Text>
          <Pressable style={styles.loginButton} onPress={login}>
            <Text style={styles.buttonFont3}>Login</Text>
          </Pressable>
        </View>
        <StatusBar style="auto" />
      </KeyboardAvoidingView>
    )
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#F0E8E8",
  },
  titleContainer: {
    paddingTop: 100,
    backgroundColor: "#F0E8E8",
    height: 170,
    alignItems: "center",
  },
  titleFont: {
    color: "#D73F09",
    fontSize: 40,
    fontFamily: "Karma",
  },
  selectContainer: {
    flexDirection: "row",
    paddingLeft: 40,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 40,
    alignItems: "center",
  },
  imageco: {
    flex: 1,
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    flexDirection: "row",
    marginLeft: 100,
    marginRight: 80,
    alignItems: "center",
  },
  buttonContainer: {
    paddingLeft: 30,
    paddingTop: 60,
    paddingBottom: 40,
    paddingRight: 30,
  },
  regButton: {
    width: 370,
    backgroundColor: "#E9E2E2",
    alignItems: "left",
    height: 50,
    borderRadius: 12,
    paddingTop: 13,
    marginTop: 10,
  },
  loginButton: {
    marginLeft: 80,
    width: 200,
    backgroundColor: "#D73F09",
    alignItems: "center",
    height: 60,
    borderRadius: 16,
    paddingTop: 10,
    marginTop: 80,
  },
  buttonFont: {
    marginLeft: 20,
    color: "#767170",
    fontSize: 18,
    fontFamily: "Karma",
  },
  buttonFont2: {
    paddingTop: 10,
    color: "#767170",
    fontSize: 14,
    fontFamily: "Karma",
  },
  buttonFont3: {
    color: "white",
    fontSize: 28,
    fontFamily: "Karma",
  },
});
