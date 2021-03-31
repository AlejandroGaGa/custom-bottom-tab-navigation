import React,{useState} from 'react';
import { render } from 'react-dom';
import { View, StyleSheet, Dimensions} from 'react-native';
import { color } from 'react-native-reanimated';
import Tab from './Tab';

const {width} =Dimensions.get('screen');

const TabBar = ({state, navigation}) =>{
    const [selected, setSelected]= useState('NIKU')
    const {routes} = state;
    const renderColor = currentTab => (currentTab === selected ? '#FD571F' : '#fff');
  
const handlePress =(activeTab, index) =>{
   
   if (state.index !== index){
    setSelected(activeTab);
    navigation.navigate(activeTab);

   }
};
console.log(state.routes);
    
    return <View style={styles.wrapper}>
        <View style = {styles.container}>
{
    routes.map((route, index) => (
    <Tab 
    tab={route} 
    icon={route.params.icon} 
    onPress={() => handlePress(route.name, index)} 
    color={renderColor(route.name)} 
    key={route.key}/>
))}
        </View>
    </View>;
};

const styles = StyleSheet.create({
       wrapper: {
        position:'absolute',
        bottom:10,
        width,
        alignItems:'center',
        justifyContent:'center',
    },
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#7B1175',//color de navbar
        width:400,
        borderRadius:25,
    },
});

export default TabBar;

