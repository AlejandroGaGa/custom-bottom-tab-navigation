import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../components/Home';
import Profile from '../components/Profile';
import TabBar from '../components/TabBar';
import Chat from '../components/Chat';
import Favorite from '../components/Favorites';
import buscar from '../components/buscar';


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
      <Tab.Navigator tabBar ={(props) => <TabBar {...props}/>}>
         <Tab.Screen
      name= 'NIKU' 
      component={Home} 
      initialParams={{icon: 'home-circle'}}/>
      <Tab.Screen 
      name= 'Favoritos' 
      component={Favorite} 
      initialParams={{icon: 'heart'}}/>
       <Tab.Screen 
      name= 'buscar' 
      component={buscar} 
      initialParams={{icon: 'book-search-outline'}}/>
        
       <Tab.Screen
       name= 'Chat' 
       component={Chat} 
       initialParams={{icon: 'chat'}}/>
      <Tab.Screen
       name= 'Perfil' 
       component={Profile} 
       initialParams={{icon: 'bag-personal-outline'}}/>

  </Tab.Navigator>);
};


export default TabNavigator;
