import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const CircleButton = ({ initNumber }) => {
  const [number, setNumber] = useState(initNumber);

  const decrementNumber = () => {
    if (number > 0) {
      setNumber(number - 1);
    } else {
      // When the number reaches zero, reset it to the initial number
      setNumber(initNumber);
    }
  };

  return (
    <TouchableOpacity onPress={decrementNumber}>
      <View style={styles.circleButton}>
        <Text style={styles.text}>{number}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  circleButton: {
    width: 50,
    height: 50,
    backgroundColor: 'black',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CircleButton;
