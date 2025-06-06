import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen2() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HomeScreen2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    color: '#000',
    fontSize: 28,
    fontWeight: '600',
  },
});
