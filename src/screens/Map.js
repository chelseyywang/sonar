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
    TouchableOpacity, 
    Dimensions
  } from 'react-native';
import { withNavigation } from 'react-navigation'; 
import { DrawerActions } from 'react-navigation-drawer'; 
import { Drawer } from 'react-native-paper';
import MapView from 'react-native-maps';

import DrawerButton from '../components/DrawerButton'; 

    class MapScreen extends React.Component {
    render() {
        return (
        <View style={styles.container}>
          <DrawerButton/> 
          <MapView style={styles.mapStyle} region={{latitude: 34.06, longitude: -118.44, latitudeDelta: 0.0922, longitudeDelta: 0.0421}}/>

            <Text style={{fontSize: 50}}>MAPS</Text>
        </View>
        )
    }
    }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }, 
    mapStyle: {
      width: Dimensions.get('window').width,
      height: 350,
    },
  });
  export default MapScreen; 