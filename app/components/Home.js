import React from 'react';
import {FlatList,View ,StyleSheet,Text,Image} from 'react-native'; 
import CategoryListItem from '../components/CategoryListItem';



const numColumns =4;
const CategoList = [
{
  id: 1,
  title: "Restaurantes",
  cover: "https://picsum.photos/350",
},
{
  id: 2,
  title: "Ferreterias",
  cover: "https://picsum.photos/250",
},
{
  id: 3,
  title: "Animales",
  cover: "https://picsum.photos/300",
},
{
  id: 4,
  title: "Librerias",
  cover: "https://picsum.photos/400",
},
{
  id: 5,
  title: "Otras",
  cover: "https://picsum.photos/450",
},
{
  id: 6,
  title: "Servicios",
  cover: "https://picsum.photos/550",
},
{
  id: 7,
  title: "Servicios1",
  cover: "https://picsum.photos/650",
},
{
  id: 8,
  title: "Servicios2",
  cover: "https://picsum.photos/750",
},
];


const Home = () => {
  return (
    <> 
     <View style={styles.container}>
      <Text style={styles.text}>Listado por categorias: </Text>
      <FlatList   data={CategoList} renderItem={({item})=> <CategoryListItem catego={item} />}
        keyExtractor={item => item.id.toString()} numColumns={numColumns}/>
        </View>
     
      
    </>
      
  );
}

const styles = StyleSheet.create({
  text:{
      marginTop:40,
      fontSize:20,
      fontWeight: 'bold',
      color : 'black',
      marginLeft:8,

 
  },
  container:{
    marginTop:450,
    marginEnd:4,

  
  },
});

export default Home;
