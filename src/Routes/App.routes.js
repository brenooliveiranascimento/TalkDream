import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Feather';
import Home from "../Pages/Home";
import NewPost from "../Pages/NewPost";
import Profile from "../Pages/Profile";
import Search from "../Pages/Search";
import Chat from '../Pages/Chat'
import PostsUser from '../Pages/PostsUser'
import Web from "../Pages/WebView";

export default function AppRoutes(){
    const Stack = createNativeStackNavigator();
    const Tabs = createBottomTabNavigator();

    function callStack(){
        return(
        <Stack.Navigator>
            <Stack.Screen
            component={Home}
            name="Home"
            options={{
                headerShown:false
            }}
            />

            <Stack.Screen
            component={PostsUser}
            name="PostsUser"
            options={{
                headerStyle:{
                    backgroundColor:'#000',
                    borderBottomBolor:'#01A5B1',
                    borderBottomWidth:2
                },
                headerTintColor:'#01A5B1',
            }}
            />
            <Stack.Screen
            component={Web}
            name="Web"
            />
        </Stack.Navigator>
        )
    }
    return(
        <Tabs.Navigator
        screenOptions={{
            headerShown:false,
            tabBarHideOnKeyboard:true,
            tabBarActiveTintColor:'#A9BCD0',
            tabBarInactiveTintColor:"#01A5B1",
            tabBarShowLabel:false,
            tabBarStyle:{
                backgroundColor:"#000",
                borderTopWidth:2,
                borderTopColor:'#01A5B1'
            }
        }}
        > 
            <Tabs.Screen
            component={callStack}
            name="Home"
            options={{
                tabBarIcon:(({color, size})=>{
                    return (<Icon name="home" color={color} size={size}/>)
                })
            }}
            />

            <Tabs.Screen
            component={Search}
            name="Search"
            options={{
                tabBarIcon:(({color, size})=>{
                    return (<Icon name="search" color={color} size={size}/>)
                })
            }}
            />
            
            <Tabs.Screen
            component={NewPost}
            name="NewPost"
            options={{
                tabBarIcon:(({color, size})=>{
                    return (<Icon name="plus" color={color} size={size}/>)
                })
            }}
            />
                        
            <Tabs.Screen
            component={Chat}
            name="Chat"
            options={{
                tabBarIcon:(({color, size})=>{
                    return (<Icon name="message-circle" color={color} size={size}/>)
                })
            }}
            />
                        
                        <Tabs.Screen
            component={Profile}
            name="Profile"
            options={{
                tabBarIcon:(({color, size})=>{
                    return (<Icon name="user" color={color} size={size}/>)
                })
            }}
            />
        </Tabs.Navigator>
    );
}