import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const TaskManager = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);  const addTask = () => {
    setTasks([...tasks, task]);
    setTask('');
  };  const removeTask = index => {
    setTasks(tasks.filter((task, i) => i !== index));
  };  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          style={styles.textInput}
          onChangeText={text => setTask(text)}
          value={task}
          placeholder="Add a task"
        />
        <Button title="Add" onPress={addTask} />
      </View>
      <ScrollView style={styles.taskList}>
        {tasks.map((task, index) => (
          <View key={index} style={styles.taskContainer}>
            <Text style={styles.taskText}>{task}</Text>
            <Button title="Delete" onPress={() => removeTask(index)} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  textInput: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
  },
  taskList: {
    width: '100%',
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
  },
  taskText: {
    fontSize: 18,
  },
});export default TaskManager;