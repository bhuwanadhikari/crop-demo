import React from 'react';
import {
   Text,
   View,
   TouchableOpacity }  from 'react-native';
import {
   createSwitchNavigator,
   createAppContainer
} from 'react-navigation';
import WelcomeScreen from './components/Welcome';
import DashboardScreen from './components/Dashboard';

class App extends React.Component {
   render(){
      return (
         <AppContainer/>
      )
   }
}

const AppSwitchNav = createSwitchNavigator({
   Welcome: {
      screen: WelcomeScreen
   },
   Dashboard: {
      screen: DashboardScreen
   }
});

const AppContainer = createAppContainer(AppSwitchNav);

export default App;