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

  const beepTimes = [5, 15, 60, 75]; // Replace with your desired beep times

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* Pass beepTimes as a prop to TimerBox */}
        <TimerBox beepTimes={beepTimes} />
      </View>
    </SafeAreaView>
  );
};


export default HomeScreen;

