import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackANavigator from './stackA';
import StackBNavigator from './stackB';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false}}>
      <Tab.Screen 
        name="Home" 
        component={StackANavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={24} color={"black"} />
          ),
        }}
      />
      <Tab.Screen name="notice" component={StackBNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="image" size={24} color={"black"} />
        ),
      }} />
    </Tab.Navigator>
  );
}