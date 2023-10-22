import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import firebase from "firebase";

export default class FlashcardScreen extends React.Component(){
    render(){
      return(
        <View>
        <Text>
        Flash Card Screen
        </Text>
        </View>
      )
    }
}
