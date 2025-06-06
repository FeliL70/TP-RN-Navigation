import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Boton from '../../components/boton';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>HOME</Text>
      <Boton
        texto="Ir a la otra parte"
        onPress={() => navigation.navigate('HomeScreen2')}
        style={styles.button}
      />
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
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  button: {
    width: '100%',
  },
});
