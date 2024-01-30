import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Menu from "./components/home/Menu";
import Icon from "react-native-vector-icons/FontAwesome6";
import ListComponent from "./components/list/List";
import Blog from "./components/webs/Blog"
import Dtic from "./components/webs/Dtic";

const Tab = createBottomTabNavigator()

const Navigation = () => {
    return(
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Inicio" component={Menu} options={{
                tabBarLabel: 'Inicio',
                tabBarIcon: ({color, size}) => (
                    <Icon name="house" color={color} size={size}/>
                )
            }}/>
            <Tab.Screen name={'Listado'} component={ListComponent} options={{
                tabBarLabel: 'Listado',
                tabBarIcon: ({color, size}) => (
                    <Icon name="list" color={color} size={size}/>
                )
            }}/>
            <Tab.Screen name={'Blog'} component={Blog} options={{
                tabBarLabel: 'Blog',
                tabBarIcon: ({color, size}) => (
                    <Icon name="blog" color={color} size={size}/>
                )
            }}/>
            <Tab.Screen name={'Dtic'} component={Dtic} options={{
                tabBarLabel: 'Dtic',
                tabBarIcon: ({color, size}) => (
                    <Icon name="microchip" color={color} size={size}/>
                )
            }}/>
        </Tab.Navigator>
    )
}

export default Navigation