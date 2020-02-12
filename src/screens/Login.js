// login
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  KeyboardAvoidingView, 
  Button, 
  TouchableOpacity, 
  Linking, 
  TextInput, 
  ImageBackground
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import MilanInputField from '../components/MilanInputField'; 

class Login extends React.Component {
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
            style={styles.loginButton}>
              <Text style={styles.loginText}>Log In</Text>
            </TouchableOpacity>
          
          <View style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
            <Text style={styles.need}>Need an account? 
              {" "}
            </Text>
            {/* <TouchableOpacity ><Text
              style={styles.signup}
              onPress={() => this.props.navigation.navigate('Signup')}
            >
              Sign up
            </Text></TouchableOpacity> */}
           </View> 

             
        </ScrollView>
      </SafeAreaView>
      </KeyboardAvoidingView>
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
        body: {
          backgroundColor: Colors.white,
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
        sectionDescription: {
          marginTop: 8,
          fontSize: 18,
          fontWeight: '400',
          color: Colors.dark,
        },
        highlight: {
          fontWeight: '700',
        },
        footer: {
          color: Colors.dark,
          fontSize: 12,
          fontWeight: '600',
          padding: 4,
          paddingRight: 12,
          textAlign: 'right',
        },
      });

  export default Login; 

// class Login extends React.Component {
//   render() {
//     // const navigation = useNavigation();
//     return (
//       <>
//       <ImageBackground source={require('../pics/pexels-photo-1350197-2.jpeg')} style={{width: '100%', height: '100%'}}>
//       <KeyboardAvoidingView style={styles.avoidView} behavior="padding">
//       {/* <StatusBar barStyle="dark-content" /> */}
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//             <Text style={styles.sectionTitle}>SONAR.</Text>
//             <MilanInputField labelText=' Username ' />
//             <MilanInputField labelText=' Password ' password={true}/>
//             <TouchableOpacity 
//             style={styles.loginButton}>
//               <Text style={styles.loginText}>Log In</Text>
//             </TouchableOpacity>
          
//           <View style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
//             <Text style={styles.need}>Need an account? 
//               {" "}
//             </Text>
//             {/* <TouchableOpacity ><Text
//               style={styles.signup}
//               onPress={() => this.props.navigation.navigate('Signup')}
//             >
//               Sign up
//             </Text></TouchableOpacity> */}
//            </View> 

             
//         </ScrollView>
//       </SafeAreaView>
//       </KeyboardAvoidingView>
//       </ImageBackground>
//     </>
//     );
//   }
// }



// export default Login; 