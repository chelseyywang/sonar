import React from 'react';
import {createAppContainer} from 'react-navigation'; 
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Platform } from 'react-native'; 
import EventsScreen from '../screens/Events'; 
import ProfileScreen from '../screens/Profile'; 
import HomeScreen from '../screens/Home';
import BulletinScreen from '../screens/Bulletin'; 
import { color } from 'react-native-reanimated';


const config = { headerMode: 'screen'};  

const HomeStack = createStackNavigator(
    {
      Home: HomeScreen,
      Bulletin: BulletinScreen, 
    },
    config
  );

HomeStack.navigationOptions = {
    // tabBarVisible: false, 
    headerVisible: false, 
}

HomeStack.path = ''; 

const ProfileStack = createStackNavigator(
    {
        Profile: ProfileScreen,
        Bulletin: BulletinScreen, 
    },
    config
)

ProfileStack.navigationOptions = {
    header: {
        visible: false,
      }
}; 

ProfileStack.path = ''; 

const EventsStack = createStackNavigator(
    {
        Events: EventsScreen, 
        Bulletin: BulletinScreen, 
    },
    config
);

EventsStack.navigationOptions = {
    header: {
        visible: false,
      }
}

EventsStack.path = ''; 

const tabNavigator = createBottomTabNavigator(
    {
        HomeStack, 
        ProfileStack, 
        EventsStack, 
    },
    // config, 
    {
        headerMode: 'float', 
        navigationOptions: {
            header: null, 
        }
    }
);


tabNavigator.navigationOptions = {
    header: {
        visible: false,
      }
    
}; 



tabNavigator.path = ''; 

export default createAppContainer(tabNavigator); 