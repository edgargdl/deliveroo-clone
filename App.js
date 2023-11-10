import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TailwindProvider } from 'tailwindcss-react-native';
import { Provider } from 'react-redux'
import HomeScreen from './HomeScreen';
import RestaurantScreen from './RestaurantScreen';
import { store } from './store';
import BasketScreen from './BasketScreen';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TailwindProvider>
      <Provider store={store}>
        <NavigationContainer>

          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Restaurant" component={RestaurantScreen} />
            <Stack.Screen 
            name="Basket" 
            component={BasketScreen}
            options={{ presentation: "modal", headerShown: false }}
            
            />
          </Stack.Navigator>
    </NavigationContainer>
      </Provider >
    </TailwindProvider >

  );
}

