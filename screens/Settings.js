import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Pressable, Text, View } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from 'expo-font';

import Buttons from './buttons'

export default function App() {
  const [loaded] = useFonts({
    Karma: require('./assets/fonts/Karma-Regular.ttf')
  })

  if(!loaded)
  {
    return null;
  }

  return (
    <View style={styles.container}>
      <Buttons theme="close"/>
      <Text style={styles.title}>Settings</Text>
      <Pressable onPress={() => alert("You pressed General.")}>
          <Text style={styles.normalText}>General</Text>
      </Pressable>
      <Pressable >
          <Text style={styles.normalText}>Account Info</Text>
        </Pressable>
      <Pressable>
        <Text style={styles.normalText}>Notifications</Text>
      </Pressable>
      <Pressable>
        <Text style={styles.normalText}>History & privacy</Text>
      </Pressable>
      <Pressable>
        <Text style={styles.normalText}>Updates</Text>
      </Pressable>
      <Pressable>
        <Text style={styles.normalText}>About</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D73F09',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  normalText:{
    color: '#F6F3F3',
    marginLeft: 34,
    marginBottom: 12,
    fontSize: 25,
    fontFamily: 'Karma'
  },
  title:{
    color: '#F6F3F3',
    marginBottom: 30,
    marginTop: 80,
    marginLeft: 25,
    fontSize: 45,
    fontFamily: 'Karma'
  },
});