import React, {Component} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import Form from '../Form';


class Settings extends Component {
   constructor(){
      super();
      this.state = {
         testBool : false
      }
   }

   render() {
      return (
         <View style = {{marginTop: 100}}>
            <Text style = {{textAlign:'center', fontSize: 20}}>
               Settings Page Done
            </Text>
            <Button
               title = "Toggle Form"
               onPress = {() => {this.setState({testBool: !this.state.testBool})}}> </Button>
            {this.state.testBool? (<Form/>): null}
         </View>
      );
   }
}



export default Settings;
