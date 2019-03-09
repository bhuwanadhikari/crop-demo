import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Button} from 'react-native';
import {createDrawerNavigator, createBottomTabNavigator, createStackNavigator} from 'react-navigation';

import Timeline from './Dashboard/Timeline';
import Profile from './Dashboard/Profile';
import Settings from './Dashboard/Settings';

class Dashboard extends Component {
   render() {
      return (
         <View>
            <Text>Hello Dashboard Drawer</Text>
         </View>
      );
   }
}


const DashboardTabNav = createBottomTabNavigator({
   Timeline: {
      screen: Timeline
   },
   Profile: {
      screen: Profile
   },
   Settings: {
      screen: Settings
   },

},
   {
      navigationOptions: ({navigation}) => {
         const {routeName} = navigation.state.routes[navigation.state.index];
         return {title: routeName};
      },
      tabBarOptions: {
         labelStyle: {
            fontSize: 18,
            marginBottom: 5,
            color: 'gray'
         }
      }

   });

const DashboardStackNav = createStackNavigator({
   DashboardTabNav : DashboardTabNav
},
   {
      defaultNavigationOptions: ({navigation}) => {
         return {
            headerLeft: (<TouchableOpacity
               onPress = {() => navigation.openDrawer()}
               style={{marginLeft:10, marginRight: 50}}
            ><Text>Pull</Text></TouchableOpacity>)
         }
      }
   });

const DashboardDrawer = createDrawerNavigator({
   Dashboard: {
      screen: DashboardStackNav
   },
   Help: {
      screen: DashboardStackNav
   }
});



export default DashboardDrawer;
