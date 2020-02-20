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
          <TouchableOpacity style={{borderWidth: 1, width: 150, }} onPress={()=>{this.props.navigation.dispatch(DrawerActions.closeDrawer())}}>
              <Text> CLOSE DRAWER </Text>
            </TouchableOpacity>
          <Text>Milan M. </Text>
          <TouchableOpacity 
            // style={styles.loginButton}
            onPress={() => this.props.navigation.navigate('YourPosts')}
            >
              <Text>YourPosts</Text>
            </TouchableOpacity>
            
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
      paddingTop: 100, 
      paddingLeft: 20, 
  }
});
export default drawerContent;