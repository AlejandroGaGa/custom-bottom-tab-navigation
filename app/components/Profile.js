import React from 'react';
import {View ,StyleSheet,Text} from 'react-native'; 


const Profile = () => {
  return (
      <View style={styles.container}>
          <Text style={styles.text}>Perfil</Text>
      </View>
  )
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  text:{
      fontSize:20,
      fontWeight: 'bold',
      color : '#000000',
  },
});

export default Profile;
