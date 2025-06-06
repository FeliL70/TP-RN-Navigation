import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/homeScreen';
import HomeScreen2 from '../screens/Home/homeScreen2';

const Stack = createNativeStackNavigator();

export default function StackHome() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="HomeScreen2" component={HomeScreen2} />
    </Stack.Navigator>
  );
}
