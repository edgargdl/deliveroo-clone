import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TailwindProvider } from 'tailwindcss-react-native';

import HomeScreen from './HomeScreen';
import RestaurantScreen from './RestaurantScreen';
import { store } from './store';
import { Provider } from 'react-redux';
const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>




          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Restaurant" component={RestaurantScreen} />
          </Stack.Navigator>
        </TailwindProvider>
      </Provider>

    </NavigationContainer>

  );
}

