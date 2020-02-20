import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button, 
    TouchableOpacity
  } from 'react-native';
import { withNavigation } from 'react-navigation'; 
import { DrawerActions } from 'react-navigation-drawer'; 
import { Drawer } from 'react-native-paper';
import DrawerButton from '../components/DrawerButton'; 

    class YourPostsScreen extends React.Component {
    render() {
        return (
        <View style={styles.container}>
            <DrawerButton/>
            <Text style={{fontSize: 50}}>UR POSTS</Text>
            <TouchableOpacity 
            // style={styles.loginButton}
            onPress={() => this.props.navigation.navigate('MapDrawer')}
            >
              <Text>Back to Map</Text>
            </TouchableOpacity>
        </View>
        )
    }
    }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  });
  export default YourPostsScreen; 