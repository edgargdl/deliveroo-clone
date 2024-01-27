import { SafeAreaView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState  } from 'react';
import { useNavigation } from '@react-navigation/native';
import Runprogram from './runprogram';



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
      <Runprogram/>
    </SafeAreaView>
  );
};


export default HomeScreen;

