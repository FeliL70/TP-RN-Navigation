import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/header';

const noticias = [
  { 
    id: '1', 
    titulo: 'Gol de Julián Álvarez ayer', 
    descripcion: 'Un golazo de Julián Álvarez le dio la victoria a Argentina ante Chile.',
    imagen: 'https://media.tycsports.com/files/2025/06/05/849759/golazo-de-julian-alvarez-para-argentina-vs-chilg_416x234.webp'
  },
  { 
    id: '2', 
    titulo: 'Argentina le ganó a Chile por 1-0', 
    descripcion: 'Argentina sigue primero en las eliminatorias, derrotando a Chile por la mínima.',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDTFlleBTzFj7uOOFKew4-AYwu-1tYDvN8tQ&s' 
  },
];

export default function NoticeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header titulo="Noticias" />

      {noticias.map((item) => (
        <TouchableOpacity 
          key={item.id} 
          style={styles.card} 
          onPress={() => navigation.navigate('NoticeScreen2', { noticiaId: item.id })}
        >
          <Image source={{ uri: item.imagen }} style={styles.imagen} />
          <View style={styles.textContainer}>
            <Text style={styles.titulo}>{item.titulo}</Text>
            <Text style={styles.descripcion}>{item.descripcion}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 16,
  },
  card: {
    backgroundColor: '#222',
    flexDirection: 'row',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
  },
  imagen: {
    width: 100,
    height: 100,
  },
  textContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  titulo: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  descripcion: {
    color: '#bbb',
    fontSize: 14,
  },
});
