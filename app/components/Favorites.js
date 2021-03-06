import React from 'react';
import {View ,StyleSheet,Text,Image} from 'react-native'; 
import SearchBar from '../components/SearchBar'
import Screen from '../components/Screen'

const Favorite = () => {
  return (
    
    <>
      <View style={styles.container}>
          <Text style={styles.text}>Favoritos</Text>
      </View>
      </>
  )
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#292559',
  },
  text:{
      fontSize:20,
      fontWeight: 'bold',
      color : '#FE3905',
  },
});

export default Favorite;
