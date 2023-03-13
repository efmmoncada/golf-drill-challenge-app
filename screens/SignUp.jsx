import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  Button,
  StyleSheet,
  View,
  Image,
  Pressable,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import { useState, useRef } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import Buttons from "../src/components/Buttons";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const auth = getAuth();

export default function SignUp() {
  const [loaded] = useFonts({
    Karma: require('../assets/fonts/Karma-Regular.ttf')
  });
  
  const [playerSelected, setPlayerSelected] = useState(false);
  const [coachSelected, setCoachSelected] = useState(false);
 
 //Functions for handling text entry into button fields
 
  const [email, setEmail] = useState('');
  const emailRef = useRef(null);
  const [password, setPassName] = useState('');
  const passNameRef = useRef(null);
  const [confirmpassword, setConfirmPassword] = useState('');
  const [validateMessage, setValidationMessage] = useState ('');

  let validateAndSet = (value, valueToCompare, setValue) =>{
    value !== valueToCompare
    ?setValidationMessage('Passwords do not match') : setValidationMessage('')
    setValue(value)
  }

  async function createAccount(){
    email === '' || password === ''
    ?setValidationMessage('Required field missing')
    : ''

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Sign Up Sucessful");
      navigation.navigate("SignIn");
    } catch (error) {
      setValidationMessage(error.message)
    }
  }

  const [showPlayerBorder, setShowPlayerBorder] = useState(false);
  const [showCoachBorder, setShowCoachBorder] = useState(false);
  const navigation = useNavigation();
  const [buttonOpacity, setButtonOpacity] = useState(1);
  const [createOpacity, setcButtonOpacity] = useState(1);
  const handlePlayerPress = () => {
    if (playerSelected) {
      setPlayerSelected(false);
      setShowPlayerBorder(false);
    } else {
      setPlayerSelected(true);
      setShowPlayerBorder(true);
    }
    setCoachSelected(false);
    setShowCoachBorder(false);
  };
  const handleCoachPress = () => {
    if (coachSelected) {
      setCoachSelected(false);
      setShowCoachBorder(false);
    } else {
      setCoachSelected(true);
      setShowCoachBorder(true);
    }
    setPlayerSelected(false);
    setShowPlayerBorder(false);
  };

return (

<KeyboardAvoidingView style={styles.container} behavior='position'>
  <View style={styles.backButton}>
    <Buttons theme="backOrange" style={styles.backButton}/>
  </View>
  <View style={styles.titleContainer}>
    <Text style={styles.titleFont}>Sign Up</Text>
    <Text style={styles.selectFont}>I am a..</Text>
  </View>
  <View style={styles.selectContainer}>
    <Pressable onPress={handlePlayerPress}>
      <View style={[styles.imagepl, playerSelected && styles.selectedImageContainer]}>
        <Image
          source={require('../assets/images/player.png')}
          resizeMode="contain"
          style={styles.imagepl}
        />
      </View>
    </Pressable>
    <View style={styles.imageco}>
      <Pressable onPress={handleCoachPress}>
        <View style={[styles.imageco, coachSelected && styles.selectedImageContainer]}>
          <Image
            source={require('../assets/images/coach.png')}
            resizeMode="contain"
            style={styles.imageco}
          />
        </View>
      </Pressable>
    </View>
  </View>
  <View style={styles.textContainer}>
    <Text style={styles.playerText}>Player</Text>
    <Text style={styles.coachText}>Coach</Text>
  </View>
  <View style={styles.buttonContainer}>
    <Pressable style={styles.regButton} onPress={() => {
      emailRef.current.focus(); 
    }}>
      <TextInput
        ref={emailRef}
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        placeholderTextColor = "#767170"
      />
    </Pressable>
    <Pressable style={styles.regButton} onPress={() => {
      passNameRef.current.focus(); 
    }}>
      <TextInput
        ref={passNameRef}
        style={styles.input}
        onChangeText={(value)=>validateAndSet(value, confirmpassword, setPassName)}
        value={password}
        placeholder="Password"
        placeholderTextColor = "#767170"
        secureTextEntry={true}
        maxLength={30}
      />
    </Pressable>
    <Pressable style={styles.regButton} onPress={() => {
      passNameRef.current.focus(); 
    }}>
      <TextInput
        style={styles.input}
        onChangeText={(value)=>validateAndSet(value, password, setConfirmPassword)}
        value={confirmpassword}
        placeholder="Confirm password"
        placeholderTextColor = "#767170"
        secureTextEntry={true}
        maxLength={30}
      />
    </Pressable>
  </View>
  <Text style={styles.error}>{validateMessage}</Text>
  <View style={styles.buttonContainer}>
    <Pressable style={[styles.googleButton, {opacity: buttonOpacity}]}
    onPress={() => {
    //Handle press
    }}
    onPressIn={() => {
      setButtonOpacity(0.5);
    }}
    onPressOut={() => {
      setButtonOpacity(1);
    }}>
      <FontAwesome name="google" size={24} color='white' />
      <Text style={styles.googleFont}>Sign in with Google</Text>
    </Pressable>
  </View>
  <View style={[styles.createButtonContainer, { opacity: createOpacity }]}>
  <Pressable
  style={styles.createButton}
  onPress={createAccount}
  onPressIn={() => {
    setcButtonOpacity(0.5);
  }}
  onPressOut={() => {
    setcButtonOpacity(1);
  }}
  >
  <Text style={styles.buttonFont2}>Create an account</Text>
</Pressable>



  </View>
  <StatusBar style="auto" />
</KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#F0E8E8",
  },
  titleContainer: {
    paddingTop: 50,
    backgroundColor: "#F0E8E8",
    height: 220,
    alignItems: "center",
  },
  titleFont: {
    color: "#D73F09",
    fontSize: 40,
    fontFamily: "Karma",
  },
  selectFont: {
    color: "#D73F09",
    fontSize: 20,
    paddingTop: 60,
    fontFamily: "Karma",
  },
  selectContainer:{
    marginLeft: 60,
    flexDirection: 'row',
    paddingLeft: 40,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 40,
    alignItems: 'center',
  },
  selectedImageContainer: {
    borderWidth: 2,
    borderRadius: 8,
    padding: 2,
    height: 95,
    width: 95,
    borderColor: '#D73F09',
    alignContent: 'center',
    justifyContent: 'center',
  },
  imagepl: {
    flex: 1,
    position: "relative",
    height: 90,
    width: 90,
    alignItems: "center",
    justifyContent: "center",
    
  },
  imageco: {
    flex: 1,
    position: "relative",
    height: 90,
    width: 90,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    flexDirection: "row",
    marginLeft: 100,
    marginRight: 80,
    alignItems: "center",
  },
  playerText: {
    flex: 1,
    fontSize: 20,
    marginLeft: 22,
    fontFamily: "Karma",
    color: "#D73F09",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  coachText: {
    flex: 1,
    fontSize: 20,
    marginLeft: 60,
    fontFamily: "Karma",
    color: "#D73F09",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    paddingLeft: 30,
    paddingTop: 20,
    paddingBottom: 40,
    paddingRight: 30,
  },
  regButton: {
    width: 370,
    backgroundColor: "#E9E2E2",
    alignItems: "flex-start",
    height: 50,
    borderRadius: 12,
    paddingTop: 13,
    marginTop: 10,
  },
  googleButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#D73F09',
    borderColor: '#D73F09',
    borderWidth: 1,
    borderRadius: 12,
    marginTop: 30,
    padding: 5,
    width: '100%',
    maxWidth: 200,
  },
  createButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
   createButton: {
    width: 270,
    backgroundColor: "#D73F09",
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 12,
    paddingTop: 5,
    marginTop: -10
  },
  buttonFont: {
    marginLeft: 20,
    color: "#767170",
    fontSize: 18,
    fontFamily: "Karma",
  },
  input: {
    marginLeft: 20,
    fontFamily: "Karma",
    fontSize: 18,
    color: 'black'
  },
  googleFont:{
    marginLeft: 5,
    color: 'white',
    fontSize: 14,
    fontFamily: 'Arial'
  },
  buttonFont2: {
    color: "white",
    fontSize: 22,
    fontFamily: "Karma",
  },
  error: {
    color: 'red',
    fontSize: 16,
    fontFamily: "Karma",
    justifyContent: 'center',
    alignSelf: 'center',
  }
});
