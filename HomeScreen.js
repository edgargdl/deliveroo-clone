import { View, Text, Image, TextInput, ScrollView, SafeAreaView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import ExerciseCounter from './setsreps';


const HomeScreen = () => {
  const navigation = useNavigation();


  useLayoutEffect(() => {

    navigation.setOptions({

      headerShown: true,
    })

  }, []);

  useEffect(() => {
  }, []);



  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ExerciseCounter/>
    </SafeAreaView>
  );
};


export default HomeScreen;

