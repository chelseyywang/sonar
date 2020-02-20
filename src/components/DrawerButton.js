import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation"; 
import { DrawerActions } from 'react-navigation-drawer'; 
import { Colors } from "react-native/Libraries/NewAppScreen";
import { TextInput } from "react-native-gesture-handler";
import { white } from "ansi-colors";


class drawerButton extends Component {
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
          <TouchableOpacity style={{borderWidth: 1}} onPress={()=>{this.props.navigation.dispatch(DrawerActions.openDrawer())}}>
              <Text> BUTTON </Text>
            </TouchableOpacity>
      </View>
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
export default withNavigation(drawerButton);