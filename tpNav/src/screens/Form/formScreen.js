import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Boton from '../../components/boton';

export default function FormScreen() {
  const navigation = useNavigation();
  const [nombre, setNombre] = useState('');
  const [error, setError] = useState('');

  const Enviar = () => {
    if (nombre === '') {
      setError('ingrese su nombre.');
    } else {
      setError('');
      navigation.navigate('Respuesta', { nombre });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formulario</Text>
      <Text style={styles.label}>Ingrese su nombre:</Text>
      <TextInput
        style={styles.input}
        value={nombre}
        onChangeText={setNombre}
        placeholder="Nombre"
        placeholderTextColor="#888"
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Boton texto="Enviar" onPress={Enviar} style={styles.button} />
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
    fontSize: 26,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  label: {
    color: '#999',
    fontSize: 16,
    alignSelf: 'flex-start',
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#eee',
    color: '#000',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    width: '100%',
    fontSize: 16,
    marginBottom: 10,
  },
  error: {
    color: '#ff5c5c',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  button: {
    marginTop: 10,
    width: '100%',
  },
});
