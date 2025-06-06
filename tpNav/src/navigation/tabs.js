import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackHome from './stackHome';
import StackNoticias from './stackNoticias';
import StackForm from './stackForm';
import StackPerfil from './stackPerfil';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen 
      name="Home" 
      component={StackHome}
      options={{ tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} /> }}
    />
    <Tab.Screen 
      name="Noticias" 
      component={StackNoticias}
      options={{ tabBarIcon: ({ color }) => <Ionicons name="newspaper" size={24} color={color} /> }}
    />
    <Tab.Screen 
        name="Form" 
        component={StackForm}
        options={{ tabBarIcon: ({ color }) => <Ionicons name="create" size={24} color={color} /> }}
      />
      <Tab.Screen 
        name="Perfil" 
        component={StackPerfil}
        options={{ tabBarIcon: ({ color }) => <Ionicons name="person" size={24} color={color} /> }}
      />
    </Tab.Navigator>
  );
}
