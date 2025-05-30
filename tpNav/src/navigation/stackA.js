import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen/homeScreen';

const StackA = createNativeStackNavigator();

export default function StackANavigator() {

  return (
    <StackA.Navigator screenOptions={{ headerShown: false}}>
      <StackA.Screen name="Home" component={HomeScreen} />
    </StackA.Navigator>
  );
}