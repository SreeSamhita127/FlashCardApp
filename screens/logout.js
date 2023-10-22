import React, { Component } from "react";
import {View,StyleSheet,Alert,TouchableOpacity,Text,Button} from "react-native";
import firebase from 'firebase';
import { RFValue } from "react-native-responsive-fontsize";


export default class LogOut extends React.Component{
  render(){
    return(
      <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={()=>firebase.auth().signOut()}>
      <Text style={styles.buttonText}>
      LOG OUT
      </Text>
      </TouchableOpacity>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    width: RFValue(200),
    height: RFValue(50),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: RFValue(10),
    backgroundColor: "#119592",
    marginBottom: RFValue(20)
  },
  buttonText:{
    fontSize: RFValue(24),
    color: "white",
  }
})
