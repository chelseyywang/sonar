// Learn more or give us feedback
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import HomeScreen from './src/screens/Home'; 
import ProfileScreen from './src/screens/Profile'; 
import EventsScreen from './src/screens/Events'; 
import Login from './src/screens/Login'; 

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>HomeScreen</Text>
//       </View>
//     )
//   }
// }

// class ProfileScreen extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>ProfileScreen</Text>
//       </View>
//     )
//   }
// }

// class HistoryScreen extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>HistoryScreen</Text>
//       </View>
//     )
//   }
// }

// class CartScreen extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>CartScreen</Text>
//       </View>
//     )
//   }
// }

const TabBarComponent = props => <BottomTabBar />;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const TabNavigator = createMaterialBottomTabNavigator(
  {

    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Text>Home</Text>
            {/* <Icon style={[{color: tintColor}]} size={25} name={'ios-home'} /> */}
          </View>
        ),
        tabBarLabel: " ",
        barStyle: { backgroundColor: '#75F6F2',
        paddingTop: 10,
        height: 60,
      },
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Text>Profile</Text>{/* <Icon style={[{color: tintColor}]} size={25} name={'ios-person'} /> */}
          </View>
        ),
        activeColor: '#ffffff',
        inactiveColor: '#a3c2fa',
        barStyle: { backgroundColor: '#75F6F2',
        paddingTop: 10,
        height: 60,
      },
        tabBarLabel: " ",  
      }
    },
    Events: {
      screen: EventsScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Text>Events</Text>
            {/* <Icon style={[{color: tintColor}]} size={25} name={'ios-images'} /> */}
          </View>
        ),
        activeColor: '#ffffff',
        inactiveColor: '#92c5c2',
        barStyle: { backgroundColor: '#75F6F2',
        paddingTop: 10,
        height: 60,
       },
        tabBarLabel: " ", 
      }
    },
    Login: {
      screen: Login,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Text>yik</Text>{/* <Icon style={[{color: tintColor}]} size={25} name={'ios-cart'} /> */}
          </View>
        ),
        activeColor: '#ffffff',
        inactiveColor: '#ffffff',
        shifting: false,
        tabBarLabel: " ",
         
        barStyle: { backgroundColor: '#75F6F2',
        paddingTop: 10,
        height: 60,    
      },
      }
    },
  },
  {
    initialRouteName: 'Home',
    activeColor: '#ffffff',
    inactiveColor: '#ffffff',
    shifting: false, 
    barStyle: { backgroundColor: '#75F6F2',
    paddingTop: 10,
    height: 60,

    
    },
  
    
  }
);

export default createAppContainer(TabNavigator);