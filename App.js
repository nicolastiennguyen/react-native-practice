import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import About from './screens/About'
import Home from './screens/Home'
import Testing from './screens/Testing'

export default function App() {
  const Stack = createNativeStackNavigator();

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="Testing" component={Testing} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}