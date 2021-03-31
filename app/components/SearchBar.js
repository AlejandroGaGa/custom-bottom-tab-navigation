import React from 'react';
import {View, TextInput,StyleSheet} from 'react-native';

const SearchBar =() =>{
    return(
<View style={styles.container}>
    
    <TextInput style={styles.searchInput} placeholder='Escribe para buscar...'/>
</View>
    )
}
const styles = StyleSheet.create({
 container:{
     width:'100%',
     height:50,
     backgroundColor:'#E9E9F5',
     borderRadius:10,
     justifyContent:'center',
     paddingHorizontal:10,
     marginTop:15,
    
 },
 searchInput:{
    width:'100%',
    height:100,
    paddingLeft:8,
    fontSize:17,
    
 }
})
export default SearchBar;