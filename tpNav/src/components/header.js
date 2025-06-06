import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header({ titulo }) {
  return (
    <View style={styles.header}>
      <Text style={styles.titulo}>{titulo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#121212',
    paddingVertical: 20,
    width: '100%',
    alignItems: 'center',
    borderBottomColor: '#333',
    borderBottomWidth: 1,
  },
  titulo: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
