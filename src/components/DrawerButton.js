import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation"; 
import { DrawerActions } from 'react-navigation-drawer'; 
import { Colors } from "react-native/Libraries/NewAppScreen";
import { TextInput } from "react-native-gesture-handler";
import { white } from "ansi-colors";


class DrawerButton extends Component {
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
      // <View style={styles.wrapper}>
          <TouchableOpacity style={[styles.wrapper, {borderWidth: 1, borderColor: "#121640", backgroundColor: "white"}]} onPress={()=>{this.props.navigation.dispatch(DrawerActions.openDrawer())}}>
              <Text style={{color: "#121640"}}> BUTTON </Text>
            </TouchableOpacity>
      // </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
      position: "absolute", 
      top: 50, 
      left: 30, 
  }
});
export default withNavigation(DrawerButton);