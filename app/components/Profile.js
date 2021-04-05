import React from 'react';
import {View ,StyleSheet,Text} from 'react-native'; 
import SearchBar from '../components/SearchBar'
import Screen from '../components/Screen'

const Profile = () => {
  return (
    <>
      <View style={styles.container}>
          <Text style={styles.text}>Perfil</Text>
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

export default Profile;
