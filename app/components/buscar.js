import React from 'react';
import {View ,StyleSheet,Text} from 'react-native'; 
import SearchBar from './SearchBar'
import Screen from './Screen'

const buscar = () => {
  return (
    <>
    <Screen>
    <SearchBar/>
    </Screen>
      <View style={styles.container}>
          <Text style={styles.text}>Buscar</Text>
      </View>
      </>
  )
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
  },
  text:{
      fontSize:20,
      fontWeight: 'bold',
      color : '#000000',
  },
});

export default buscar;
