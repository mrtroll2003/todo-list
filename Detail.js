import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const DetailScreen = ({ route }) => {
  const { task } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.taskName}>{task.name}</Text>
      <Text style={styles.taskDetail}>Task Description: {task.description}</Text>
      <Text style={styles.taskDetail}>Task Date: {task.date}</Text>
      <Text style={styles.taskDetail}>Task Status: {task.status}</Text>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  taskName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  taskDetail: {
    fontSize: 18,
  },
};

export default DetailScreen;