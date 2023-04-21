import React, { useEffect, useState, useRef } from "react";
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
  Dimensions,
} from "react-native";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import Buttons from "../src/components/Buttons";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import Constants from "expo-constants";
import { moderateScale } from "../src/components/scaling_utilities";

const { width, height } = Dimensions.get('window');

const auth = getAuth();

WebBrowser.maybeCompleteAuthSession();

export default function Coach() {
  const [loaded] = useFonts({
    Karma: require("../assets/fonts/Karma-Regular.ttf"),
  });
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const emailRef = useRef(null);
  const [password, setPassword] = useState("");
  const [validationMessage, setValidationMessage] = useState("");
  const passwordRef = useRef(null);
  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState(null);
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: Constants.manifest.extra.EXPO_CLIENT_ID,
    androidClientId: Constants.manifest.extra.ANDROID_CLIENT_ID,
    iosClientId: Constants.manifest.extra.IOS_CLIENT_ID,
  });

  useEffect(() => {
    if (response?.type === "success") {
      setToken(response.authentication.accessToken);
      getGoogleUserInfo();
    }
  }, [response, token]);

  async function login() {
    if (email === "" || password === "") {
      setValidationMessage("Required field missing");
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate("Coaches_HomeScreen");
    } catch (error) {
      setValidationMessage(error.message);
    }
  }

  const getGoogleUserInfo = async () => {
    if (token === "") {
      return;
    }
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const user = await response.json();
      //setUserInfo(user);
      console.log("User Email = " + user.email);
      navigation.navigate("Home");
    } catch (error) {
      setValidationMessage(error.message);
    }
  };

  return (
    loaded && (
      <KeyboardAvoidingView style={styles.container} behavior="position">
        <View style={styles.backButton}>
          <Buttons theme="backOrange" style={styles.backButton} />
        </View>
        <View style={styles.titleContainer}>
          <Text allowFontScaling={false} style={styles.titleFont}>Welcome</Text>
        </View>
        <View style={styles.selectContainer}>
          <View style={styles.imageco}>
            <Image
              source={require("../assets/images/coach.png")}
              resizeMode="contain"
              style={{ width: width * 0.4, height: height * 0.16 }}
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
            <Text allowFontScaling={false} style={styles.buttonFont2}>Forgot your password?</Text>
          </Pressable>
          <Text allowFontScaling={false} style={{ marginTop: 10, color: "red" }}>
            {validationMessage}
          </Text>
          <Pressable style={styles.loginButton} onPress={login}>
            <Text allowFontScaling={false} style={styles.buttonFont3}>Login</Text>
          </Pressable>
          <View style={styles.outerDividerView}>
            <View style={styles.innerDividerView} />
            <View>
              <Text allowFontScaling={false} style={styles.dividerText}>Or</Text>
            </View>
            <View style={styles.innerDividerView} />
          </View>
          <Pressable
            style={styles.googleButton}
            onPress={() => {
              //promptAsync(({ useProxy: false, showInRecents: true })
              promptAsync();
            }}
          >
            <Image
              source={require("../assets/images/Google_Sign_In.png")}
              resizeMode="contain"
              style={{ width: 200, height: 60 }}
            />
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
    paddingTop: moderateScale(70),
    backgroundColor: "#F0E8E8",
  },
  titleContainer: {
    paddingTop: moderateScale(65),
    backgroundColor: "#F0E8E8",
    height: moderateScale(130),
    alignItems: "center",
  },
  titleFont: {
    color: "#D73F09",
    fontSize: moderateScale(40),
    fontFamily: "Karma",
  },
  selectContainer: {
    flexDirection: "row",
    paddingLeft: moderateScale(40),
    paddingTop: moderateScale(10),
    paddingBottom: moderateScale(20),
    paddingRight: moderateScale(30),
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
    marginLeft: moderateScale(30),
    marginRight: width * 0.3,
    alignItems: "center",
  },
  buttonContainer: {
    paddingLeft: moderateScale(30),
    paddingTop: moderateScale(30),
    paddingBottom: moderateScale(25),
    paddingRight: moderateScale(30),
  },
  regButton: {
    width: moderateScale(370, 0.95),
    backgroundColor: "#E9E2E2",
    alignItems: "left",
    height: moderateScale(45),
    borderRadius: 12,
    paddingTop: moderateScale(10),
    marginTop: moderateScale(10),
  },
  loginButton: {
    marginLeft: moderateScale(80),
    width: moderateScale(200),
    backgroundColor: "#D73F09",
    alignItems: "center",
    height: moderateScale(55),
    borderRadius: 16,
    paddingTop: moderateScale(8),
    marginTop: moderateScale(120),
  },
  googleButton: {
    // TODO: Adapt to use moderate scaling
    alignItems: "center",
    marginLeft: 5,
    marginTop: 10,
  },
  outerDividerView: {
    // TODO: Adapt to use moderate scaling
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },
  innerDividerView: {
    // TODO: Adapt to use moderate scaling
    flex: 1,
    height: 1,
    backgroundColor: "#767170",
  },
  dividerText: {
    // TODO: Adapt to use moderate scaling
    width: 50,
    textAlign: "center",
    fontFamily: "Karma",
    fontSize: 18,
    color: "767170",
  },
  buttonFont: {
    marginLeft: moderateScale(20),
    color: "#767170",
    fontSize: moderateScale(18),
    fontFamily: "Karma",
  },
  buttonFont2: {
    paddingTop: moderateScale(10),
    color: "#767170",
    fontSize: moderateScale(14),
    fontFamily: "Karma",
    paddingLeft: moderateScale(6),
  },
  buttonFont3: {
    color: "white",
    fontSize: moderateScale(28),
    fontFamily: "Karma",
  },
});
