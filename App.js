import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import ProgressPage from './progresspage';
import Programs from './programs';
import Excersices from './excercises';
import ExerciseCounter from './setsreps';
const Stack = createNativeStackNavigator();

export default function App() {
  return (

        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Progress" component={ProgressPage} />
            <Stack.Screen name="Programs" component={Programs} />
            <Stack.Screen name="Excercises" component={Excersices} />
            <Stack.Screen name="Excercise" component={ExerciseCounter} />
          </Stack.Navigator>
        </NavigationContainer>

  );
}
