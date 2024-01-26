import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import Card from './card';
import ExerciseSelectionModal from './modal';
import { Button } from 'react-native-elements';

const Runprogram = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
    });
  }, []);

  useEffect(() => {}, []);

  // Define the navigateToProgress function inside the component
  const navigateToProgress = () => {
    navigation.navigate('Progress');
  };

    // Define the navigateToProgress function inside the component
    const navigateToSettings = () => {
      navigation.navigate('Settings');
    };
  

  const [exerciseNames, setExerciseNames] = useState([
    { title: "Day 1", date: "October 19th, 2024", showDeleteButton: false },
    { title: "Day 2", date: "October 20th, 2024", showDeleteButton: false },
    { title: "Day 3", date: "October 21st, 2024", showDeleteButton: false },
    { title: "Day 4", date: "October 22nd, 2024", showDeleteButton: false },
    { title: "Day 5", date: "October 23rd, 2024", showDeleteButton: false },
    { title: "Day 6", date: "October 24th, 2024", showDeleteButton: false },
    { title: "Day 7", date: "October 25th, 2024", showDeleteButton: false },
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

  const styles = StyleSheet.create({
    addButtonContainer: {
      position: 'absolute',
      bottom: 5,
      right: 10,
    },

    settingsButtonContainer: {
      position: 'absolute',
      bottom: 5,
      left: 10,
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
        {exerciseNames.map((exercise, index) => (
  <Card
    key={index}
    title={exercise.title}
    date={exercise.date}
    showDeleteButton={exercise.showDeleteButton}
    onPress={navigateToProgress}
  />
))}
      </ScrollView>
        </View>
        <View style={styles.addButtonContainer}>
          <TouchableOpacity style={styles.addButton} onPress={openModal}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.settingsButtonContainer}>
        <TouchableOpacity style={styles.addButton}  onPress={navigateToSettings}>
          <Text style={styles.addButtonText}>S</Text> 
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

export default Runprogram;
