import React from 'react';
import {Image,StyleSheet,Text, View} from 'react-native';
import { AntDesign } from '@expo/vector-icons';


const styles = StyleSheet.create({
   container:{
    justifyContent: 'center', 
    alignItems: 'center',
    marginEnd:6,
    marginLeft:7,
    marginBottom:10,

   },
   text:{
    fontSize:12,
    color:'white',
    fontWeight:'bold',
    textAlign: 'center',
    position:'absolute',
    backgroundColor:'#000000'
   },
   image:{
       width:90,
       height:90,
       borderRadius:20,
   },
   icon:{
       marginBottom:5,
       marginTop:-35,
       position:'relative'
       }
});
 
export default function CategoryListItem({catego}){
    return(
        <View style={styles.container}>
            
            <Image  source={{uri: catego.cover }} style={styles.image}/>
            <Text style={styles.text}>{catego.title}</Text>
            <AntDesign  style={styles.icon} name="rightcircle" size={24} color="#FD3F00" />
        </View>
    );
}