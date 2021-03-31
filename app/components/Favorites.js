import React from 'react';
import {View ,StyleSheet,Text,Image} from 'react-native'; 


const Favorite = () => {
  return (
      <View style={styles.container}>
          <Text style={styles.text}>Favoritos</Text>
      </View>
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
      color : '#FE3905',
  },
});

export default Favorite;
