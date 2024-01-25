import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Card = ({ title, onDelete, showDeleteButton }) => {
  const styles = StyleSheet.create({
    card: {
      backgroundColor: 'black',
      borderRadius: 10,
      padding: 20,
      margin: 5,
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
      fontSize: 20,
    },
    deleteButton: {
      backgroundColor: 'red', // Red background color for delete button
      borderRadius: 50,
      paddingHorizontal: 10,
      paddingVertical: 2,
    },
    deleteButtonText: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 50,
    },
  });

  return (
    <TouchableOpacity>
    <View style={styles.card}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
      </View>
      {showDeleteButton && (
        <TouchableOpacity style={styles.deleteButton} onPress={() => onDelete(title)}>
          <Text style={styles.deleteButtonText}>-</Text>
        </TouchableOpacity>
      )}
    </View>
    </TouchableOpacity>
  );
};

export default Card;
