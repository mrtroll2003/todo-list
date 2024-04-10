import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const AddScreen = () => {

  const [name, setName] = useState('');
  const [nextId, setNextId] = useState(1);
  const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [status, setStatus] = useState('');
  const navigation = useNavigation();
const route = useRoute();

  const handleAddTask = () => {
    const newTask = {
      id: nextId,
      description,
      date,
      name,
      status,
    };

    // Pass the new task back to the main screen
    route.params.addTask(newTask);

    // Increment the nextId value for the next task
    setNextId(nextId + 1);

    // Navigate back to the main screen
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Add Task Screen</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
              placeholder="Description"
              value={description}
              onChangeText={setDescription}
              style={styles.input}
            />
            <TextInput
              placeholder="Date"
              value={date}
              onChangeText={setDate}
              style={styles.input}
            />
            <TextInput
                    placeholder="Status"
                    value={status}
                    onChangeText={setStatus}
                    style={styles.input}
                  />
      <Button title="Add Task" onPress={handleAddTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    width: '80%',
  },
  picker: {
    width: '80%',
    marginBottom: 10,
  },
});

export default AddScreen;