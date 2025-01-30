import React, { useState, useRef } from 'react';
import { FlatList, View, TextInput, Text, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from '../../styles/taskListScreen';

interface Task {
  id: string;
  title: string;
  completed: boolean;
  favorited: boolean;
}

export default function TaskListScreen() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', title: 'Testando', completed: false, favorited: false },
    { id: '2', title: 'Teste', completed: false, favorited: false },
  ]);
  const [newTask, setNewTask] = useState('');
  const inputRef = useRef<TextInput>(null); 

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks((prevTasks) => [
        ...prevTasks,
        { id: Date.now().toString(), title: newTask, completed: false, favorited: false },
      ]);
      setNewTask('');
    }
  };

  const handleFocusInput = () => {
    inputRef.current?.focus();
  };

  const toggleTaskCompletion = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task))
    );
  };

  const toggleFavorite = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, favorited: !task.favorited } : task))
    );
  };

  const renderTask = ({ item }: { item: Task }) => (
    <View style={styles.taskContainer}>
      <TouchableOpacity onPress={() => toggleTaskCompletion(item.id)} style={styles.checkbox}>
        {item.completed ? (
          <MaterialCommunityIcons name="checkbox-marked-circle" size={24} color="#4a90e2" />
        ) : (
          <MaterialCommunityIcons name="checkbox-blank-circle-outline" size={24} color="#a1a1a1" />
        )}
      </TouchableOpacity>
      <Text style={[styles.taskText, item.completed && styles.completedTask]}>{item.title}</Text>
      <TouchableOpacity onPress={() => toggleFavorite(item.id)}>
        <MaterialCommunityIcons
          name="star"
          size={24}
          color={item.favorited ? '#FFD700' : '#a1a1a1'} // Amarelo se favoritado, cinza caso contrário
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
     
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Compras</Text>

        
        <TextInput
          ref={inputRef}
          style={styles.input}
          placeholder="Digite a nova tarefa"
          placeholderTextColor="#a1a1a1"
          value={newTask}
          onChangeText={setNewTask}
          onSubmitEditing={handleAddTask}
          returnKeyType="done"
        />
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={renderTask}
        contentContainerStyle={styles.listContainer}
      />
    </KeyboardAvoidingView>
  );
}


