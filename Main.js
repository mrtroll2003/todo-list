import React, { useState } from 'react';
import { FlatList, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MainScreen = () => {
  const [taskList, setTaskList] = useState([]);
  const navigation = useNavigation();

  const handleTaskPress = (task) => {
    navigation.navigate('Detail', { task });
  };

  const addTask = (newTask) => {
    // Update the task list state by appending the new task
    setTaskList((prevTaskList) => [...prevTaskList, newTask]);
  };

  const renderTaskItem = ({ item }) => (
    <TouchableOpacity
      style={styles.taskBox}
      onPress={() => handleTaskPress(item)}
    >
      <Text style={styles.taskName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={taskList}
        renderItem={renderTaskItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.taskList}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Add', { addTask })}
        style={styles.addButton}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  taskList: {
    width: '80%',
  },
  taskBox: {
    borderWidth: 1,
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  taskName: {
    fontSize: 16,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default MainScreen;