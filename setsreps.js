import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ExerciseCounter = ({
  exerciseName,
  initialSets,
  initialReps,
  initialWeight,
  initialAutoLoadSessions,
  initialAutoLoadIncrement,
  initialDeloadSessions,
  initialDeloadDays,
}) => {
  const [sets, setSets] = useState(initialSets);
  const [reps, setReps] = useState(initialReps);
  const [weight, setWeight] = useState(initialWeight);
  const [autoLoadSessions, setAutoLoadSessions] = useState(initialAutoLoadSessions);
  const [autoLoadIncrement, setAutoLoadIncrement] = useState(initialAutoLoadIncrement);
  const [deloadSessions, setDeloadSessions] = useState(initialDeloadSessions);
  const [deloadDays, setDeloadDays] = useState(initialDeloadDays);

  const increaseValue = (stateSetter, value) => {
    stateSetter((prevValue) => prevValue + value);
  };

  const decreaseValue = (stateSetter, value) => {
    stateSetter((prevValue) => (prevValue > 1 ? prevValue - value : prevValue));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.exerciseName}>{exerciseName}</Text>
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
          <Text style={styles.value}>Current Weight {weight} lb</Text>
          <TouchableOpacity onPress={() => increaseValue(setWeight, 5)}>
            <Text style={styles.button}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.counter}>
          <TouchableOpacity onPress={() => decreaseValue(setAutoLoadSessions, 1)}>
            <Text style={styles.button}>-</Text>
          </TouchableOpacity>
          <Text style={styles.value}>Auto-Load every {autoLoadSessions} day(s)  </Text>
          <TouchableOpacity onPress={() => increaseValue(setAutoLoadSessions, 1)}>
            <Text style={styles.button}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.counter}>
          <TouchableOpacity onPress={() => decreaseValue(setAutoLoadIncrement, 1)}>
            <Text style={styles.button}>-</Text>
          </TouchableOpacity>
          <Text style={styles.value}>{autoLoadIncrement} lb to Load</Text>
          <TouchableOpacity onPress={() => increaseValue(setAutoLoadIncrement, 1)}>
            <Text style={styles.button}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.counter}>
          <TouchableOpacity onPress={() => decreaseValue(setDeloadSessions, 1)}>
            <Text style={styles.button}>-</Text>
          </TouchableOpacity>
          <Text style={styles.value}>{deloadSessions}lb to Deload</Text>
          <TouchableOpacity onPress={() => increaseValue(setDeloadSessions, 1)}>
            <Text style={styles.button}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.counter}>
          <TouchableOpacity onPress={() => decreaseValue(setDeloadDays, 1)}>
            <Text style={styles.button}>-</Text>
          </TouchableOpacity>
          <Text style={styles.value}>Deload After {deloadDays} Days</Text>
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
