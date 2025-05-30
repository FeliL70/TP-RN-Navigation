import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native'

export default function HomeScreen(){

    const navigation = useNavigation();
    return (
      <View style={styles.homeScreen}>
        <Text style={styles.text}>HOME</Text>
      </View>
    );
  }
  
  
const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  text: {
    color: 'white',
    fontSize: 40,
  },
});
  
