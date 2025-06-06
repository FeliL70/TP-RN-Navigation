import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PerfilScreen from '../screens/Perfil/perfilScreen';
import PerfilScreen2 from '../screens/Perfil/perfilScreen2';

const Stack = createNativeStackNavigator();

export default function StackPerfil() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, contentStyle: { backgroundColor: 'blue' } }}>
      <Stack.Screen name="PerfilScreen" component={PerfilScreen} />
      <Stack.Screen name="PerfilScreen2" component={PerfilScreen2} />
    </Stack.Navigator>
  );
}
