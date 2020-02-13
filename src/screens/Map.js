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


    class MapScreen extends React.Component {
    render() {
        return (
        <View style={styles.container}>
            <Text>MAPS</Text>
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
  export default MapScreen; 