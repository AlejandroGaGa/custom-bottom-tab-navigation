import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';

const Screen =({children})=>{
    return(
        <View style={styles.container}>{children}</View>
        );
}
const styles = StyleSheet.create({
    container:{
      marginTop:StatusBar.currentHeight,
      paddingHorizontal:15,
      backgroundColor:'#fff',
    },
});
export default Screen;