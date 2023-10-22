import React, { Component } from "react";
import {
  View,Text,StyleSheet,SafeAreaView,Platform,StatusBar,Image,ScrollView,TextInput,Dimensions,Button, Alert} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import DropDownPicker from "react-native-dropdown-picker";
import * as SplashScreen from 'expo-splash-screen';
import firebase from 'firebase';

SplashScreen.preventAutoHideAsync();

export default class CreateFlashCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: true,
      previewImage: "image_1",
      dropdownHeight: 40,
    };
  }

  async addStory(){
    if(/*this.state.title && this.state.description  && this.state.q1 && this.state.a1 && this.state.q2 && this.state.a2*/ true){
      // alert("submit clicked")
      let storyData={
        preview_image:this.state.previewImage,
        title:this.state.title,
        description:this.state.description,
        q1:this.state.q1,
        a1:this.state.a1,
        q2:this.state.q2,
        a2:this.state.a2,
        author:firebase.auth().currentUser.displayName,
        created_on:new Date(),
        author_uid:firebase.auth().currentUser.uid,
      }
      await firebase.database().ref("/cards/"+(Math.random().toString(36).slice(2))).set(storyData).then(function(snapshot){

      })
      this.props.setUpdateToTrue()
      this.props.navigation.navigate('Feed')
    }
    else{
      Alert.alert('error','all fields are required',
      [
        {text:'okay',onPress:()=>console.log('Okay Pressed')}
      ],{cancelable:false})
    }
  }

  render() {
    // console.log(firebase.auth().currentUser.uid)
    if (this.state.fontsLoaded) {
      SplashScreen.hideAsync();
      let preview_images = {
        image_1: require("../assets/image_1.jpg"),
        image_2: require("../assets/image_2.jpg"),
        image_3: require("../assets/image_3.jpg")
      };
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
              <Image
                source={require("../assets/AppLogo.png")}
                style={styles.iconImage}
              ></Image>
            </View>
            <View style={styles.appTitleTextContainer}>
              <Text style={styles.appTitleText}>Create Flash Card</Text>
            </View>
          </View>
          <View style={styles.fieldsContainer}>
            <Image
              source={preview_images[this.state.previewImage]}
              style={styles.previewImage}
            ></Image>
            <View style={{ height: RFValue(this.state.dropdownHeight) }}>
              <DropDownPicker
                items={[
                  { label: "Image 1", value: "image_1" },
                  { label: "Image 2", value: "image_2" },
                  { label: "Image 3", value: "image_3" },
                ]}
                defaultValue={this.state.previewImage}
                open={this.state.dropdownHeight == 170 ? true : false}
                onOpen={() => {
                  this.setState({ dropdownHeight: 170 });
                }}
                onClose={() => {
                  this.setState({ dropdownHeight: 40 });
                }}
                style={{
                  backgroundColor: "transparent",
                  borderWidth: 1,
                  borderColor: "white",
                }}
                textStyle={{
                  color: this.state.dropdownHeight == 170 ? "black" : "white",
                }}
                onSelectItem={(item) =>
                  this.setState({
                    previewImage: item.value,
                  })
                }
              />
            </View>
            <ScrollView>
              <TextInput
                style={styles.inputFont}
                onChangeText={(title) => this.setState({ title })}
                placeholder={"Title"}
                placeholderTextColor="white"
              />

              <TextInput
                style={[
                  styles.inputFont,
                  styles.inputFontExtra,
                  styles.inputTextBig,
                ]}
                onChangeText={(description) => this.setState({ description })}
                placeholder={"Topic Description"}
                multiline={true}
                numberOfLines={4}
                placeholderTextColor="white"
              />
              <TextInput
                style={[
                  styles.inputFont,
                  styles.inputFontExtra,
                  styles.inputTextBig,
                ]}
                onChangeText={(q1) => this.setState({ q1 })}
                placeholder={"Question 1"}
                multiline={true}
                numberOfLines={5}
                placeholderTextColor="white"
              />

              <TextInput
                style={[
                  styles.inputFont,
                  styles.inputFontExtra,
                  styles.inputTextBig,
                ]}
                onChangeText={(a1) => this.setState({ a1 })}
                placeholder={"Answer 1"}
                multiline={true}
                numberOfLines={5}
                placeholderTextColor="white"
              />
              <TextInput
                style={[
                  styles.inputFont,
                  styles.inputFontExtra,
                  styles.inputTextBig,
                ]}
                onChangeText={(q2) => this.setState({ q2 })}
                placeholder={"Question 2"}
                multiline={true}
                numberOfLines={5}
                placeholderTextColor="white"
              />

              <TextInput
                style={[
                  styles.inputFont,
                  styles.inputFontExtra,
                  styles.inputTextBig,
                ]}
                onChangeText={(a2) => this.setState({ a2 })}
                placeholder={"Answer 2"}
                multiline={true}
                numberOfLines={5}
                placeholderTextColor="white"
              />
               /*<TextInput
                style={[
                  styles.inputFont,
                  styles.inputFontExtra,
                  styles.inputTextBig,
                ]}
                onChangeText={(q3) => this.setState({ q3 })}
                placeholder={"Question 3"}
                multiline={true}
                numberOfLines={5}
                placeholderTextColor="white"
              />

             <TextInput
                style={[
                  styles.inputFont,
                  styles.inputFontExtra,
                  styles.inputTextBig,
                ]}
                onChangeText={(a3) => this.setState({ a3 })}
                placeholder={"Answer 3"}
                multiline={true}
                numberOfLines={5}
                placeholderTextColor="white"
              />
              <TextInput
                style={[
                  styles.inputFont,
                  styles.inputFontExtra,
                  styles.inputTextBig,
                ]}
                onChangeText={(q4) => this.setState({ q4 })}
                placeholder={"Question 4"}
                multiline={true}
                numberOfLines={5}
                placeholderTextColor="white"
              />

              <TextInput
                style={[
                  styles.inputFont,
                  styles.inputFontExtra,
                  styles.inputTextBig,
                ]}
                onChangeText={(a4) => this.setState({ a4 })}
                placeholder={"Answer 4"}
                multiline={true}
                numberOfLines={5}
                placeholderTextColor="white"
              />
              <TextInput
                style={[
                  styles.inputFont,
                  styles.inputFontExtra,
                  styles.inputTextBig,
                ]}
                onChangeText={(q5) => this.setState({ q5 })}
                placeholder={"Question 5"}
                multiline={true}
                numberOfLines={5}
                placeholderTextColor="white"
              />

              <TextInput
                style={[
                  styles.inputFont,
                  styles.inputFontExtra,
                  styles.inputTextBig,
                ]}
                onChangeText={(a5) => this.setState({ a5 })}
                placeholder={"Answer 5"}
                multiline={true}
                numberOfLines={5}
                placeholderTextColor="white"
              />
              */
            <View style={styles.submitButton}>
            <Button title='SUBMIT' color='#841584' onPress={()=>this.addStory()} />
            </View>

            </ScrollView>
            
          </View>
          <View style={{ flex: 0.08 }} />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15193c",
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35),
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row",
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  iconImage: {
    width: "300%",
    height: "300%",
    resizeMode: "contain",
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center",
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
   
  },
  fieldsContainer: {
    flex: 0.85,
  },
  previewImage: {
    width: "93%",
    height: RFValue(200),
    alignSelf: "center",
    borderRadius: RFValue(30),
    marginVertical: RFValue(10),
    resizeMode: "contain",
  },
  inputFont: {
    height: RFValue(40),
    marginTop: RFValue(40),
    borderColor: "white",
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: "white",
   
  },
  inputFontExtra: {
    marginTop: RFValue(15),
  },
  inputTextBig: {
    textAlignVertical: "top",
    padding: RFValue(5),
  },
});