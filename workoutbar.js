import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import CircleButton from './circleButton';

const Workoutbar = ({ initNumber, numberOfCircles, text }) => {
  const circleButtonsData = Array(numberOfCircles).fill({ key: initNumber.toString() });

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', paddingHorizontal: 16 }}>
      <Text style={styles.text}>{text}</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
        {circleButtonsData.map((data, index) => (
          <CircleButton key={index} initNumber={data.key} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 1,
  },
});

export default Workoutbar;
