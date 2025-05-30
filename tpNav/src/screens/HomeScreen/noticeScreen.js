import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native'


export default function NoticeScreen() {
  
    const navigation = useNavigation();
    return (
      <View style={styles.NoticeScreen}>
        <Text style={styles.text}>NOTICIAS</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    NoticeScreen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000'
    },
    text: {
      color: 'white',
      fontSize: 20,
    },
  });
    