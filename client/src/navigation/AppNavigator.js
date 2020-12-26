import React from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AboutScreen from '../screens/AboutScreen';
import AddHomeScreen from '../screens/AddHomeScreen';
import HomeDetailScreen from '../screens/HomeDetailScreen';
import HomeListScreen from '../screens/HomeListScreen';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

function stackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='HomeList' 
        component={HomeListScreen}
        options={{title: 'HomeHunt'}}
      />
      <Stack.Screen 
        name='HomeDetail'
        component={HomeDetailScreen}      
      />
      <Stack.Screen 
        name='AddHome'
        component={AddHomeScreen}
      />
    </Stack.Navigator>
  )
}

function AboutStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='About'
        component={AboutScreen}
      />
    </Stack.Navigator>
  )
}

function AppNavigator() {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen 
          name='Home'
          component={stackNavigator}
        />
        <Tabs.Screen
          name='About'
          component={AboutStackNavigator}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator;