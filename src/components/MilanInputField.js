import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { TextInput } from "react-native-gesture-handler";
import { white } from "ansi-colors";


class MilanInputField extends Component {
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

    // const inputColor = textColor || Colors.black; 
    const fontSize = labelTextSize || 24; 

    return (
      <View style={styles.wrapper}>
          <Text style={styles.labelText}>{" "}{labelText}</Text>
          {/* <TextInput /> */}
        <TextInput 
        autoCorrect={false}
        style={styles.inputField}
        // secureTextEntry={inputType === 'password'}
        // placeholder={labelText} //opt 1
        // placeholderTextColor = "#505050" // opt 1
        placeholderTextColor = "white"
        secureTextEntry={password}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    paddingTop: 10, 
    paddingBottom: 10
  }, 
  inputField: {
    borderBottomWidth: 1, 
    borderRadius: 11, 
    paddingTop: 1,
    paddingLeft: 10, 
    // paddingBottom: 1, 
    fontSize: 18, 
    // height: 50, //opt 1
    height: 27, 
    color: "white",
    borderColor: "white"
  }, 
  labelText: {
    color: "white"
  }
});
export default MilanInputField;