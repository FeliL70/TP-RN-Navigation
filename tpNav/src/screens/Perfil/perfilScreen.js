import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Boton from '../../components/boton';

export default function PerfilScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Jlfwsmh4V5IbPD3t5y179fIuqzh8hvQ4SQ&s' }} 
        style={styles.foto} 
        resizeMode="cover"
      />
      <Text style={styles.name}>Juan Marap</Text>
      <Text style={styles.email}>juanMarap@gmail.com</Text>
      
      <Boton 
        texto="Mostrar detalles de la cuenta" 
        onPress={() => navigation.navigate('perfilScreen2')} 
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
    backgroundColor: '#121212',
    paddingHorizontal: 20,
  },
  foto: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#fff',
  },
  name: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    fontSize: 18,
    color: '#bbb',
    marginBottom: 30,
  },
  button: {
    marginTop: 20,
    width: '80%',
  },
});
