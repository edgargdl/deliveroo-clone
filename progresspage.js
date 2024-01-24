import { View} from 'react-native';
import React from 'react';
import Workoutbar from './workoutbar';

const ProgressPage = () => {

  // Create an array of objects with unique keys

  const workoutBarsData = [
    { initNumber: 7, numberOfCircles: 3, text:"Squats" },
    { initNumber: 7, numberOfCircles: 3, text:"Bench Press" },
    { initNumber: 7, numberOfCircles: 3, text:"Death Weight"},
  ];
  
  return (

    <View style={{ flex: 1 }}>
    {workoutBarsData.map((data, index) => (
      <Workoutbar key={index} initNumber={data.initNumber} numberOfCircles={data.numberOfCircles} text={data.text}/>
    ))}
    {/* Empty space below */}
    <View style={{ flex: 6 }} />
  </View>
  );
};

export default ProgressPage;