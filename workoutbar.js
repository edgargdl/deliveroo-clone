import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import CircleButton from './circleButton';// Import the CircleButton component

const Workoutbar = ({ initNumber, numberOfCircles, text }) => {
  // Create an array of objects based on the number of circles
  const circleButtonsData = Array(numberOfCircles).fill({ key: initNumber.toString() });

  return (

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{text}</Text>
        <View style={{ flexDirection: 'row' }}>
          {circleButtonsData.map((data, index) => (
            <CircleButton key={index} initNumber={data.key} />
          ))}
        </View>
      </View>
  );
};

export default Workoutbar;