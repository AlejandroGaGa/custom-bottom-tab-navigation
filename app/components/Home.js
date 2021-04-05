import React from 'react';
import {FlatList,View ,StyleSheet,Text,Image} from 'react-native'; 
import CategoryListItem from '../components/CategoryListItem';


const CategoList = [
{
  id: 1,
  title: "Restaurantes",
  cover: "https://picsum.photos/200",
},
{
  id: 2,
  title: "Ferreterias",
  cover: "https://picsum.photos/200",
},
{
  id: 3,
  title: "Animales",
  cover: "https://picsum.photos/200",
},
{
  id: 4,
  title: "Librerias",
  cover: "https://picsum.photos/200",
},
{
  id: 5,
  title: "Otras",
  cover: "https://picsum.photos/250",
},
{
  id: 6,
  title: "Servicios",
  cover: "https://picsum.photos/250",
},
{
  id: 7,
  title: "Servicios1",
  cover: "https://picsum.photos/250",
},
{
  id: 8,
  title: "Servicios2",
  cover: "https://picsum.photos/250",
},
{
  id: 9,
  title: "Servicios3",
  cover: "https://picsum.photos/250",
},
];


const Home = () => {
  return (
    <> 
     
      <Text style={styles.text}>Listado por categorias: </Text>
      <FlatList   data={CategoList} renderItem={({item})=> <CategoryListItem catego={item} />}
        keyExtractor={item => item.id.toString()}
        />
     
      
    </>
      
  );
}

const styles = StyleSheet.create({
  text:{
      marginTop:40,
      fontSize:20,
      fontWeight: 'bold',
      color : 'black',
      marginLeft:10,
 
  },
  img:{
    height:125,
    width:300,
  },
});

export default Home;
