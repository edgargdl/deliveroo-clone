import { View} from 'react-native';
import React from 'react';
import Workoutbar from './workoutbar';
import TimerBox from './timer';

const ProgressPage = () => {

  // Create an array of objects with unique keys

  const workoutBarsData = [
    { initNumber: 7, numberOfCircles: 5, text:"Squats" },
    { initNumber: 7, numberOfCircles: 5, text:"Bench Press" },
    { initNumber: 7, numberOfCircles: 5, text:"Death Weight"},
  ];

  const beepTimes = [5, 15, 60, 75]; // Replace with your desired beep times
  
  return (

    <View style={{ flex: 1 }}>
    {workoutBarsData.map((data, index) => (
      <Workoutbar key={index} initNumber={data.initNumber} numberOfCircles={data.numberOfCircles} text={data.text}/>
    ))}
    {/* Empty space below */}
    <View style={{ flex: 6 }} />
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* Pass beepTimes as a prop to TimerBox */}
        <TimerBox beepTimes={beepTimes} />
      </View>
  </View>
  );
};

export default ProgressPage;