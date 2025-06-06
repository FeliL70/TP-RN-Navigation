import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NoticeScreen from '../screens/Noticias/noticeScreen';
import NoticeScreen2 from '../screens/Noticias/noticeScreen2';

const Stack = createNativeStackNavigator();

export default function StackNoticias() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#f5f5dc' } }}>
      <Stack.Screen name="NoticeScreen" component={NoticeScreen} />
      <Stack.Screen name="NoticeScreen2" component={NoticeScreen2} />
    </Stack.Navigator>
  );
}
