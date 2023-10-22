import React, { Component } from "react";
import {
  View, Text,StyleSheet,SafeAreaView,Platform,StatusBar,Image,Dimensions,TouchableOpacity} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import firebase from "firebase";

export default class FlashCard extends React.Component{
  constructor(props){
    super(props)
    this.state={
      card_id : this.props.card.key,
      card_data: this.props.card.value
    }
  }

  render(){   
        let card = this.state.card_data;
       // console.log(card.preview_image)
   
      let images = {
        image_1: require("../assets/image_1.jpg"),
        image_2: require("../assets/image_2.jpg"),
        image_3: require("../assets/image_3.jpg"),

      };
      return (
        <TouchableOpacity
          style={styles.container}
          onPress={() =>
            this.props.navigation.navigate("FlashcardScreen", {
              card: this.props.card
            })
          }
        >
          <SafeAreaView style={styles.droidSafeArea} />
          <View
            style={ styles.cardContainer }
          >
            <Image source={images[card.preview_image]} style={styles.storyImage}
            >
            </Image>
            
            <View style={styles.titleContainer}>
              <View style={styles.titleTextContainer}>
                <Text
                  style={styles.storyTitleText}
                >
                  {card.title}
                </Text>
                <Text style={styles.storyAuthorText } >
                  {card.description}
                </Text>     
              </View>
            </View>  
            <View style={{margin:20}}>
            </View>       
          </View>
        </TouchableOpacity>
      );
    
  }
}

const styles = StyleSheet.create({
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
   cardContainer: {
    margin: RFValue(13),
    backgroundColor: "#2f345d",
    borderRadius: RFValue(20)
  },
  storyImage: {
    resizeMode: "contain",
    width: "95%",
    alignSelf: "center",
    height: RFValue(250)
  },
  titleContainer: {
    paddingLeft: RFValue(20),
    justifyContent: "center"
  },
  titleTextContainer: {
    flex: 0.8
  },
 
  storyTitleText: {
    fontSize: RFValue(25),
    color: "white",
  },
  storyAuthorText: {
    fontSize: RFValue(18),
    color: "white"
  }
 
  
});
