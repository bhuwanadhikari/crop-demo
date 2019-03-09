import React, {Component} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

class Welcome extends Component {
   render() {
      return (
         <View>
            <Text style = {{textAlign: 'center', marginTop: 150, fontSize: 20}}>
               Welcome
            </Text>
            <View style = {{margin: 10}}>
               <Button
                  color = "purple"
                  title = "Register"
                  onPress = {()=> {this.props.navigation.navigate('Dashboard')}}
               > </Button>
            </View>
            <View style = {{margin: 10}}>
               <Button
                  title = "Login"
                  onPress = {()=> {this.props.navigation.navigate('Dashboard')}}
               > </Button>
            </View>
         </View>
      );
   }
}


export default Welcome;
