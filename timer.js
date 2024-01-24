import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Vibration } from 'react-native';

const TimerBox = ({ beepTimes }) => {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (beepTimes) {
      beepTimes.forEach((beepTime) => {
        if (elapsedTime === beepTime) {
          simulateBeepSound(); // Use vibration instead of sound
        }
      });
    }
  }, [elapsedTime, beepTimes]);

  const simulateBeepSound = () => {
    // Vibrate for a short duration (simulating a beep)
    Vibration.vibrate([100, 100, 100]);
  };

  const minutes = Math.floor(elapsedTime / 60);
  const seconds = elapsedTime % 60;

  return (
    <View style={styles.timerBox}>
      <Text style={styles.timerText}>
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds} elapsed
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  timerBox: {
    backgroundColor: 'red',
    padding: 20,
    borderRadius: 10,
  },
  timerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default TimerBox;
