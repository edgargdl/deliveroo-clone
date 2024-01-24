import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TailwindProvider } from 'tailwindcss-react-native';
import { Provider } from 'react-redux'
import HomeScreen from './HomeScreen';
import RestaurantScreen from './RestaurantScreen';
import { store } from './store';
import PreparingOrderScreen from './PreparingOrderScreen';
import DeliveryScreen from './DeliveryScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TailwindProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
    </NavigationContainer>
      </Provider >
    </TailwindProvider >

  );
}

