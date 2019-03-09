import React, {Component} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

import axios from 'axios';

class Timeline extends Component {
   constructor(){
      super();
      this.state = {
         data: null
      }
   }

   componentDidMount(){
      axios.get('http://localhost:5000/api/userProfile/all')
         .then(res => {
            this.setState({data: res.data});
            console.log(data);
         })
         .catch(err => {
            console.log(err);
         });
   }

   render() {
      return (
         <View style = {{marginTop: 100}}>
            <Text style = {{textAlign:'center', fontSize: 20}}>
               TimmeLine Page
            </Text>
            <Button
               title = "Back to Welcome Page"
               onPress = {()=> {this.props.navigation.navigate('Welcome')}}
            > </Button>
         </View>
      );
   }
}


export default Timeline;
