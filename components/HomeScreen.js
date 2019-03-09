import React from "react";
import {StyleSheet,View, Text, Button} from 'react-native';
import Register from "../view/Register";
import Login from '../view/Login';
import Form from './Form';

class HomeScreen extends React.Component {
   constructor(props){
      super(props);
      this.state = {
         showForm: false
      };


   }

   onClickHandler = (e) => {
      e.preventDefault();
      this.setState({showForm: !this.state.showForm});
   };

   render() {
      return (
         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
            <Text style = {atyles.heading} >Get connected with us</Text>
            <Button
               color = "blue"
               title = "Register!"
               onPress = {this.onClickHandler}
            > </Button>
            <Button
               color= "purple"
               title = "Sign In"
               onPress = {() => this.props.navigation.navigate('Login')}
            > </Button>
            {this.state.showForm?(<Form/>):null}
         </View>
      );
   }
}



      const styles =  StyleSheet.create({
         heading: {
           fontFamily: 'Verdana',
           fontSize: 20
         },

         register: {
            margin: '20px',
            flex: 1
         },

         login: {
            margin: 20,
            flex: 2
         }
      });


export default HomeScreen;