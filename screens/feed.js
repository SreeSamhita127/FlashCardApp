import * as React from 'react';
import {Text,View,Image,SafeAreaView,Platform,OS,StyleSheet} from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import FlashCard from './flashCard';
import firebase from 'firebase';
import { FlatList } from "react-native-gesture-handler";

export default class Feed extends React.Component{
  
  constructor(props){
    super(props)
    this.state={
      cards: []

    }
  }

  componentDidMount(){
    this.fetchCards()
  }

   fetchCards = () => {
    firebase
      .database()
      .ref("/cards/")
      .on(
        "value",
        snapshot => {
          let cards = [];
          if (snapshot.val()) {
            Object.keys(snapshot.val()).forEach(function (key) {
              cards.push({
                key: key,
                value: snapshot.val()[key]
              });
            });
          }
          this.setState({ cards: cards });
           this.props.setUpdateToFalse();
         console.log(cards)

        },
        function (errorObject) {
          console.log("The read failed: " + errorObject.code);
        }
      );
  };

  renderItem = ({ item: card }) => {
    return <FlashCard card={card} navigation={this.props.navigation} />;
  };

  keyExtractor = (item, index) => index.toString();

  render(){
      return (
        <View style={ styles.container }>
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
              <Image
                source={require("../assets/AppLogo.png")}
                style={styles.iconImage}
              ></Image>
            </View>
            <View style={styles.appTitleTextContainer}>
              <Text style={ styles.appTitleText } >
                Flash Card App
              </Text>
            </View>
          </View>
          {!this.state.cards[0] ? (
            <View style={styles.noStories}>
              <Text style={ styles.noStoriesText} >
                No Cards Available
              </Text>
            </View>
          ) : (
            <View style={styles.cardContainer}>
              <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.cards}
                renderItem={this.renderItem}
              />
            </View>
          )}
          <View style={{ flex: 0.08 }} />
        </View>
      );
    }
  }
      
  const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15193c"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row"
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center"
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center"
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans"
  },
  cardContainer: {
    flex: 0.85
  },
  noStories: {
    flex: 0.85,
    justifyContent: "center",
    alignItems: "center"
  },
  noStoriesText: {
    color: "white",
    fontSize: RFValue(40),
    fontFamily: "Bubblegum-Sans"
  }
});    
