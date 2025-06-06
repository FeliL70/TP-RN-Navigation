import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FormScreen from '../screens/Form/formScreen';
import RespuestaScreen from '../screens/Form/respuestaScreen';

const Stack = createNativeStackNavigator();

export default function StackForm() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#7d2181' } }}>
      <Stack.Screen name="Form" component={FormScreen} />
      <Stack.Screen name="Respuesta" component={RespuestaScreen} />
    </Stack.Navigator>
  );
}
