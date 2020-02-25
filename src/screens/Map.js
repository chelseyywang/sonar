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
// import MapboxGL from "@react-native-mapbox-gl/maps";

import DrawerButton from '../components/DrawerButton'; 

// MapboxGL.setAccessToken("pk.eyJ1IjoiY2hlbHNleXl3YW5nIiwiYSI6ImNrNng3YnZlZDBqeXIzbG1ndTBoam4zOXIifQ.rz2BGhNZI9acfIzhRyIB1w");

    class MapScreen extends React.Component {
      // componentDidMount() {
      //   MapboxGL.setTelemetryEnabled(false);
      // }
    render() {
        return (
        <View style={styles.container}>
          <DrawerButton/> 
          {/* <Text>HIIIIIII</Text> */}
          {/* <MapboxGL.MapView style={styles.mapStyle} /> */}
          <MapView style={styles.mapStyle} region={{latitude: 34.06, longitude: -118.44, latitudeDelta: 0.0922, longitudeDelta: 0.0421}}/>
            {/* <Text style={{fontSize: 50}}>MAPS</Text> */}
        </View>
        )
    }
    }
  
  const styles = StyleSheet.create({
    container: {
      // flex: 1,
      backgroundColor: "#121640",
      paddingTop: 100, 
      height: "100%"
      // justifyContent: 'center',
      // alignItems: 'center'
    }, 
    mapStyle: {
      width: Dimensions.get('window').width,
      height: 350,
      zIndex: -1, 
      position: "absolute", 
      top: 0
    },
  });
  export default MapScreen; 