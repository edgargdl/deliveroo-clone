import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import Card from './card';
import ExerciseSelectionModal from './modal';

const Programs = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
    });
  }, []);

  useEffect(() => {}, []);

  const [exerciseNames, setExerciseNames] = useState([
    "Day 1",
    "Day 2",
    "Day 3",
    "Day 4",
    "Day 5",
    "Day 6",
    "Day 7",
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState(null);

  const availableExercises = [
    "Day 1",
    "Day 2",
    "Day 3",
    "Day 4",
    "Day 5",
    "Day 6",
    "Day 7",
  ];

  const openModal = () => {
    setModalVisible(true);
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

  const navigateToExcercises = () => {
    navigation.navigate('Excercises');
  };


  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.exerciseListContainer}>
          <ScrollView contentContainerStyle={styles.exerciseList}>
            {exerciseNames.map((exerciseName, index) => (
          
              <Card
                title={exerciseName}
                onDelete={handleExerciseDelete} // Pass the delete function
                showDeleteButton={true}
                key={index}
                onPress={navigateToExcercises}

              />

            ))}
          </ScrollView>
        </View>
        <View style={styles.addButtonContainer}>
          <TouchableOpacity style={styles.addButton} onPress={openModal}>
            <Text style={styles.addButtonText}>+</Text> 
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <ExerciseSelectionModal
        visible={modalVisible}
        exercises={availableExercises}
        onSelectExercise={closeAndSelectExercise}
        onClose={() => setModalVisible(false)}
      />
    </>
  );
};

export default Programs;
