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


    class ProfileScreen extends React.Component {
    render() {
        return (
        <View style={styles.container}>
            <Text style={{color: "white"}}>WHAZCHAM</Text>
            <TouchableOpacity 
            style={styles.loginButton}
            onPress={() => this.props.navigation.navigate('Home')}
            >
              <Text style={styles.loginText}>Log In</Text>
            </TouchableOpacity>
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
  export default ProfileScreen; 