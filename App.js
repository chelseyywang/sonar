import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

import 'react-native-gesture-handler';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './src/screens/Home'; 
import Login from './src/screens/Bulletin'; 
import Profile from './src/screens/Profile'; 
// import LoginScreen from './src/screens/Bulletin';

import AppNavigator from './src/navigation/AppNavigator'; 

export default function App() {
  return(
    <AppNavigator/>
  );
}
// const TabBarComponent = props => <BottomTabBar />;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   }
// });

// const TabNavigator = createMaterialBottomTabNavigator(
//   {

//     Home: {
//       screen: HomeScreen,
//       navigationOptions: {
//         tabBarIcon: ({ tintColor }) => (
//           <View>
//             <Text>Home</Text>
//             {/* <Icon style={[{color: tintColor}]} size={25} name={'ios-home'} /> */}
//           </View>
//         ),
//         tabBarLabel: " ",
//         barStyle: { backgroundColor: '#75F6F2',
//         paddingTop: 10,
//         height: 60,
//       },
//       }
//     },
//     Profile: {
//       screen: ProfileScreen,
//       navigationOptions: {
//         tabBarIcon: ({ tintColor }) => (
//           <View>
//             <Text>Profile</Text>{/* <Icon style={[{color: tintColor}]} size={25} name={'ios-person'} /> */}
//           </View>
//         ),
//         activeColor: '#ffffff',
//         inactiveColor: '#a3c2fa',
//         barStyle: { backgroundColor: '#75F6F2',
//         paddingTop: 10,
//         height: 60,
//       },
//         tabBarLabel: " ",  
//       }
//     },
//     Events: {
//       screen: EventsScreen,
//       navigationOptions: {
//         tabBarIcon: ({ tintColor }) => (
//           <View>
//             <Text>Events</Text>
//             {/* <Icon style={[{color: tintColor}]} size={25} name={'ios-images'} /> */}
//           </View>
//         ),
//         activeColor: '#ffffff',
//         inactiveColor: '#92c5c2',
//         barStyle: { backgroundColor: '#75F6F2',
//         paddingTop: 10,
//         height: 60,
//        },
//         tabBarLabel: " ", 
//       }
//     },
//     Login: {
//       screen: LoginScreen,
//       navigationOptions: {
//         tabBarIcon: ({ tintColor }) => (
//           <View>
//             <Text>yik</Text>{/* <Icon style={[{color: tintColor}]} size={25} name={'ios-cart'} /> */}
//           </View>
//         ),
//         activeColor: '#ffffff',
//         inactiveColor: '#ffffff',
//         shifting: false,
//         tabBarLabel: " ",
         
//         barStyle: { backgroundColor: '#75F6F2',
//         paddingTop: 10,
//         height: 60,    
//       },
//       }
//     },
//   },
//   {
//     initialRouteName: 'Home',
//     activeColor: '#ffffff',
//     inactiveColor: '#ffffff',
//     shifting: false, 
//     barStyle: { backgroundColor: '#75F6F2',
//     paddingTop: 10,
//     height: 60,

    
//     },
  
    
//   }
// );

// // export default createAppContainer(TabNavigator);


// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// const AppNavigator = createStackNavigator(
//   {
//     Home: {
//       screen: Home, 
//       navigationOptions: {
//           headerShown: false,
//       },
//     },
//     Login: {
//       screen: Login, 
//       navigationOptions: {
//           headerShown: false,
//       },
//     },
//     Profile: {
//       screen: Profile, 
//       navigationOptions: {
//           headerShown: false,
//       },
//     },
//     },
//   //   {
//   //     initialRouteName: 'Home',
//   //   }, 
//   //   {
//   //     defaultNavigationOptions: {
//   //     headerShown: false, 
//   //   },
//   // }
// );

// export default createAppContainer(AppNavigator);



