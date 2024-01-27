import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import Excersice from './exercise';
import ExerciseSelectionModal from './modal';

const Excersices = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
    });
  }, []);

  useEffect(() => {}, []);

  const [exerciseNames, setExerciseNames] = useState([
    "Bench Press",
    "Squats",
    "Deadlift",
    "Pull-Ups",
    "Push-Ups",
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState(null);

  const availableExercises = [
    "Exercise 1",
    "Exercise 2",
    "Exercise 3",
    "Exercise 4",
    "Exercise 5",
  ];

  const openModal = () => {
    setModalVisible(true);
  };

  const navigateToExcercise = () => {
    console.log("Navigate 2");
    navigation.navigate('Excercise');
  };


  const closeAndSelectExercise = (exercise) => {
    setSelectedExercise(exercise);
    setModalVisible(false);
    // Add the selected exercise to the exerciseNames array
    setExerciseNames([...exerciseNames, exercise]);
  };


  // Function to handle exercise deletion
  const handleExerciseDelete = (exerciseTitle) => {
    // Filter out the exercise with the given title from the exerciseNames array
    const updatedExercises = exerciseNames.filter((name) => name !== exerciseTitle);
    setExerciseNames(updatedExercises);
  };


  const styles = StyleSheet.create({
    addButtonContainer: {
      position: 'absolute',
      bottom: 5,
      right: 10,
    },
    addButton: {
      backgroundColor: 'black',
      borderRadius: 50,
      width: 50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    addButtonText: {
      color: 'white',
      fontSize: 30,
      fontWeight: 'bold',
    },
    selectedExerciseContainer: {
      alignItems: 'center',
      marginTop: 20,
    },
    exerciseListContainer: {
      flex: 1,
      marginBottom: 60, // Adjust margin to create space for the button
    },
    exerciseList: {
      flexGrow: 1,
    },
  });

  return (
    <>
      
        <View style={styles.exerciseListContainer}>
        <ScrollView contentContainerStyle={styles.exerciseList}>
            {exerciseNames.map((exerciseName, index) => (
              <Excersice
                key={index}
                title={exerciseName}
                onDelete={handleExerciseDelete} // Pass the delete function
onPress={navigateToExcercise}
              />
            ))}
          </ScrollView>
        </View>
        <View style={styles.addButtonContainer}>
          <TouchableOpacity style={styles.addButton} onPress={openModal}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      
      <ExerciseSelectionModal
        visible={modalVisible}
        exercises={availableExercises}
        onSelectExercise={closeAndSelectExercise}
        onClose={() => setModalVisible(false)}
      />

    </>
  );
};

export default Excersices;
