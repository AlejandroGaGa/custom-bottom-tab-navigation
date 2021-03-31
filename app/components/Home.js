import React from 'react';
import {View ,StyleSheet,Text,Image} from 'react-native'; 


const Home = () => {
  return (
      <View style={styles.container}>
          <Text style={styles.text}>Bienvenido a NIKU</Text>
      </View>
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
