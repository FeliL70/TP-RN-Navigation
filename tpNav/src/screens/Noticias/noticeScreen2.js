import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';

const noticiasDetalles = [
  {
    id: '1',
    titulo: 'Gol de Julián Álvarez ayer',
    descripcion: 'Un golazo de Julián Álvarez le dio la victoria a Argentina ante Chile.',
    imagen: 'https://media.tycsports.com/files/2025/06/05/849759/golazo-de-julian-alvarez-para-argentina-vs-chilg_416x234.webp',
    contenido: 'Este gol se dio en el primer tiempo, tras una gran jugada colectiva que dejó al arquero chileno sin opciones.'
  },
  {
    id: '2',
    titulo: 'Argentina le ganó a Chile por 1-0',
    descripcion: 'Argentina sigue primero en las eliminatorias, derrotando a Chile por la mínima.',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDTFlleBTzFj7uOOFKew4-AYwu-1tYDvN8tQ&s',
    contenido: 'En un partido muy difícil, Argentina logró marcar el único gol del partido con un gol de Julián.'
  },
];

export default function NoticeScreen2() {
  const route = useRoute();
  const { noticiaId } = route.params;

  const [noticia, setNoticia] = useState(null);

  useEffect(() => {
    noticiasDetalles.forEach((item) => {
      if (item.id === noticiaId) {
        setNoticia(item);
      }
    });
  }, [noticiaId]);

  if (!noticia) {
    return (
      <View style={styles.container}>
        <Text style={{ color: 'white' }}>Noticia no encontrada.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: noticia.imagen }} style={styles.imagen} />
      <Text style={styles.titulo}>{noticia.titulo}</Text>
      <Text style={styles.descripcion}>{noticia.descripcion}</Text>
      <Text style={styles.contenido}>{noticia.contenido}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    padding: 16,
  },
  imagen: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    borderRadius: 12,
    marginBottom: 20,
  },
  titulo: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descripcion: {
    color: '#bbb',
    fontSize: 16,
    marginBottom: 12,
  },
  contenido: {
    color: 'white',
    fontSize: 16,
    lineHeight: 24,
  },
});
