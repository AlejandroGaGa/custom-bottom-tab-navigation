import React from 'react';
import {View ,StyleSheet,Text,header} from 'react-native'; 
import SearchBar from '../components/SearchBar'
import Screen from '../components/Screen'


const Home = () => {
  return (
    <>
    <Screen>
    <SearchBar/>
    </Screen>

      <View style={styles.container}>
          
          <Text style={styles.text}>Bienvenido a NIKU</Text>
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
      color : '#fff',
  },
});

export default Home;
