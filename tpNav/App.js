import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import MyTabs from './src/navigation/tabs';



export default function App() {
  return (
    <NavigationContainer>
    <MyTabs />
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

