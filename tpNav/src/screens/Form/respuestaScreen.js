import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

export default function RespuestaScreen() {
  const { params } = useRoute();
  const navigation = useNavigation();
  const nombre = params?.nombre ?? 'Persona';

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hola, {nombre}</Text>
      <Button title="Volver al Form" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
  },
  text: {
    color: 'white',
    fontSize: 28,
    marginBottom: 20,
  },
});
