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
    Image, 
    Dimensions
  } from 'react-native';


    class BulletinScreen extends React.Component {
    render() {
        return (
        <View style={styles.container}>
            
            <Text style={{color: "#EC58BD", fontWeight: "bold", fontSize: 50}}>YIK YAK </Text>
            <Image source={require('../icons/resizeLogo.png')} style={{width: Dimensions.get('window').width,
}}/>
        {/* <Image source={require('../icons/sound.svg')}/> */}
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
  export default BulletinScreen; 