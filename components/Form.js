import React from 'react';
import t from 'tcomb-form-native';
import { View, StyleSheet, Button, Text} from 'react-native';

const Form = t.form.Form;
const user = t.struct({
   name: t.String,
   email: t.String,
   age: t.Number
});

export default class FormBox extends React.Component {

   onCheckHandler = () => {
      let value = this.refs.form.getValue();
      alert(`Value is: ${value}`);
   };

   render(){
      return(
         <View style = {styles.container}>
         <Form ref = 'form' type={user}/>
            <Button onPress = {this.onCheckHandler} title = "Check me!"/>
            <Text>
            </Text>
         </View>
      )
   }
}

const styles = StyleSheet.create({
   container: {
      width: 300
   }
});