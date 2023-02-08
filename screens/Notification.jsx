//import { StatusBar } from 'expo-status-bar';
import { View, Text, ImageBackground, StyleSheet, Image ,  TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native";
//import assets from "./assets/images";
import { StatusBar } from "react-native";


//for players home screen

export default function HomeScreen( {navigation}) {

    


return (

//osu logo
<SafeAreaView style = {styles.container}> 
 


<View>
        <TouchableOpacity activeOpacity={0.5}>
          <Image source={require ('../../assets/Icons/BackArrow_icon.png')}
            style={styles.back_button} />
        
          


  </TouchableOpacity>
</View>



<View> 
<Text style={styles.ScreenTitle}>Notifcation</Text>
</View>
     
  
    <View style={styles.button_icons}>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}>
          <Image source={require ('../../assets/Icons/Notification_icon.png')}
            style={styles.buttonImageIconStyle} />
          <Text style={styles.buttonTextStyle}>A new Drill has been assigned</Text>
          <Text style={styles.buttonTextStyle_day}>Feb 17, 2022</Text>


  </TouchableOpacity>


 <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5}>
          <Image
            source={require( '../../assets/Icons/Notification_icon.png')}
            style={styles.buttonImageIconStyle}
          />
           
          <Text style={styles.buttonTextStyle}>A new Drill has been assigned</Text>
          <Text style={styles.buttonTextStyle_day}>Nov 2, 2022</Text>
        </TouchableOpacity>

 
        <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5}>
          <Image
            source={require(  '../../assets/Icons/Notification_icon.png')}
            style={styles.buttonImageIconStyle}
          />
           
          <Text style={styles.buttonTextStyle}>A new Drill has been assigned</Text>
          <Text style={styles.buttonTextStyle_day}>Dec 5, 2022</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5}>
          <Image
            source={require(  '../../assets/Icons/Notification_icon.png')}
            style={styles.buttonImageIconStyle}
          />
           
          <Text style={styles.buttonTextStyle}>A new Drill has been assigned</Text>
          <Text style={styles.buttonTextStyle_day}>Jan 10, 2022</Text>
        </TouchableOpacity>

  </View>




  
 
   </SafeAreaView>

);
} 



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#DB5525",

  },

  back_button: {

    width: 43,
    height: 43,
    marginLeft: -170,
    marginTop: 30,
    padding: 30,

  },


  ScreenTitle: {
    color: 'white',
    marginBottom: 4,
    marginRight: 150,
    marginTop: 75,
    fontSize: 40,
    fontStyle: "normal",




  },

//the group of buttons arrangment
button_icons: {
flex: 1,
margin: 0,
marginTop: 10,
padding: 30,
marginLeft: 100,
},


buttonStyle: {
  flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 65,
    borderRadius: 10,
    margin: 15,
    width: 300,
    marginLeft: -100,
     
},

buttonImageIconStyle: {
    padding: 10,
    margin: 30,
    height: 35,
    width: 35,
    resizeMode: 'stretch',

},
buttonTextStyle: {
    color: 'black',
    marginBottom: 4,
    marginLeft: -4,

},

buttonTextStyle_day: {
    marginTop: 40,
    marginLeft: -90,
    



},



});