import React, {Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button, 
    TouchableOpacity, 
    ImageBackground, 
    KeyboardAvoidingView, 

  } from 'react-native';

  import MilanInputField from '../components/MilanInputField';

    class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
            <ImageBackground source={require('../pics/water-blue-ocean-5412.jpg')} style={{width: '100%', height: '100%'}}>
            <KeyboardAvoidingView style={styles.avoidView} behavior="padding">
      {/* <StatusBar barStyle="dark-content" /> */}
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
            <Text style={styles.sectionTitle}>SONAR.</Text>
            <MilanInputField labelText=' Username ' />
            <MilanInputField labelText=' Password ' password={true}/>
            <TouchableOpacity 
            style={styles.loginButton}
            onPress={() => this.props.navigation.navigate('Events')}
            >
              <Text style={styles.loginText}>Log In</Text>
            </TouchableOpacity>
          
          <View style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
            <Text style={styles.need}>Need an account? 
              {" "}
            </Text>
            
            <TouchableOpacity ><Text
              style={styles.signup}
              onPress={() => this.props.navigation.navigate('Bulletin')}
            >
              Sign up
            </Text></TouchableOpacity>
           </View> 

             
        </ScrollView>
      </SafeAreaView>
      </KeyboardAvoidingView>
      {/* <BottomBar/> */}
            </ImageBackground>
        </View>
        )
    }
    }
  
    const styles = StyleSheet.create({
        
        avoidView: {
          paddingLeft: 30,
          paddingRight: 30,
          paddingTop: 250,
          flex:1, 
         },
        loginText: {
          fontSize: 18, 
          fontWeight: "bold",
          paddingTop: 12,
          textAlign: "center",
           color: "white"
        },
        loginButton: {
          borderRadius: 11, 
          marginTop: 10,
          paddingTop: 1,
          paddingBottom: 5, 
          fontSize: 18, 
          height: 18,
          backgroundColor: 'rgba(0, 255, 255, 0.2)', 
          height: 50, 
          textAlign: "center",
        },
        need: {
          color: "#75F6F2", 
          fontSize: 14, 
          // textAlign: "center", 
          paddingTop: 10
        },
        signup: {
          color: "#75F6F2", 
          fontSize: 14, 
          // textAlign: "center", 
          paddingTop: 10, 
          textDecorationLine: 'underline'
        },
        partiic: {
          fontWeight: 'bold',
          fontSize: 30, 
          marginTop: 30, 
          marginLeft: 50, 
        }, 
        // scrollView: {
        //   backgroundColor: Colors.lighter,
        // },
        engine: {
          position: 'absolute',
          right: 0,
        },
        sectionContainer: {
          marginTop: 32,
          paddingHorizontal: 24,
        },
        sectionTitle: {
          fontSize: 60,
          fontWeight: '600',
          color: "white",
          textAlign: "center"
        },
        highlight: {
          fontWeight: '700',
        },
      });
  export default HomeScreen; 