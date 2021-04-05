import React from 'react';
import {Image,StyleSheet,Text, View} from 'react-native';
import { AntDesign } from '@expo/vector-icons';


const styles = StyleSheet.create({
   container:{
       flexDirection: 'row',
       paddingVertical:15,
       paddingLeft:15,
       borderBottomWidth:1,
       borderBottomColor:'#E0E0E0'
   },
   image:{
       width:80,
       height:80,
       marginRight: 10,
   },
   icon:{
       marginLeft:'auto',
       marginRight:10,
       }
});
 
export default function CategoryListItem({catego}){
    return(
        <View style={styles.container}>
            <Image  source={{uri: catego.cover }} style={styles.image}/>
            <Text>{catego.title}</Text>
            <AntDesign  style={styles.icon} name="rightcircle" size={24} color="#FD3F00" />
        </View>
    );
}