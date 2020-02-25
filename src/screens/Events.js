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


    class EventsScreen extends React.Component {
    render() {
        return (
        <View style={styles.container}>
            <Text style={{color: "white"}}>EVENTS</Text>
        </View>
        )
    }
    }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "#121640", 

    }
  });
  export default EventsScreen; 