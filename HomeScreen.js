import { View, Text, Image, TextInput, ScrollView, SafeAreaView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Excersice from './exercise';
import Excersices from './excercises';


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
<Excersices/>
    </SafeAreaView>
  );
};


export default HomeScreen;

