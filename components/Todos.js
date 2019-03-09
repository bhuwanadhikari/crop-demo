import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
// import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import axios from 'axios';


class Todos extends React.Component {


/*
  componentDidMount(){
      axios.get('https://jsonplaceholder.typicode.com/todos/1').then(
         (res) => {
            const todoData = {...res.data};
         }
      ).catch((err) => {
         console.log(err);
      })
   }*/
   render() {
      return (
         <View style={{ color:'white', flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'gray' }}>
            <Text style = {{color: 'white', fontSize: 20}}>Todos!</Text>

         </View>
      );
   }
}



export default Todos;