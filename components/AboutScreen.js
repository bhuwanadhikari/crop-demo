import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity}  from 'react-native';

class AboutScreen extends Component {
   render(){
      return (
         <View>
            <TouchableOpacity onPress = {() => {
               alert("Touchable element clicked");
            }} style = {styles.touchbox}>
            <Text style = {styles.about}> This is about page</Text>
            </TouchableOpacity>
         </View>
      )
   }
}

const styles = StyleSheet.create({
   touchBox: {
      color: 'black',
      margin: 20,
      height: 200,
      textAlign: 'center'
   },
   about: {
      color: 'red',
      backgroundColor: 'silver'
   }
});

export default AboutScreen;