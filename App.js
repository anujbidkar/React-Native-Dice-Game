import React from "react";
import {View,Text,StyleSheet,Image,TouchableOpacity,Alert} from "react-native";

export default class App extends React.Component{
  myButton = ()=>{
    var numBer = this.getRandomNumber();
    switch (numBer)
    {
      case 1:
        this.setState({
          uri:require('./assets/dice1.png')})
          break;
      case 2:
        this.setState({
          uri:require('./assets/dice2.png')})
          break;
      case 3:
        this.setState({
          uri:require('./assets/dice3.png')})
          break;
      case 4:
        this.setState({
          uri:require('./assets/dice4.png')})
          break;
      case 5:
        this.setState({
          uri:require('./assets/dice5.png')})
          break;
      case 6:
        this.setState({
          uri:require('./assets/dice6.png')})
          break;
      default:
        Alert.alert("hello");


    }
  
  }
  getRandomNumber= ()=>{
    return Math.floor(Math.random()*6)+1;

   }
  constructor(props){
    super(props);
    this.state =
    {
                uri:require('./assets/dice1.png')
    }
    };

   

  render(){

    return( 
    <View style={styles.container}>
      <Image source={this.state.uri}/>
      <TouchableOpacity
        onPress={this.myButton}
      >
      <Text style={styles.button}>Play Game !</Text>
      </TouchableOpacity>
    </View>
    );
  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    fontSize:60,
    backgroundColor:"#d291bc"
  },
  button:{
    fontSize:30,
    marginTop:20,
    color:"white",
    fontWeight:"bold",
    borderWidth:2,
    padding:20,
    borderRadius:10

  }
})