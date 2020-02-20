import React from 'react';
import {createAppContainer} from 'react-navigation'; 
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createSwitchNavigator } from 'react-navigation'; 
import { createDrawerNavigator } from 'react-navigation-drawer'; 
import EventsScreen from '../screens/Events'; 
import ProfileScreen from '../screens/Profile'; 
import HomeScreen from '../screens/Home';
import BulletinScreen from '../screens/Bulletin'; 
import MapScreen from '../screens/Map'; 
import drawerContent from '../components/drawerContent'; 
import YourPostsScreen from '../screens/YourPosts';

// making header not visible 
const config = { headerMode: 'none'};  


// switch navigator DOESN'T allow swiping backwards --
// perfect functionality for a login screen
// HomeScreen holds the login screen atm 


const DrawerNavigator = createDrawerNavigator(
  {
    EventDrawer: EventsScreen, 
    Map: MapScreen, 
  },
  {
    contentComponent: drawerContent, 
  }
); 



const MiddleDrawerNavigator = createDrawerNavigator(
  {
    MapDrawer: MapScreen,
    YourPosts: YourPostsScreen, 
    Events: EventsScreen, 
  },
  {
    contentComponent: drawerContent, 
    // drawerPosition: "right",
    initialRouteName: "MapDrawer" 
  }
); 
 
const LeftStack = createSwitchNavigator(
    {
      Home: HomeScreen,
      // Events: EventsScreen, 
      Events: DrawerNavigator,
    }, // i guess this is some type of data structure
    config
    
  );



  // uses indexing into above data structure to control which screen has visible bottom tab bar
  LeftStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index == 0) {
      tabBarVisible = false;
    }
    return {
      tabBarVisible,
    };
  };

// don't know what this does but i copy pasted it in 
LeftStack.path = ''; 

// defining profile stack for bottom tab bar 
// bulletin stack is an example of a screen NOT found on bottom tab bar
// still need to be able to navigate to it though, so me and party app friend
//      figured out that including it in the stack navigators lets us navigate to it
const MiddleStack = createStackNavigator(
    {
        // Map: MapScreen, 
        MiddleDrawerNavigator, 
        Map: MapScreen, 
        Profile: ProfileScreen,
        Bulletin: BulletinScreen, 
       // HomeStack
    },
    config
)

// ProfileStack.navigationOptions = {
//     header: {
//         visible: false,
//       }
// }; 

MiddleStack.path = ''; 

// events tab
const RightStack = createStackNavigator(
    {
        // Events: EventsScreen, 
        Bulletin: BulletinScreen, 
    },
    config
);

RightStack.navigationOptions = {
    tabBarVisible: true, 
}

RightStack.path = ''; 

// actual bottom tab bar -- these are the three tabs 
const tabNavigator = createBottomTabNavigator(
    {
        LeftStack, 
        MiddleStack, 
        RightStack, 
    },
);

tabNavigator.path = ''; 

// export tab navigator! 
export default createAppContainer(tabNavigator); 