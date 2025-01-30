import React, { useState, useRef } from 'react';
import {
  FlatList,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from '../../styles/taskListScreen';

interface Task {
  id: string;
  title: string;
  dueDate: string;
  completed: boolean;
  favorited: boolean;
}

export default function TaskListScreen() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', title: 'Testando', dueDate: '30/01/2025', completed: false, favorited: false },
    { id: '2', title: 'Teste', dueDate: '31/01/2025', completed: false, favorited: false },
  ]);
  const [newTask, setNewTask] = useState('');
  const [newDueDate, setNewDueDate] = useState('');
  const inputRef = useRef<TextInput>(null);

  // Função para formatar automaticamente a data em "dd/mm/aaaa"
  const handleDateChange = (text: string) => {
    let formattedText = text.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (formattedText.length >= 5) {
      formattedText = `${formattedText.slice(0, 2)}/${formattedText.slice(2, 4)}/${formattedText.slice(4, 8)}`;
    } else if (formattedText.length >= 3) {
      formattedText = `${formattedText.slice(0, 2)}/${formattedText.slice(2, 4)}`;
    }

    setNewDueDate(formattedText);
  };

  const handleAddTask = () => {
    if (!newTask.trim()) {
      Alert.alert('Erro', 'Por favor, insira o nome da tarefa.');
      return;
    }
    if (newDueDate.length !== 10) {
      Alert.alert('Erro', 'Por favor, insira uma data de vencimento válida.');
      return;
    }

    setTasks((prevTasks) => [
      ...prevTasks,
      { id: Date.now().toString(), title: newTask, dueDate: newDueDate, completed: false, favorited: false },
    ]);
    setNewTask('');
    setNewDueDate('');
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
      <View style={styles.taskInfo}>
        <Text style={[styles.taskText, item.completed && styles.completedTask]}>{item.title}</Text>
        <Text style={styles.dueDateText}>Vence em: {item.dueDate}</Text>
      </View>
      <TouchableOpacity onPress={() => toggleFavorite(item.id)}>
        <MaterialCommunityIcons
          name="star"
          size={24}
          color={item.favorited ? '#FFD700' : '#a1a1a1'}
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
        <Text style={styles.headerTitle}>Tarefas semanais</Text>

        <TextInput
          ref={inputRef}
          style={styles.input}
          placeholder="Digite a nova tarefa"
          placeholderTextColor="#a1a1a1"
          value={newTask}
          onChangeText={setNewTask}
          returnKeyType="next"
        />

        <TextInput
          style={styles.input}
          placeholder="Data de vencimento (dd/mm/aaaa)"
          placeholderTextColor="#a1a1a1"
          keyboardType="numeric"
          value={newDueDate}
          onChangeText={handleDateChange}
          returnKeyType="done"
        />

        <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
          <Text style={styles.addButtonText}>Adicionar Tarefa</Text>
        </TouchableOpacity>
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
