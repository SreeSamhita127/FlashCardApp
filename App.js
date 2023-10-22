import React from 'react'
import { View,Text, SafeAreaView, StyleSheet } from 'react-native'
import { Card } from 'react-native-paper';
import BottomTabNavigator from './navigation/bottomNavigator';
import {NavigationContainer} from '@react-navigation/native';
import firebase from 'firebase';
import {firebaseConfig} from './config';
//import {createSwitchNavigator, createAppContainer} from 'react-navigation' 

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}
else{
  firebase.app()
}


export default class App extends React.Component {
  render(){
  return (
    //<AppContainer/>
    <NavigationContainer>
    <BottomTabNavigator/>
    </NavigationContainer>
  )
}}
/*const AppSwitchNavigator = createSwitchNavigator(
  {
    Login:{
      screen:Login
    } ,
    BottomTab:{
      screen:BottomTabNavigator
    }
  },
  {
    initialRouteName:''
  }
)

const AppContainer = createAppContainer(AppSwitchNavigator)*/
