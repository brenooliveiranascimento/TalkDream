import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/Routes';
import { StatusBar } from 'react-native';
import AuthProvider from './src/Contexts';

export default function App(){
  console.disableYellowBox = true
  return(
    <NavigationContainer>
      <StatusBar hidden={true}/>
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    </NavigationContainer>
  )
}