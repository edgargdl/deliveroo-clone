import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ExerciseCounter = () => {
  const [sets, setSets] = useState(4);
  const [reps, setReps] = useState(8);
  const [weight, setWeight] = useState(100);
  const [autoLoadSessions, setAutoLoadSessions] = useState(5);
  const [autoLoadIncrement, setAutoLoadIncrement] = useState(2);
  const [deloadSessions, setDeloadSessions] = useState(3);
  const [deloadDays, setDeloadDays] = useState(7);

  const increaseValue = (stateSetter, value) => {
    stateSetter((prevValue) => prevValue + value);
  };

  const decreaseValue = (stateSetter, value) => {
    stateSetter((prevValue) => (prevValue > 1 ? prevValue - value : prevValue));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.exerciseName}>Bench Press</Text>
      <View style={styles.counterContainer}>
        <View style={styles.counter}>
          <TouchableOpacity onPress={() => decreaseValue(setSets, 1)}>
            <Text style={styles.button}>-</Text>
          </TouchableOpacity>
          <Text style={styles.value}>{sets} Sets</Text>
          <TouchableOpacity onPress={() => increaseValue(setSets, 1)}>
            <Text style={styles.button}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.counter}>
          <TouchableOpacity onPress={() => decreaseValue(setReps, 1)}>
            <Text style={styles.button}>-</Text>
          </TouchableOpacity>
          <Text style={styles.value}>{reps} Reps</Text>
          <TouchableOpacity onPress={() => increaseValue(setReps, 1)}>
            <Text style={styles.button}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.counter}>
          <TouchableOpacity onPress={() => decreaseValue(setWeight, 5)}>
            <Text style={styles.button}>-</Text>
          </TouchableOpacity>
          <Text style={styles.value}>{weight} lb</Text>
          <TouchableOpacity onPress={() => increaseValue(setWeight, 5)}>
            <Text style={styles.button}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.counter}>
          <TouchableOpacity onPress={() => decreaseValue(setAutoLoadSessions, 1)}>
            <Text style={styles.button}>-</Text>
          </TouchableOpacity>
          <Text style={styles.value}>{autoLoadSessions} Sessions to Auto-Load</Text>
          <TouchableOpacity onPress={() => increaseValue(setAutoLoadSessions, 1)}>
            <Text style={styles.button}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.counter}>
          <TouchableOpacity onPress={() => decreaseValue(setAutoLoadIncrement, 1)}>
            <Text style={styles.button}>-</Text>
          </TouchableOpacity>
          <Text style={styles.value}>+{autoLoadIncrement} lb/session</Text>
          <TouchableOpacity onPress={() => increaseValue(setAutoLoadIncrement, 1)}>
            <Text style={styles.button}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.counter}>
          <TouchableOpacity onPress={() => decreaseValue(setDeloadSessions, 1)}>
            <Text style={styles.button}>-</Text>
          </TouchableOpacity>
          <Text style={styles.value}>{deloadSessions} lb to deload</Text>
          <TouchableOpacity onPress={() => increaseValue(setDeloadSessions, 1)}>
            <Text style={styles.button}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.counter}>
          <TouchableOpacity onPress={() => decreaseValue(setDeloadDays, 1)}>
            <Text style={styles.button}>-</Text>
          </TouchableOpacity>
          <Text style={styles.value}>{deloadDays} Days to deload</Text>
          <TouchableOpacity onPress={() => increaseValue(setDeloadDays, 1)}>
            <Text style={styles.button}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  exerciseName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  counter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  button: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'lightgray',
    borderRadius: 10,
  },
  value: {
    fontSize: 18,
    marginHorizontal: 10,
  },
});

export default ExerciseCounter;
