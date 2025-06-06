import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Header from '../../components/header';

export default function PerfilScreen2() {
  return (
    <View style={styles.container}>
      <Header titulo="Detalles del Perfil" />

      <View style={styles.infoContainer}>
        <Image 
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Jlfwsmh4V5IbPD3t5y179fIuqzh8hvQ4SQ&s' }} 
          style={styles.foto} 
          resizeMode="cover"
        />
        <Text style={styles.name}>Juan Marap</Text>
        <Text style={styles.label}>Correo:</Text>
        <Text style={styles.info}>juanMarap@gmail.com</Text>
        <Text style={styles.label}>Trabajo:</Text>
        <Text style={styles.trabajo}>Futbolista</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c',
  },
  infoContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  foto: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#fff',
  },
  name: {
    fontSize: 26,
    color: 'white',
    fontWeight: '600',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    color: '#bbb',
    marginTop: 10,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 18,
    color: 'white',
    marginBottom: 10,
  },
  trabajo: {
    fontSize: 20,
    color: 'white',
    marginBottom: 5,
  },
});
