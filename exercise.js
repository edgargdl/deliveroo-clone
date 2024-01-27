import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Excersice = ({ title, onDelete , onPress }) => {
  const styles = StyleSheet.create({
    card: {
      backgroundColor: 'black',
      borderRadius: 10,
      padding: 10,
      margin: 8,
      flexDirection: 'row',
      justifyContent: 'space-between', // Align title and delete button
    },
    content: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      color: 'white',
      fontWeight: 'bold',
    },
    deleteButton: {
      backgroundColor: 'red', // Red background color for delete button
      borderRadius: 5,
      paddingHorizontal: 10,
      paddingVertical: 5,
    },
    deleteButtonText: {
      color: 'white',
      fontWeight: 'bold',
    },
  });

  return (
    <TouchableOpacity onPress={onPress}>
    <View style={styles.card}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <TouchableOpacity style={styles.deleteButton} onPress={() => onDelete(title)}>

        



        <Text style={styles.deleteButtonText}>-</Text>
      </TouchableOpacity>
    </View>
    </TouchableOpacity>
  );
};

export default Excersice;
