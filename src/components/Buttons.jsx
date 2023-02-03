import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Ionicons } from '@expo/vector-icons';

export default function Buttons({theme})
{
  // if button is "back", then output a back button.
  if(theme === "back")
  {
    return(
        <View style>
          <Pressable style={styles.backButtonContainer} onPress={()=> alert("You pressed the back button")}>
              <FontAwesome
              name="arrow-left"
              size={30}
              color="#D73F09"
              style= {styles.buttonIcon}/>
          </Pressable>
        </View>
      )
  }
  // if button is "close", then output an X button.
  if(theme === "close")
  {
    return(
        <View style>
          <Pressable onPress={()=> alert("You pressed the close button")}>
              <Ionicons
              name="close-sharp"
              size={40}
              color="white"
              style= {styles.generalButton}/>
          </Pressable>
        </View>
      )
  }
  if(theme === "backOrange")
  {
    return(
      <View style>
         <Pressable style={styles.orangeContainer} onPress={()=> alert("You pressed the back button")}>
              <FontAwesome
              name="arrow-left"
              size={30}
              color="white"
              style= {styles.buttonIcon}/>
          </Pressable>
      </View>
    )
  }
  if(theme === "editButton")
  {
    return(
        <View style>
          <Pressable style={styles.topLeftPosition} onPress={()=> alert("You pressed the edit button")}>
              <FontAwesome
              name="pencil"
              size={30}
              color="white"
              style= {styles.adjustment}/>
          </Pressable>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  // position the back button on the left top corner.
    backButtonContainer:{
        backgroundColor: "white",
        padding: 4,
        width: 40,
        height: 40,
        borderRadius: 20,
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 10
    },
    // makes sure the icon is placed in the middle.
    buttonIcon:{
        marginLeft: 2
    },
    // places the button on the top right corner of the screen.
    generalButton:{
        marginTop: -79,
        marginLeft: 260
    },
    topLeftPosition:{
      backgroundColor: "#D73F09",
      padding: 4,
      width: 40,
      height: 40,
      borderRadius: 30,
      marginLeft: 350,
      marginTop: -39
    },
    orangeContainer:{
        backgroundColor: "#D73F09",
        padding: 4,
        width: 40,
        height: 40,
        borderRadius: 30,
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 25
    },
    adjustment:{
      marginLeft: 4
    }
})