import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TailwindProvider } from 'tailwindcss-react-native';
import { Provider } from 'react-redux';
import HomeScreen from './HomeScreen';
import ProgressPage from './progresspage';
import { store } from './store';
import Programs from './programs';
import Excersices from './excercises';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TailwindProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Progress" component={ProgressPage} />
            <Stack.Screen name="Settings" component={Programs} />
            <Stack.Screen name="Excercises" component={Excersices} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </TailwindProvider>
  );
}
