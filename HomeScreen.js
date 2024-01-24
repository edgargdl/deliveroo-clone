import { View, Text, Image, TextInput, ScrollView, SafeAreaView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Workoutbar from './workoutbar';
import ProgressPage from './progresspage';
import TimerBox from './timer';


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
<ProgressPage/>
    </SafeAreaView>
  );
};


export default HomeScreen;

