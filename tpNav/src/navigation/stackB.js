import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NoticeScreen from '../screens/HomeScreen/noticeScreen';

const StackB = createNativeStackNavigator();

export default function StackANavigator() {

  return (
    <StackB.Navigator screenOptions={{ headerShown: false}}>
      <StackB.Screen name="notice" component={NoticeScreen} />
    </StackB.Navigator>
  );
}