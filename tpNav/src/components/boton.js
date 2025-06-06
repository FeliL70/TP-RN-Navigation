import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Boton({ texto, onPress }) {
  return (
    <TouchableOpacity style={styles.boton} onPress={onPress}>
      <Text style={styles.texto}>{texto}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  boton: {
    backgroundColor: '#007BFF',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    width: 300,
    alignItems: 'center',
  },
  texto: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
