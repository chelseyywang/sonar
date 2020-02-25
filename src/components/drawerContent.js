import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { DrawerActions } from "react-navigation-drawer"; 
import { NavigationActions } from "react-navigation"; 
import { Colors } from "react-native/Libraries/NewAppScreen";
import { TextInput } from "react-native-gesture-handler";
import { white } from "ansi-colors";


class drawerContent extends Component {
  render() {
    const 
    { 
        labelText, 
        labelTextSize, 
        inputType, 
        textColor, 
        borderColor, 
        password
    } = this.props;

    return (
      <View style={styles.wrapper}>
          <TouchableOpacity style={{borderWidth: 1, width: 150, borderColor: "white", marginVertical: 10}} onPress={()=>{this.props.navigation.dispatch(DrawerActions.closeDrawer())}}>
              <Text style={[styles.text, {fontSize: 16}]}> CLOSE DRAWER </Text>
            </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}><Text style={styles.name}>Milan M. </Text></TouchableOpacity>
          <TouchableOpacity 
            // style={styles.loginButton}
            onPress={() => this.props.navigation.navigate('YourPosts')}
            >
              <Text style={styles.text}>Your Posts</Text>
            </TouchableOpacity>
            
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
      paddingTop: 100, 
      paddingLeft: 20, 
      height: "100%", 
      backgroundColor: "#121640", 
  }, 
  name: {
    color: "white", 
    fontSize: 24, 
    fontWeight: "bold", 
    padding: 10
  },
  text: {
    color: "white", 
    fontSize: 18,
    padding: 10
  }
});
export default drawerContent;